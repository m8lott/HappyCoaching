import './style.scss';
import reviews1 from './img/reviews-1.svg';
import reviews2 from './img/reviews-2.png';

const Reviews = () => {
return (
  <>
  <section className='reviews'>
    <div className="container">
      <div className="reviews__top">
        <div className="reviews__top-main">
        <div className="reviews__top-subtitle">
        Testimonials
        </div>
        <div className="reviews__top-title">
        Results that speak for themselves
        </div>
        </div>
        <div className="reviews__top-btn">
          <a href="#">Get started</a>
        </div>
      </div>
      <div className="reviews__bottom">
        <div className="reviews__bottom-items">
        <div className="reviews__bottom-item">
          <div className="reviews__bottom-item-desc">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="reviews__bottom-item-icon">
            <img src={reviews2} alt="reviews" />
          </div>
          <div className="reviews__bottom-item-name">
          Naam
          </div>
          <div className="reviews__bottom-item-city">
          Bedrijf
          </div>
          <div className="reviews__bottom-item-stars">
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
          </div>
        </div>
        <div className="reviews__bottom-item">
          <div className="reviews__bottom-item-desc">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="reviews__bottom-item-icon">
            <img src={reviews2} alt="reviews" />
          </div>
          <div className="reviews__bottom-item-name">
          Naam
          </div>
          <div className="reviews__bottom-item-city">
          Bedrijf
          </div>
          <div className="reviews__bottom-item-stars">
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
          </div>
        </div>
        </div>
        <div className="reviews__bottom-items">
        <div className="reviews__bottom-item">
          <div className="reviews__bottom-item-desc">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="reviews__bottom-item-icon">
            <img src={reviews2} alt="reviews" />
          </div>
          <div className="reviews__bottom-item-name">
          Naam
          </div>
          <div className="reviews__bottom-item-city">
          Bedrijf
          </div>
          <div className="reviews__bottom-item-stars">
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
          </div>
        </div>
        <div className="reviews__bottom-item">
          <div className="reviews__bottom-item-desc">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="reviews__bottom-item-icon">
            <img src={reviews2} alt="reviews" />
          </div>
          <div className="reviews__bottom-item-name">
          Naam
          </div>
          <div className="reviews__bottom-item-city">
          Bedrijf
          </div>
          <div className="reviews__bottom-item-stars">
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
            <img src={reviews1} alt="reviews stars" />
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  </>
)
}

export default Reviews;