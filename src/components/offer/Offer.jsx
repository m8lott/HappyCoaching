import './style.scss';
import offer from './img/offer.png';

const Offer = () => {
return (
  <>
  <section className='offer'>
<div className="container">
  <div className="offer_left">
    <div className="offer__left-title">
    Get 15-Minutes Complimentary online session.
    </div>
    <div className="offer__left-subtitle">
    Limited Period Offer. Claim Now.
    </div>
    <div className="offer__left-btn">
      <a href="#">Book now</a>
    </div>
  </div>
  <div className="offer__right">
    <div className="offer__right-img">
      <img src={offer} alt="Offer" />
    </div>
  </div>
</div>
</section>
  </>
)
}

export default Offer