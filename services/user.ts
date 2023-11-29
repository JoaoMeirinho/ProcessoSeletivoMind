import jwt from "jsonwebtoken";
import Usuario from "../src/models/Usuario";

interface loginBody {
  email: string;
  password: string;
}
interface cadastroBody extends loginBody {
  nome: string;
}

const SECRET = process.env.JWT_SECRET;

function createToken(user: any) {
  return jwt.sign({ email: user.email, nome: user.nome }, SECRET);
}

function readToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    throw new Error("Token inválido");
  }
}

export function verifica(token) {
  return readToken(token);
}

export async function cadastro(req: any) {
  const reqJson = JSON.parse(req.body);
  const user = await Usuario.findOne({ where: { email: reqJson.email } });
  if (user) throw new Error("Usuário já cadastrado");

  return Usuario.create(reqJson);
}

export async function login(req: any) {
  const reqJson = JSON.parse(req.body);
  const user = await Usuario.findOne({ where: { email: reqJson.email } });
  if (!user) throw new Error("Usuário não encontrado");
  if (!user.passwordIsValid(reqJson.password))
    throw new Error("Senha incorreta");

  const { nome, email, password_hash } = user;

  const token = createToken({ nome, email, password_hash });
  return token;
}
