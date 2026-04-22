const express = require("express");
const app = express();

// Rota Principal
app.get("/", (req, res) => {
    res.send("<h1>Página Inicial</h1>");
});

// Rota simples de Sobre
app.get("/sobre", (req, res) => {
    res.send("<h1>Sobre nós</h1><p>Sistema rodando no Node!</p>");
});

// Rota com Parâmetro (Ex: /ola/joao)
app.get("/ola/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`<h1>Olá, ${nome}!</h1>`);
});

// Configuração da Porta (Railway usa process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, (erro) => {
    if (erro) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log(`Servidor rodando na porta ${PORT}`);
    }
});