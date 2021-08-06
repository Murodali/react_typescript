import * as types from '../actions/actionTypes';


const initial_State: types.Notes = {
    notes:[],
    note: {
        title:"",
        completed: false,
        id: 1
    },
    loading:false
}

const notesReducer = (state: types.Notes = initial_State, action:types.NotesActionTypes)=> {

    switch(action.type){
        case types.LOAD_NOTES:
            return{
                ...state,
                notes: action.payload,
                loading: false
            }

        default: 
            return state;
    }

}

export default notesReducer;