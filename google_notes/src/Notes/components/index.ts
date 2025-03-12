import Notes from "./Notes";
import NotesDisplay from "./NotesDisplay";
import NotesGrid from "./NotesGrid";
import NotesItem from "./NotesItem";
import NotesPlaceholder from "./NotesPlaceholder";

const NotesComponent = Object.assign(Notes, {
  Grid: NotesGrid,
  Item: NotesItem,
  Placeholder: NotesPlaceholder,
  Display: NotesDisplay,
});

export default NotesComponent;
