import '../form/style.scss';

const Form = () => {
return (
  <div className="form">
    <div className="container">
      <div className="form__content">
        <p>Get notified when I publish new articles</p>
        <span>Stay up to date with the latest news, announcements, and articles.</span>
      </div>
      <div className="form__inputs">
        <form action='#'>
          <input type="text" placeholder='Enter your email' name='email input'/>
          <button type='submit' name='email submit'>Subscribe</button>
        </form>
      </div>
    </div>
  </div>
)
}

export default Form;