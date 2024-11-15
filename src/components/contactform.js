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
        <div className="actions" style={{...buttonsStyle, 
          textAlign: 'center',
        }}>
              <button type="submit"  className="primary-btn" style={{
              color: 'var(--bg)',
              backgroundColor:'var(--buttonBg)',
        }}>Send</button>
        </div>
        <input type="hidden" name="_recaptcha" id="_recaptcha"/>
          <script src="https://www.google.com/recaptcha/api.js?render=6Lf7UsoUAAAAACT2Z6gLyh7RTDfyYGxfZ-M4D0ph"></script>
          <script src="https://www.flexyform.com/js/recaptcha.js"></script>
      </form>
    );
  }
}
export default ContactForm
