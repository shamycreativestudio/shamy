// Vercel Serverless Function - Lee briefs desde Notion para el panel admin

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Autenticación básica
function checkAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verificar autenticación
  if (!checkAuth(req)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin Panel"');
    return res.status(401).json({ error: 'Autenticación requerida' });
  }

  try {
    if (req.method === 'GET') {
      // Obtener todos los briefs
      const response = await notion.databases.query({
        database_id: DATABASE_ID,
        sorts: [
          {
            timestamp: 'created_time',
            direction: 'descending',
          },
        ],
      });

      const briefs = response.results.map((page) => {
        const props = page.properties;
        return {
          id: page.id,
          nombre: props.Nombre?.title[0]?.text?.content || '',
          email: props.Email?.email || '',
          empresa: props.Empresa?.rich_text[0]?.text?.content || '',
          telefono: props.Telefono?.phone_number || '',
          presupuesto: props.Presupuesto?.select?.name || '',
          tipo: props.Tipo?.select?.name || '',
          descripcion: props.Descripcion?.rich_text[0]?.text?.content || '',
          objetivo: props.Objetivo?.rich_text[0]?.text?.content || '',
          referencias: props.Referencias?.rich_text[0]?.text?.content || '',
          imagenes: props.Imagenes?.files.map((f) => f.external?.url || f.file?.url) || [],
          estado: props.Estado?.select?.name || 'Nuevo',
          fecha: page.created_time,
        };
      });

      return res.status(200).json(briefs);
    }

    if (req.method === 'DELETE') {
      // Eliminar brief
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'ID requerido' });
      }

      await notion.pages.update({
        page_id: id,
        archived: true,
      });

      return res.status(200).json({ success: true, message: 'Brief eliminado' });
    }

    return res.status(405).json({ error: 'Método no permitido' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Error al procesar la solicitud',
      details: error.message,
    });
  }
};
