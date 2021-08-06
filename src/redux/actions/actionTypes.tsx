export const LOAD_NOTES = 'LOAD_NOTES';



export interface Notes {
    notes: (Note)[];
    loading:false,
    note: Note
  }
  export interface Note {
    title: string;
    completed: boolean;
    id: number;
  }

export interface loadNotesAction {
    type: typeof LOAD_NOTES,
    payload: Notes
}

export type NotesDispatchTypes = Notes

export type NotesActionTypes = loadNotesAction

export type appActions = NotesActionTypes