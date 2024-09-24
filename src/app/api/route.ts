import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method == "GET") {
    console.log('aaa')
    try {
      const skillLanguageProficiencies =
        await prisma.skillLanguageProficiency.findMany();
      res.status(200).json(skillLanguageProficiencies);
    } catch (e) {
      res.status(500).json({ error: "Internak Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}