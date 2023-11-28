import Usuario from "../../../src/models/Usuario";
import { cadastro } from "../../../services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newUser = await Usuario.create(req.body);
    // const { id, nome, email } = newUser;
    res.status(201);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
