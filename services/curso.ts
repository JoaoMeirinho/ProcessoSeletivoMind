import Curso from "../src/models/Curso";

export async function createCurso(req: any) {
  const reqJson = JSON.parse(req.body);

  return Curso.create(reqJson);
}

export async function getCurso(req: any) {
  // const reqJson = JSON.parse(req.body);
  const cursos = await Curso.findAll();
  return cursos;
}
