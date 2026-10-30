import { error } from "node:console";
import { createServer } from "node:http";

const menu = [
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella, fresh basil and olive oil.",
    price: 9.5,
    rating: 4.9,
    spicy: false,
    bestseller: true,
    vegetarian: true,
  },
  {
    name: "Diavola",
    description: "Tomato sauce, mozzarella, spicy salami, chili and olives.",
    price: 11.5,
    rating: 4.8,
    spicy: true,
    bestseller: true,
    vegetarian: false,
    isNew: true,
  },
  {
    name: "Prosciutto",
    description: "Tomato sauce, mozzarella, prosciutto cotto and mushrooms.",
    price: 12.5,
    rating: 4.7,
    spicy: false,
    bestseller: false,
    vegetarian: false,
  },
  {
    name: "Quattro Formaggi",
    description:
      "Mozzarella, gorgonzola, fontina and parmesan on a light tomato base.",
    price: 13.0,
    rating: 4.7,
    spicy: false,
    bestseller: false,
    vegetarian: true,
  },
  {
    name: "Capricciosa",
    description:
      "Tomato sauce, mozzarella, ham, mushrooms, artichokes and olives.",
    price: 13.5,
    rating: 4.6,
    spicy: false,
    bestseller: false,
    vegetarian: false,
  },
  {
    name: "Marinara",
    description:
      "Tomato sauce, garlic, oregano and olive oil. A Neapolitan classic without cheese.",
    price: 8.5,
    rating: 4.5,
    spicy: false,
    bestseller: false,
    vegetarian: true,
  },
];

const orders = [];

const server = createServer((request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

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

  if (request.method === "POST" && request.url === "/api/orders") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      try {
        const order = JSON.parse(body);
        if (!Array.isArray(order.items) || order.items.length === 0) {
          response.whiteHead(400, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          response.end(JSON.stringify({ error: "Invalid order" }));
          return;
        }
        orders.push(order);
        response.writeHead(201, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        response.end(JSON.stringify({ status: "received", id: orders.length }));
      } catch {
        response.writeHead(400, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        response.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3001");
});
