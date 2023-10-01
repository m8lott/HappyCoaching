import './style.scss';
import promo1 from './assets/img/promo-1.svg';
import promo2 from './assets/img/promo-2.svg';
import promo3 from './assets/img/promo-3.png';
import video from './assets/video/promo.mp4';

const Promo = () => {
return (
  <>
  <section className='promo'>
    <div className="container">
    <div className="promo__main">
    <div className="promo__main-left">
      <div className="promo__main-left-subtitle">
      How does it work?
      </div>
      <div className="promo__main-left-title">
      Are you ready to transform your life?
      </div>
      <div className="promo__main-left-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
    </div>
    <div className="promo__main-right">
    <div className="promo__main-right-item">
      <div className="promo__main-right-item-icon">
        <img src={promo1} alt="promo" />
      </div>
      <div className="promo__main-right-item-content">
        <div className="promo__main-right-item-content-title">
        Online consultation
        </div>
        <div className="promo__main-right-item-content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
    </div>
    <div className="promo__main-right-item">
      <div className="promo__main-right-item-icon">
        <img src={promo2} alt="promo" />
      </div>
      <div className="promo__main-right-item-content">
        <div className="promo__main-right-item-content-title">
        Ready to start? Let’s talk!
        </div>
        <div className="promo__main-right-item-content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    <div className="promo__bottom">
      <div className="promo__bottom-video">
        <video src={video} controls poster={promo3}></video>
      </div>
    </div>
  </section>
  </>
)
}

export default Promo;