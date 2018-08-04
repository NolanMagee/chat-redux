import {addMessage, addUser} from '../actions'
import {ADD_MESSAGE, ADD_USER} from '../constants/ActionTypes'

describe('adding a message', () =>{
  it('should create an action to add a message with id 0', () =>{
    const message = 'Something'
    expect(addMessage(message).id).toEqual(0)
  });
  it('second message should create an action with an id of 1', ()=>{
    const message = "Arbitrary message"
    expect(addMessage(message).id).toEqual(1)
  });

});

describe('adding a user', ()=>{
  it('should create an action with user id of 0', ()=>{
    const user = "Yeezus"
    expect(addUser(user).id).toEqual(0)
  })
  it('second message should create an action with id of 1', ()=>{
    const user = "Vegeta"
    expect(addUser(user).id).toEqual(1)
  })
})
