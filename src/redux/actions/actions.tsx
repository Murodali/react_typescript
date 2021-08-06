import * as types from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';

export const loadNotes = () => async( dispatch: Dispatch ) => {

    try{
     const res = await axios.get('http://localhost:5000/todos');

     dispatch( {
         type: types.LOAD_NOTES,
         payload: res.data,
     })

     console.log(res.data)

    } catch(err) {
       console.log(err)
    }


}