-- CreateTable
CREATE TABLE "users" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "users_name_idx" ON "users"("name");

-- CreateIndex
CREATE INDEX "users_age_idx" ON "users"("age");
