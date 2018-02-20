import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {

  shouldComponentUpdate(nextProps) {
    const {isChangeEvent, isChangeEventMessage} = nextProps
    return isChangeEvent && isChangeEventMessage;
  } 

  alertMessage() {
    const {messageText} = this.props
    if (messageText != "success") {
      if (messageText != "") alert(messageText)
    }    
  }
  
  render () {
    return (
      <div>
        {this.alertMessage()}
      </div>
    )
  } 
}

Message.propTypes = {
  isChangeEvent: PropTypes.boolean,
  isChangeEventMessage: PropTypes.boolean,
  messageText: PropTypes.string.isRequired
}

export default Message;
