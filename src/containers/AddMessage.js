import {connect} from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import {AddMessage} from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message,author))
  }
})

export const AddMessage = connect(null, mapDispatchToProps)(AddMessageComponent)
