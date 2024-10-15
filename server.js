// server.js
const express = require("express");
const cors = require("cors");

const app = express();

let data = { message: "여러분 화이팅!" };

// CORS 설정을 위한 헤더
app.use(
  cors({
    origin: "http://127.0.0.1:9000",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
    headers: { "Content-Type": "application/json" },
  })
);

app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  //res.writeHead(204, headers);
  return res.send();
});

app.get("/", (req, res) => {
  //res.writeHead(200, { "Content-Type": "application/json", ...headers });
  return res.json(data);
});

app.post("/", (req, res) => {
  data.message = req.body;
  //res.writeHead(200, headers);
  return res.send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  //res.writeHead(200, headers);
  return res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  //res.writeHead(200, headers);
  res.send("데이터가 삭제되었습니다.");
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
