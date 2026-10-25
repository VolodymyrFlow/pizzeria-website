import { createServer } from "node:http";

const menu = [
  { name: "Margherita", price: 9.5 },
  { name: "Diavola", price: 11.5 },
];

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (request.method === "GET" && request.url === "/api/pizzas") {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    response.end(JSON.stringify(menu));
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3001");
});
