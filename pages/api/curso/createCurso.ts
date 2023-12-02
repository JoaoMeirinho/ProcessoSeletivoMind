import Curso from "../../../src/models/Curso";
import { createCurso } from "../../../services/curso";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const request = req.body;
    const newCurso = await createCurso(request);
    const { nome, professor_responsavel, categoria, descricao, imagem } =
      newCurso;
    res
      .status(201)
      .json({ nome, professor_responsavel, categoria, descricao, imagem });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
