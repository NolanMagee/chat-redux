import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from './Sidebar'

Enzyme.configure({adapter: new Adapter()})

describe('Sidebar', ()=>{
  it('should render self', () =>{
    const props = {
      users: [],
      addUser: jest.fn()
    }
    const testSidebar = mount(<Sidebar {...props} />)
    expect(testSidebar.find('aside').length).toBe(1)
  })
})
