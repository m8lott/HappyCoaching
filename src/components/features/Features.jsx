import './style.scss';
import feat1 from './img/feat-1.svg';
import feat2 from './img/feat-2.svg';
import feat3 from './img/feat-3.svg';

const Features = () => {
return(
  <>
   <section className='features'>
    <div className="container">
      <div className="features__top">
        <div className="features__top-subtitle">
        How does it work?
        </div>
        <div className="features__top-title">
        Are you ready to transform your life?
        </div>
        <div className="features__top-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
        </div>
      </div>
      <div className="features__bottom">
        <div className="features__bottom-items">
          <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat1} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat2} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat3} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className="features__bottom-items">
        <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat1} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat2} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="features__bottom-items-item">
            <div className="features__bottom-items-item-img">
              <img src={feat3} alt="Features" />
            </div>
            <div className="features__bottom-items-item-title">
            Ready to start? Let’s talk!
            </div>
            <div className="features__bottom-items-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
)
}

export default Features;