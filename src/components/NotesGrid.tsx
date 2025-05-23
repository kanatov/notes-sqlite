import { NoteInterface } from "@/lib/notes";
import Note from "@/components/Note";
import { compareDesc } from "date-fns";

export default function NotesGrid({ notes }: { notes: NoteInterface[] }) {
  return (
    <ul className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
      {notes
        .sort((a, b) => compareDesc(a.updated_at, b.updated_at))
        .map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
    </ul>
  );
}
