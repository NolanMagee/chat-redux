import users from './users'
import {ADD_USER} from '../constants/ActionTypes'

describe('Users reducer', () => {
  it('should return the initial state, empty', ()=>{
    expect(users(undefined, {})).toEqual([])
  })

  it('Should handle ADD_USER and add every user', ()=>{
    expect(
      users([], {
        type: ADD_USER,
        name: 'Tony'
      })
    ).toEqual([{
      name: 'Tony'
    }])

    expect(
      users([
        {
          name: 'Mark'
        }
      ],{
        type: ADD_USER,
        name: 'Hercules'
      })
    ).toEqual([
      {
      name: 'Mark'
    },{
      name: 'Hercules'
    }
  ])
  })
})
