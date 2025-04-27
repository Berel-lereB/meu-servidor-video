// server.js
const express = require('express');
const path = require('path');
const app = express();

// Pasta onde estão os vídeos
const pastaVideos = path.join(__dirname, 'videos');
app.use('/videos', express.static(pastaVideos));

// Rota inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Meu Catálogo de Vídeos</h1>
    <video width="640" controls>
      <source src="/videos/seu-video.mp4" type="video/mp4">
      Seu navegador não suporta vídeo HTML5.
    </video>
  `);
});

// Porta padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
