import Curso from "../../../src/models/Curso";
import { getCurso } from "../../../services/curso";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cursos = await getCurso(req);
    res.status(201).json(cursos);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
