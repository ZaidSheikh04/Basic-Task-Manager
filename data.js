const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (!uri) {
    res.status(500).json({ error: 'Server is missing MONGODB_URI configuration' });
    return;
  }

  try {
    const client = await getClient();
    const db = client.db('mission_control');
    const col = db.collection('userdata');

    if (req.method === 'GET') {
      const key = String(req.query.key || '').trim();
      if (!key) {
        res.status(400).json({ error: 'Missing sync key' });
        return;
      }
      const doc = await col.findOne({ _id: key });
      res.status(200).json({
        tasks: doc && doc.tasks ? doc.tasks : [],
        progress: doc && doc.progress ? doc.progress : { xp: 0, streak: 0, lastCompletionDate: null }
      });
      return;
    }

    if (req.method === 'POST') {
      const body = req.body || {};
      const key = String(body.key || '').trim();
      if (!key) {
        res.status(400).json({ error: 'Missing sync key' });
        return;
      }
      await col.updateOne(
        { _id: key },
        {
          $set: {
            tasks: Array.isArray(body.tasks) ? body.tasks : [],
            progress: body.progress || { xp: 0, streak: 0, lastCompletionDate: null },
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Mission Control API error:', err);
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
