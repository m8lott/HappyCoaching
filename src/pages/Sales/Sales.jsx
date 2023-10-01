import Features from '../../components/features/Features';
import Info from '../../components/info/Info';
import Promo from '../../components/promo/Promo';
import Reviews from '../../components/reviews/Reviews';
import Offer from '../../components/offer/Offer';
import './style.scss';
import sales1 from './img/sales-1.svg';
import sales2 from './img/sales-2.svg';
import sales3 from './img/sales-3.svg';
import sales4 from './img/sales-4.png';
import sales5 from './img/sales-5.svg';

const Sales = () => {
  return (
    <>
    <section className='sales__banner'>
      <div className="container">
        <div className="sales__banner-left">
          <div className="sales__banner-left-img">
            <img src={sales5} alt="Banner" />
          </div>
          <div className="sales__banner-left-subtitle">
          Proven strategies backed by science for success.
          </div>
          <div className="sales__banner-left-title">
          Self Esteem Therapy
          </div>
          <div className="sales__banner-left-desc">
          I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
          </div>
          <div className="sales__banner-left-btn">
            <a href="#">Claim your spot</a>
          </div>
        </div>
        <div className="sales__banner-right">
          <div className="sales__banner-right-img">
            <img src={sales4} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
    <Features />
    <Promo />
    <Reviews />
    <section className='sales__quote'>
      <div className="container">
        <div className="sales__quote-top">
        <div className="sales__quote-top-subtitle">
        This is not for everyone!
        </div>
        <div className="sales__quote-top-title">
        This program is perfect for you if...
        </div>
        </div>
        <div className="sales__quote-main">
          <div className="sales__quote-main-info">
            <div className="sales__quote-main-info-title">
            This is <span>NOT</span> for you if...
            </div>
            <div className="sales__quote-main-info-items">
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales3} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales3} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales3} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales3} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
          </div>

          <div className="sales__quote-main-info">
            <div className="sales__quote-main-info-wrapp">
            <div className="sales__quote-main-info-title">
            This is for you if...
            </div>
            <div className="sales__quote-main-info-items">
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales1} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales1} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales1} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
              <div className="sales__quote-main-info-items-item">
                <div className="sales__quote-main-info-items-item-icon">
                  <img src={sales1} alt="Quote" />
                </div>
                <div className="sales__quote-main-info-items-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Offer />
    <section className='sales__guarante'>
      <div className="container">
        <div className="sales__guarante-img">
          <img src={sales2} alt="Guarante" />
        </div>
        <div className="sales__guarante-title">
        Guarantee
        </div>
        <div className="sales__guarante-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
        </div>
      </div>
    </section>
    <Info />
    </>
  )
}

export default Sales;
