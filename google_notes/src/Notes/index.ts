import Notes from "./Notes";
import NotesGrid from "./NotesGrid";
import NotesItem from "./NotesItem";

const NotesComponent = Object.assign(Notes, {
  Grid: NotesGrid,
  Item: NotesItem,
});

export default NotesComponent;
