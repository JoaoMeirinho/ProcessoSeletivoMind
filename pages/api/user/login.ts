import { login } from "../../../services/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await login(req);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
