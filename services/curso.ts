import Curso from "../src/models/Curso";

export async function createCurso(req: any) {
  const reqJson = JSON.parse(req.body);

  return Curso.create(reqJson);
}

export async function getCurso(req: any) {
  let cursos;
  const params = req.query;
  if (!(JSON.stringify(params) === "{}")) {
    cursos = await Curso.findByPk(params.id);
    return cursos;
  }
  cursos = await Curso.findAll();
  return cursos;
}

export async function updateCurso(req: any) {
  const reqJson = JSON.parse(req.body);
  if (!(JSON.stringify(reqJson) === "{}")) {
    await Curso.update(
      { ...reqJson },
      {
        where: {
          id: reqJson.id,
        },
      }
    );
  }
  return reqJson;
}
