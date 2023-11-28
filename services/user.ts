import jwt from "jsonwebtoken";

let users: Array<cadastroBody> = [];
interface loginBody {
  email: string;
  password: string;
}
interface cadastroBody extends loginBody {
  nome: string;
}

const SECRET = process.env.JWT_SECRET;

function createToken(user: cadastroBody) {
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

export function cadastro(body: cadastroBody) {
  const user = users.find(({ email }) => email === body.email);
  if (user) throw new Error("Usuário já cadastrado");

  users.push(body);

  const token = createToken(body);
  return token;
}

export function login(body: loginBody) {
  const user = users.find(({ email }) => email === body.email);
  if (!user) throw new Error("Usuário não encontrado");
  if (user.password !== body.password) throw new Error("Senha incorreta");

  const token = createToken(user);
  return token;
}
