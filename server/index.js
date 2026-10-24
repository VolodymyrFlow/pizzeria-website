import { error } from "node:console";
import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  response.writeHead(404, { "Content-type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3001");
});
