const express = require("express");
const movieRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

movieRouter.get("/", async (req, res) => {
  const movies = await prisma.movies.findMany({
    include: {
      genres: true,
    },
  });
  res.status(200).send(movies);
});
movieRouter.get("/:id", async (req, res) => {
  const movie = await prisma.movies.findMany({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send(movie);
});

module.exports = movieRouter;
