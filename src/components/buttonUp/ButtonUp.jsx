import { useState, useEffect } from 'react';
import './style.scss';
import scrollTop from '../../helpers/scrollTop';


const ButtonUp = () => {
  const [over,setOver] = useState(false);
  const [show,setShow] = useState(false);

  window.addEventListener('scroll',() => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 600 ? setShow(true) : setShow(false);
  scrollY <= 600 ? setOver(false) : '';
})

  const onMouse = () => {
    setOver(!over);
  }

return (
  <>
  {show ?
  <div className={!over ? 'btn-up' : 'btn-up-over'} onMouseOver={onMouse} onMouseOut={onMouse} onClick={scrollTop}></div>:null}
</>
)
}

export default ButtonUp;