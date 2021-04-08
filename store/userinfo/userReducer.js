import * as taskActionType from './userActionType';

const initialTaskState ={
  userList: [],
  getTaskLoading: false,
  addTaskLoading: false
}

const taskReducer =(state =  initialTaskState, {type,payload}) => {
  switch (type){
    case taskActionType.GET_TASK_BEGINS:
      return{
        ...state,
        getTaskLoading: true
      }
      case taskActionType.GET_TASK_SUCCESS:
        return{
          ...state,
          DeviceName: payload.DeviceName,
          Email: payload.Email,
          Password: payload.Password,
          DeviceId: payload.DeviceId,
          getTaskLoading: false
        }
        case taskActionType.GET_TASK_FAILURE:
          return{
            ...state,
            getTaskLoading: false
          }    
          case taskActionType.ADD_TASK_BEGINS:
            return{
              ...state,
              addTaskLoading: true
            }
            case taskActionType.ADD_TASK_SUCCESS:
              return{
                
                ...state,
                userList: [...state.userList, payload],
                addTaskLoading: false
              }
              case taskActionType.ADD_TASK_FAILURE:
                return{
                  ...state,
                  addTaskLoading: false
                }          
      default : return state
  }
}

export default taskReducer;