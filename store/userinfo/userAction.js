import axios from 'axios';
import apiConfig from '../../config/api.js';
import * as taskActionType from './userActionType';
import { ToastContainer, toast } from 'react-toastify';


export const getTask =() => async (dispatch) => {
  try{
    dispatch({ type: taskActionType.GET_TASK_BEGINS})
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);
    setTimeout(()=>
    dispatch({
      type: taskActionType.GET_TASK_SUCCESS,
      payload: result.data
  
      }),3000)

    }
  catch(error){
    console.log(error);
    dispatch({ type: taskActionType.GET_TASK_FAILURE})
    toast.error(error.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      });
  }
}

export const addTask =(taskData) => async (dispatch) => {
  try{
    dispatch({ type: taskActionType.ADD_TASK_BEGINS})
    const result = await axios.put(`${apiConfig.API_BASE_URL}/api/relays/6052e44860ab3d1d88673fb7`, taskData);
    setTimeout(()=>
    dispatch({
      type: taskActionType.ADD_TASK_SUCCESS,
      payload: result.data
  
      }),3000)
      toast.success('Okay');
    }
  catch(error){
    console.log(error);
    dispatch({ type: taskActionType.ADD_TASK_FAILURE})
    toast.error(error.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      });
    return(error);
  }
}