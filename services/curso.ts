import { writeFile } from "fs/promises";
import Curso from "../src/models/Curso";
import path from "path";
import { NextApiRequest } from "next";

export async function createCurso(req: any): Promise<Curso> {
  const reqJson = JSON.parse(req.body);
  const curso = await Curso.create(reqJson);
  return curso;
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
    return reqJson;
  }
}

export async function deleteCurso(req: any) {
  const reqJson = JSON.parse(req.body);
  if (!(JSON.stringify(reqJson) === "{}")) {
    await Curso.destroy({
      where: {
        id: reqJson.id,
      },
    });
    return reqJson;
  }
}
