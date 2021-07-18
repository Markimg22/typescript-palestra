import express from 'express';

const app = express();

function register(req, res) {
  const { email, password } = req.body;
  
  // Cria usuário

  return res.json({ email, password });
}

app.post('/register', register);
