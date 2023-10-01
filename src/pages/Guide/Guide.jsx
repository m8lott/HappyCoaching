import './style.scss';
import Promo from '../../components/promo/Promo';
import Reviews from '../../components/reviews/Reviews';
import guide1 from './img/guide-1.svg';
import guide2 from './img/guide-2.png';

const Guide = () => {
return (
  <>
  <section className='guide__banner'>
  <div className="container">
    <div className="guide__banner-form">
      <div className="guide__banner-form-top">
        <div className="guide__banner-form-top-title">
        Results that speak for themselves
        </div>
        <div className="guide__banner-form-top-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
        </div>
      </div>
      <div className="guide__banner-form-bottom">
        <form action="#">
        <div className="guide__banner-form-bottom-inputs">
          <input type="text" name='guide name' placeholder='Name'/>
          <input type="text" name='guide email' placeholder='Enter your email'/>
        </div>
        <div className="guide__banner-form-bottom-privacy">
        We care about your data in our <a href='#'>privacy policy</a>
        </div>
        <div className="guide__banner-form-bottom-btn">
          <button type='submit' name='form submit'>Get free guide</button>
        </div>
        </form>
      </div>
    </div>
    <div className="guide__banner-right">
    <div className="guide__banner-right-img">
      <img src={guide2} alt="banner" />
    </div>
    </div>
  </div>
  </section>
  <Reviews />
  <Promo />
  <section className='guide__download'>
    <div className="container">
      <div className="guide__download-content">
      <div className="guide__download-title">
      Don’t miss out on my <span>‘Live life at the full potential’</span> free guide
      </div>
      <div className="guide__download-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </div>
      </div>
      <div className="guide__download-btn">
        <a href="#">Download my free guide</a>
      </div>
      <div className="guide__download-subtitle">
      More than 100+ 5 star reviews
      </div>
      <div className="guide__download-stars">
            <img src={guide1} alt="stars" />
            <img src={guide1} alt="stars" />
            <img src={guide1} alt="stars" />
            <img src={guide1} alt="stars" />
            <img src={guide1} alt="stars" />
      </div>
    </div>
  </section>
  </>
)
}

export default Guide;