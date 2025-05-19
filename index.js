const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

