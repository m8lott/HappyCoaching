import { useState } from "react";
import './style.scss';
import info1 from './img/info-1.svg';
import info2 from './img/info-2.svg';

const Info = () => {
  const [infoShow, setInfoShow] = useState({
    item1:false,
    item2:false,
    item3:false,
    item4:false});
  
  const onShow = (e) => {
    if (e.target.className === 'item1') {
      infoShow.item1 ? setInfoShow({...infoShow,item1:false}) : setInfoShow({...infoShow,item1:true});
    } else if (e.target.className === 'item2') {
      infoShow.item2 ? setInfoShow({...infoShow,item2:false}) : setInfoShow({...infoShow,item2:true});
    } else if (e.target.className === 'item3') {
      infoShow.item3 ? setInfoShow({...infoShow,item3:false}) : setInfoShow({...infoShow,item3:true});
    } else {
      infoShow.item4 ? setInfoShow({...infoShow,item4:false}) : setInfoShow({...infoShow,item4:true});
    }
  }
  return (
    <>
      <section className='info'>
    <div className="container">
      <div className="info__top">
        <div className="info__top-title">
        Good to know.
        </div>
        <div className="info__top-desc">
        Everything you need to know about the my services.
        </div>
      </div>
      <div className="info__content">
        <div className="info__content-item">
          <div className="info__content-item-main">
        <div className="info__content-item-title">
        How long does the coaching process take?
        </div>
        {infoShow.item1 ? <div className="info__content-item-desc">
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        </div> : null}
        </div>
        <div className="info__content-item-icon">
          <img src={!infoShow.item1 ? info1 : info2} alt="Info" onClick={onShow} className='item1' />
        </div>
        </div>
        <div className="info__content-item">
          <div className="info__content-item-main">
        <div className="info__content-item-title">
        What if I wanted to end my coaching engagement?
        </div>
        {infoShow.item2 ? <div className="info__content-item-desc">
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        </div> : null}
        </div>
        <div className="info__content-item-icon">
          <img src={!infoShow.item2 ? info1 : info2} alt="Info" onClick={onShow} className='item2' />
        </div>
        </div>
        <div className="info__content-item">
          <div className="info__content-item-main">
        <div className="info__content-item-title">
        Can I change through coaching?
        </div>
        {infoShow.item3 ? <div className="info__content-item-desc">
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        </div> : null}
        </div>
        <div className="info__content-item-icon">
          <img src={!infoShow.item3 ? info1 : info2} alt="Info" onClick={onShow} className='item3' />
        </div>
        </div>
        <div className="info__content-item">
          <div className="info__content-item-main">
        <div className="info__content-item-title">
        How often do we meet?
        </div>
        {infoShow.item4 ? <div className="info__content-item-desc">
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        </div> : null}
        </div>
        <div className="info__content-item-icon">
          <img src={!infoShow.item4 ? info1 : info2} alt="Info" onClick={onShow} className='item4' />
        </div>
        </div>
      </div>
      <div className="info__bottom">
        <div className="info__bottom-title">
        Still have questions?
        </div>
        <div className="info__bottom-desc">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
        </div>
        <div className="info__bottom-btn">
          <a href="#">Get in touch</a>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Info;