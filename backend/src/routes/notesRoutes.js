import express from "express";
import { 
    createANote, 
    deleteNote, 
    getAllNotes, 
    updateNote,
    getNotebyId,
} from "../controllers/notesController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllNotes);

router.get("/:id", protect, getNotebyId);

router.post("/", protect, createANote);

router.put("/:id", protect, updateNote);

router.delete("/:id", protect, deleteNote);

export default router;