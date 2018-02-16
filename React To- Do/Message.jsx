import React from 'react';

class Message extends React.Component {

  shouldComponentUpdate () {
    if (this.props.messageText != "success") return true
    else return false
  } 
  
  render () {
    return (
      <div>
        <input type="text" placeholder="Message" value={this.props.messageText} />
      </div>
    )
  } 
}

export default Message;
