import { uploadImage } from "../../../services/curso";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const curso = await uploadImage(req);
    res.status(201).json(curso);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
