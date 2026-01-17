import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./firebase.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    const { parentName, email, phone, childName, message } = req.body;

    if (!parentName || !email || !phone) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    await db.collection("registrations").add({
      parentName,
      email,
      phone,
      childName,
      message,
      createdAt: new Date()
    });

    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/gallery", async (req, res) => {
  try {
    const snapshot = await db
      .collection("gallery")
      .orderBy("order", "asc")
      .get();

    const images = snapshot.docs.map(doc => doc.data());
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
