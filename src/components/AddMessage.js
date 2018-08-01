import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input = React.createRef()

  return(
    <section id="new-message">
      <input
        onKeyPress={(e)=>{
          if (e.key === 'Enter'){
            props.dispatch(input.current.value, 'Me')
            input.current.value = ''
          }
        }}
        type="text"
        ref={input}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
