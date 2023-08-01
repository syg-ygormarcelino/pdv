import cors from "cors";
import express from "express";
import http from "http";
import { routes } from "./routes";

const app = express();

const server = http.createServer(app);

app.use(cors());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

  next();
});

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(routes)

const port = 3333;

server.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
