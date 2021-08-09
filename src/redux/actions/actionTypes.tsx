export const LOAD_NOTES = 'LOAD_NOTES';


export interface Note {
  title: string;
  completed: boolean;
  id: number;
}


export interface Default {
  notes: Note[],
  loading:boolean,
}



export interface loadNotesAction {
    type: typeof LOAD_NOTES,
    payload: Note[]
}


export type NotesActionTypes = loadNotesAction

export type appActions = NotesActionTypes