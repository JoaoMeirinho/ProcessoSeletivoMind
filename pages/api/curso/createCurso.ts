import Curso from "../../../src/models/Curso";
import { createCurso } from "../../../services/curso";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newCurso = await createCurso(req);
    res.status(201).json({...newCurso});
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}