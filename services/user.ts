let users: Array<string> = [];
interface loginBody {
  email: string;
  password: string;
}
interface cadastroBody extends loginBody {
  nome: string;
}

export function cadastro(body: cadastroBody) {
  const user = users.find(({ email }) => email === body.email);
  if (user) throw new Error("Usuário já cadastrado");
}

export function login(body: loginBody) {
  const user = users.find(({ email }) => email === body.email);
  if (!user) throw new Error("Usuário não encontrado");
  if (user.password !== body.password) throw new Error("Senha incorreta");

  return user;
}
