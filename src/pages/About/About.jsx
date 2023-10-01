import Info from '../../components/info/Info';
import Features from '../../components/features/Features';
import './style.scss';
import about2 from './img/about-2.png';
import about3 from './img/about-3.png';
import about4 from './img/about-4.svg';
import about5 from './img/about-5.svg';
import about6 from './img/about-6.svg';
import about7 from './img/about-7.svg';
import about8 from './img/about-8.svg';
import about15 from './img/about-15.svg';

const About = () => {

return (
  <>
  <section className='about__banner'>
    <div className="container">
      <div className="about__banner-left">
        <div className="about__banner-left-subtitle">
        Proven strategies backed by science for success.
        </div>
        <div className="about__banner-left-title">
        About me
        </div>
        <div className="about__banner-left-desc">
        I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
        </div>
        <div className="about__banner-left-btn">
          <a href="#">Get your free guide now</a>
        </div>
      </div>
      <div className="about__banner-right">
        <div className="about__banner-right-img">
          <img src={about3} alt="Banner" />
          <img src={about15} alt="Banner" />
        </div>
      </div>
    </div>
  </section>
  <section className='about__proof'>
    <div className="container">
      <div className="about__proof-title">
      From startups to the world’s largest companies
      </div>
      <div className="about__proof-main">
        <img src={about8} alt="Company logo" />
        <img src={about4} alt="Company logo" />
        <img src={about5} alt="Company logo" />
        <img src={about6} alt="Company logo" />
        <img src={about7} alt="Company logo" />
      </div>
    </div>
  </section>
  <section className='about__reviews'>
    <div className="container">
      <div className="about__reviews-title">
      Hear out what my clients say about me.
      </div>
      <div className="about__reviews-items">
      <div className="about__reviews-items-item">
        <div className="about__reviews-items-item-title">
        5/5
        </div>
        <div className="about__reviews-items-item-desc">
        "I gained so much confidence in my ability to connect and deepen my relationships with people. "
        </div>
        <div className="about__reviews-items-item-name">
        Jane
        </div>
        <div className="about__reviews-items-item-img">
          <img src={about2} alt="Reviews" />
        </div>
      </div>
      <div className="about__reviews-items-item">
        <div className="about__reviews-items-item-title">
        5/5
        </div>
        <div className="about__reviews-items-item-desc">
        "I gained so much confidence in my ability to connect and deepen my relationships with people. "
        </div>
        <div className="about__reviews-items-item-name">
        Jane
        </div>
        <div className="about__reviews-items-item-img">
          <img src={about2} alt="Reviews" />
        </div>
      </div>
      <div className="about__reviews-items-item">
        <div className="about__reviews-items-item-title">
        5/5
        </div>
        <div className="about__reviews-items-item-desc">
        "I gained so much confidence in my ability to connect and deepen my relationships with people. "
        </div>
        <div className="about__reviews-items-item-name">
        Jane
        </div>
        <div className="about__reviews-items-item-img">
          <img src={about2} alt="Reviews" />
        </div>
      </div>
      </div>
    </div>
  </section>
  <Features />
  <Info />
  </>
)
}

export default About;