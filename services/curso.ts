import { writeFile } from "fs/promises";
import Curso from "../src/models/Curso";
import path from "path";
import { NextApiRequest } from "next";

export async function uploadImage(file: NextApiRequest) {
  // const fileJson = JSON.parse(file.body);
  const dataFilePath = path.join(process.cwd(), "/pages/api/uploads/");
  if (!file.body) {
    throw new Error("Imagem não enviada");
  }

  const filename =
    Date.now() + file.headers["content-type"]?.replace("image/", ".");
  console.log(filename);
  try {
    await writeFile(dataFilePath + filename, file.body);
  } catch (error) {
    console.log("Error occured ", error);
    throw new Error("Um erro ocorreu ao processar a imagem enviada");
  }
}

export async function createCurso(req: any) {
  const reqJson = JSON.parse(req);

  const curso = await Curso.create(reqJson);
  // await uploadImage(reqJson.file);
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
