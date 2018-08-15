import {ADD_MESSAGE, ADD_USER, USERS_LIST} from '../constants/ActionTypes'
import {addUser, messageReceived, populateUsersList} from '../actions'

const setupSocket = (dispatch, username)=>{
  let HOST = Window.location.origin.replace(/^http/, 'ws')
  const socket = new WebSocket(HOST)

  socket.onopen = () =>{
    socket.send(JSON.stringify({
      type: ADD_USER,
      name: username
    }))
  }
  socket.onmessage=(event)=>{
    const data = JSON.parse(event.data)
    switch (data.type){
      case ADD_MESSAGE:
        dispatch(messageReceived(data.message,data.author))
        break
      case ADD_USER:
        dispatch(addUser(data.name))
        break
      case USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }
  return socket

}

export default setupSocket
