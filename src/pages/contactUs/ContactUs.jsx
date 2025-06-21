import React, { useEffect } from 'react'
import Contactpage from './Contactpage'
import Homecontact from './Homecontact'
import BgSticky from '../training/BgSticky'
import Content9 from '../../pages/home/Content9'

function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Homecontact/>
      <Contactpage/>
      <BgSticky/>
      <Content9/>
    </div>
  )
}
 
export default Contactus