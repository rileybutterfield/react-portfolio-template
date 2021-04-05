import React from 'react'
class ContactForm extends React.Component {
  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      textAlign: "center",
    }
    return (
      <form style={formStyle} className="form" action={this.props.action} method="post">
        <div>
          <label>Full name</label>
          <input type="text" name="fullname"/>
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="10"></textarea>
        </div>
        <div className="actions" style={buttonsStyle}>
              <button type="submit"  className="primary-btn">Send</button>
        </div>
      </form>
    );
  }
}
export default ContactForm
