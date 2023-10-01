import Info from '../../components/info/Info';
import './style.scss';
import services1 from './img/services-1.png';
import services4 from './img/services-4.svg';
import services5 from './img/services-5.svg';
import services6 from './img/services-6.svg';
import services7 from './img/services-7.svg';
import services8 from './img/services-8.svg';
import services9 from './img/services-9.svg';
import services10 from './img/services-10.svg';
import services11 from './img/services-11.png';

const Services = () => {

return (
  <>
  <section className='services__banner'>
  <div className="container">
    <div className="services__banner-left">
    <div className="services__banner-left-subtitle">
    I can help you in these patricular areas.
    </div>
    <div className="services__banner-left-title">
    I help people to discover their true potential
    </div>
    <div className="services__banner-left-desc">
    I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
    </div>
    </div>
    <div className="services__banner-right">
      <div className="services__banner-right-img">
        <img src={services1} alt="Services banner" />
      </div>
    </div>
  </div>
  </section>
  <section className='services__service'>
    <div className="container">
      <div className="services__service-title">
      I can help you in these<br/> particular areas.
      </div>
      <div className="services__service-main">
      <div className="services__service-items">
        <div className="services__service-item">
          <div className="services__service-item-icon">
              <img src={services4} alt="Group Coaching Sessions" />
          </div>
          <div className="services__service-item-title">
          Group Coaching Sessions
          </div>
          <div className="services__service-item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </div>
        </div>
        <div className="services__service-item">
          <div className="services__service-item-icon">
              <img src={services5} alt="Consultation" />
          </div>
          <div className="services__service-item-title">
          Consultation
          </div>
          <div className="services__service-item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </div>
        </div>
      </div>
      <div className="services__service-items">
        <div className="services__service-item">
          <div className="services__service-item-icon">
              <img src={services6} alt="Online course" />
          </div>
          <div className="services__service-item-title">
          Online course
          </div>
          <div className="services__service-item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </div>
        </div>
        <div className="services__service-item">
          <div className="services__service-item-icon">
              <img src={services6} alt="1:1 Coaching" />
          </div>
          <div className="services__service-item-title">
          1:1 Coaching
          </div>
          <div className="services__service-item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section className='services__promo'>
    <div className="container">
      <div className="services__promo-top">
        <div className="services__promo-top-subtitle">
        How does it work?
        </div>
        <div className="services__promo-top-title">
        Are you ready to transform your life?
        </div>
        <div className="services__promo-top-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
        </div>
      </div>
      <div className="services__promo-bottom">
        <div className="services__promo-bottom-left">
          <div className="services__promo-bottom-left-item">
          <div className="services__promo-bottom-left-item-icon">
            <img src={services7} alt="Talk to me first" />
          </div>
          <div className="services__promo-bottom-left-item-content">
            <div className="services__promo-bottom-left-item-content-title">
            Talk to me first
            </div>
            <div className="services__promo-bottom-left-item-content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          </div>
          <div className="services__promo-bottom-left-item">
          <div className="services__promo-bottom-left-item-icon">
            <img src={services10} alt="Schedule a meeting" />
          </div>
          <div className="services__promo-bottom-left-item-content">
            <div className="services__promo-bottom-left-item-content-title">
            Schedule a meeting
            </div>
            <div className="services__promo-bottom-left-item-content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          </div>
          <div className="services__promo-bottom-left-item">
          <div className="services__promo-bottom-left-item-icon">
            <img src={services8} alt="Online consultation" />
          </div>
          <div className="services__promo-bottom-left-item-content">
            <div className="services__promo-bottom-left-item-content-title">
            Online consultation
            </div>
            <div className="services__promo-bottom-left-item-content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          </div>
          <div className="services__promo-bottom-left-item">
          <div className="services__promo-bottom-left-item-icon">
            <img src={services9} alt="Start talk" />
          </div>
          <div className="services__promo-bottom-left-item-content">
            <div className="services__promo-bottom-left-item-content-title">
            Ready to start? Let’s talk!
            </div>
            <div className="services__promo-bottom-left-item-content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          </div>
        </div>
        <div className="services__promo-bottom-right">
        <div className="services__promo-bottom-right-img">
          <img src={services11} alt="Promo" />
        </div>
        </div>
      </div>
    </div>
  </section>
  <Info />
  </>
)
}

export default Services;