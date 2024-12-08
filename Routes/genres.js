const express = require("express");
const genreRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

genreRouter.get("/", async (req, res) => {
  const genres = await prisma.genres.findMany();
  res.send(genres);
});

module.exports = genreRouter;
