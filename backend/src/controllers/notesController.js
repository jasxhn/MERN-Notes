import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNotebyId(req, res) {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found!" });

        // 🔒 check ownership
        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }

        res.json(note);
    } catch (error) {
        console.error("error in getNotebyId controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createANote(req, res) {
    try {
        const { title, content } = req.body;

        const note = await Note.create({
            title,
            content,
            user: req.user._id, // 🔥 KEY LINE
        });

        res.status(201).json(note);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found" });

        
        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }

        note.title = req.body.title || note.title;
        note.content = req.body.content || note.content;

        const updatedNote = await note.save();

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("error in updating note controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}


export async function deleteNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found" });


        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }

        await note.deleteOne();

        res.status(200).json({ message: "Note deleted successfully!!" });
    } catch (error) {
        console.error("error in deleteNote controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}