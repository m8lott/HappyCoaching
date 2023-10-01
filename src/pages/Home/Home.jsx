import home1 from './img/home-1.png';
import home2 from './img/home-2.png';
import home6 from './img/home-6.png';
import home7 from './img/home-7.svg';
import home8 from './img/home-8.svg';
import home9 from './img/home-9.svg';
import home10 from './img/home-10.svg';
import home11 from './img/home-11.svg';
import home12 from './img/home-12.svg';
import home13 from './img/home-13.svg';
import home14 from './img/home-14.png';
import home15 from './img/home-15.png';
import home16 from './img/home-16.png';
import home17 from './img/home-17.png';
import './style.scss'
import Offer from '../../components/offer/Offer';

const Home = () => {
return (
  <>
<section className='banner'>
<div className="container">
  <div className="banner__left">
  <div className="banner__left-img">
      <img src={home13} alt="deco" />
    </div>
    <div className="banner__left-subtitle">
    Proven strategies backed by science for success.
    </div>
    <div className="banner__left-title">
    Live life at the full potential
    </div>
    <div className="banner__left-text">
    I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
    </div>
    <div className="banner__left-btn">
      <a href="#">Get your free guide now</a>
    </div>
  </div>
  <div className="banner__right">
    <div className="banner__right-img">
      <img src={home6} alt="Banner" />
      <img src={home1} alt="Banner" />
    </div>
  </div>
</div>
</section>
<section className='services'>
<div className="container">
  <div className="services__top">
    <div className="services__top-left">
    <div className="services__top-left-img">
      <img src={home12} alt="Services" />
    </div>
    <div className="services__top-left-title">
    I can help you in these particular areas.
    </div>
    </div>
    <div className="services__top-right">
      <div className="services__top-right-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>
  </div>
  <div className="services__bottom">
    <div className="services__bottom-item">
      <div className="services__bottom-item-icon">
        <img src={home9} alt="Coaching" />
      </div>
      <div className="services__bottom-item-title">
      1:1 Coaching
      </div>
      <div className="services__bottom-item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
    </div>
    <div className="services__bottom-item">
      <div className="services__bottom-item-icon">
        <img src={home8} alt="Consultation" />
      </div>
      <div className="services__bottom-item-title">
      Consultation
      </div>
      <div className="services__bottom-item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
    </div>
    <div className="services__bottom-item">
      <div className="services__bottom-item-icon">
        <img src={home7} alt="Group Coaching Sessions" />
      </div>
      <div className="services__bottom-item-title">
      Group Coaching Sessions
      </div>
      <div className="services__bottom-item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
    </div>
  </div>
</div>
</section>
<section className='reviewsh'>
<div className="container">
  <div className="reviewsh__title">
  Hear out what my clients say about me.
  </div>
  <div className="reviewsh__items">
    <div className="reviewsh__item">
      <div className="reviewsh__item-desc">
      "I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people. "
      </div>
      <div className="reviewsh__item-name">
        Jane
      </div>
      <div className="reviewsh__item-img">
        <img src={home2} alt="Reviews user pic" />
      </div>
      <div className="reviewsh__item-rates">
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
      </div>
    </div>
    <div className="reviewsh__item">
      <div className="reviewsh__item-desc">
      "I gained so much confidence in my ability to connect and deepen my relationships with people. "
      </div>
      <div className="reviewsh__item-name">
        Jane
      </div>
      <div className="reviewsh__item-img">
        <img src={home2} alt="Reviews user pic" />
      </div>
      <div className="reviewsh__item-rates">
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home10} alt="Rates" />
      </div>
    </div>
    <div className="reviewsh__item">
      <div className="reviewsh__item-desc">
      "I gained so much confidence in my ability to connect and deepen my relationships with people. "
      </div>
      <div className="reviewsh__item-name">
        Jane
      </div>
      <div className="reviewsh__item-img">
        <img src={home2} alt="Reviews user pic" />
      </div>
      <div className="reviewsh__item-rates">
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home11} alt="Rates" />
        <img src={home10} alt="Rates" />
        <img src={home10} alt="Rates" />
      </div>
    </div>
  </div>
</div>
</section>
<section className='blog'>
  <div className="container">
    <div className="blog__title">
    Stay Motivated, read the<br></br>weekly blog articles.
    </div>
    <div className="blog__items">
    <div className="blog__item">
      <div className="blog__item-img">
        <img src={home14} alt="Blog" />
      </div>
      <div className="blog__item-content">
      <div className="blog__item-title">
        <a href="#">Balancing your love and<br/> work life.</a>
      </div>
      <div className="blog__item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
      </div>
    </div>
    <div className="blog__item">
      <div className="blog__item-img">
        <img src={home15} alt="Blog" />
      </div>
      <div className="blog__item-content">
      <div className="blog__item-title">
        <a href="#">A short break from Social<br/> Media is important.</a>
      </div>
      <div className="blog__item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
      </div>
    </div>
    <div className="blog__item">
      <div className="blog__item-img">
        <img src={home16} alt="Blog" />
      </div>
      <div className="blog__item-content">
      <div className="blog__item-title">
        <a href="#">How to be 1% Better Every<br/> Day</a>
      </div>
      <div className="blog__item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </div>
      </div>
    </div>
    </div>
    <div className="blog__button">
      <a href="#">Read more blogs</a>
    </div>
  </div>
</section>
<section className='guide'>
<div className="container">
  <div className="guide__left">
<div className="guide__left-title">
Don’t miss out on my ‘Live life at the full potential’ free guide
</div>
<div className="guide__left-desc">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
  <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </span>
</div>
<div className="guide__left-btn">
  <a href="#">Get your free guide now</a>
</div>
  </div>
  <div className="guide__right">
    <div className="guide__right-img">
      <img src={home17} alt="Guide" />
    </div>
  </div>
</div>
</section>
<Offer />
  </>
)

}

export default Home;