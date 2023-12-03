import { cadastro } from "../../../services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newUser = await cadastro(req);
    const { nome, email, password_hash }: any = newUser;
    res.status(201).json({ nome, email, password_hash });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
