import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middleware/rateLimiter.js";
import who from "./src/middleware/who.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: CLIENT_URL,
  }));
}

app.use(express.json());

app.use(rateLimiter);
app.use(who);

app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  const clientDistPath = path.resolve(__dirname, "../client/dist");
  app.use(express.static(clientDistPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
