let users : Array<string> = [];

export function cadastro(body) {
  const user = users.find(({ email }) => email === body.email);
  if(user) throw new Error('Usuário já cadastrado')
}

export function login(body : any){
  const user = users.find(({ email }) => email === body.email)
  if (!user) throw new Error('Usuário não encontrado')
  if(user.password !== body.password)
}