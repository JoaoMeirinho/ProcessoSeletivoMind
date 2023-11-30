import Curso from "../../../src/models/Curso";
import { createCurso } from "../../../services/curso";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newCurso = await createCurso(req);
    const { nome, professor_responsavel, categoria, descricao, imagem } =
      newCurso;
    res
      .status(201)
      .json({ nome, professor_responsavel, categoria, descricao, imagem });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
