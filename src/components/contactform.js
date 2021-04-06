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
          <input type="text" name="fullname" style={{
              color: 'var(--messageText)',
              }}/>
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" style={{
              color: 'var(--messageText)',
              }}/>
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="10" style={{
              color: 'var(--messageText)',
              }}></textarea>
        </div>
        <div className="actions" style={buttonsStyle} style={{
          textAlign: 'center',
        }}>
              <button type="submit"  className="primary-btn" style={{
              color: 'var(--bg)',
              backgroundColor:'var(--buttonBg)',
        }}>Send</button>
        </div>
      </form>
    );
  }
}
export default ContactForm
