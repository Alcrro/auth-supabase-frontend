import express from "express";
import cookieParser from "cookie-parser";
const server = express();

server.use(express.json());
server.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "http://localhost:5173");

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});
server.use(cookieParser());

server.post("/api/v1/auth/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) return res.status(400).json("Fields re required!");

  const user = {
    email: "alex.roventa94@gmail.com",
    password: "12345678",
  };
  if (user.email === email && user.password === password) {
    return res
      .status(200)
      .json({ success: true, message: "logged in successfully!" });
  }
  return res
    .status(400)
    .json({ success: true, message: "Invalid credentials!" });
});

server.post("/api/v1/auth/set-cookie", (req, res) => {
  const { accessToken, refreshToken } = req.body;
  console.log(req.body);

  res.cookie("sb-access-token", accessToken, {
    httpOnly: true,
    secure: false, // true pe HTTPS
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 1000,
  });

  res.cookie("sb-refresh-token", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.sendStatus(200);
});

server.listen(3001, () => console.log("server running on part 3001"));
