-- CreateTable
CREATE TABLE "SkillLanguageProficiency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" INTEGER NOT NULL,

    CONSTRAINT "SkillLanguageProficiency_pkey" PRIMARY KEY ("id")
);
