import express, { Request, Response } from 'express';

interface RegisterRequest {
  email: string;
  password: string;
}

const app = express();

function register(req: Request, res: Response) {
  const { email, password }: RegisterRequest = req.body;
  
  // Cria usuário

  return res.json({ email, password });
}

app.post('/register', register);
