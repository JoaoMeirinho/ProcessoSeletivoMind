import { login } from "../../../services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = login(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
