import * as types from '../actions/actionTypes';

const defaultState: types.Default ={ 
    notes:[],
    loading:false
}

const notesReducer = (state: types.Default = defaultState, action:types.NotesActionTypes): types.Default => {

    switch(action.type){
        case types.LOAD_NOTES:
            return{
                ...state,
                notes: action.payload,
                loading:false,
        
            }

        default: 
            return state;
    }

}

export default notesReducer;