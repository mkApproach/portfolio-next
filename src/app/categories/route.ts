import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  // ★: Category テーブルのレコードを全て取得する
  const categories = await prisma.skillLanguageProficiency.findMany({
//    include: { _count: { select: { photos: true } } },
  });
//  console.log(`GET: /api/categories ${new Date().toISOString()}`);
  return Response.json({
    categories: categories.map(({ ...category }) => ({
      ...category,
    //  totalPhotoCount: _count.photos,
    })),
  });
}

