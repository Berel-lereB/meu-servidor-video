const express = require('express');
const path = require('path');
const app = express();

// Pasta onde ficam os vídeos
const pastaVideos = path.join(__dirname, 'videos');
app.use('/videos', express.static(pastaVideos));

// Rota para exibir a página inicial com vídeos dinâmicos
app.get('/', (req, res) => {
  res.send(`
    <h1>🎥 Meu Catálogo de Vídeos</h1>
    <p>Escolha um vídeo para assistir:</p>
    <ul>
      <li><a href="/video/seu-video1.mp4">Seu Vídeo 1</a></li>
      <li><a href="/video/seu-video2.mp4">Seu Vídeo 2</a></li>
      <!-- Adicione mais links conforme necessário -->
    </ul>
  `);
});

// Rota dinâmica para rodar qualquer vídeo da pasta
app.get('/video/:videoName', (req, res) => {
  const videoName = req.params.videoName; // Nome do vídeo da URL
  const videoPath = path.join(pastaVideos, videoName); // Caminho completo do vídeo

  // Verifica se o arquivo existe e serve o vídeo
  res.send(`
    <h1>Assistindo: ${videoName}</h1>
    <video width="640" controls>
      <source src="/videos/${videoName}" type="video/mp4">
      Seu navegador não suporta vídeo HTML5.
    </video>
  `);
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
