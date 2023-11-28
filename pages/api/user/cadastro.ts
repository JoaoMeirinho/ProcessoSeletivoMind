import Error from "next/error";
import { cadastro } from "../../../services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newUser = cadastro(req.body);
    res.status(201).json(newUser);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
