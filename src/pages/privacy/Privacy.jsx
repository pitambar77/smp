import React, { useEffect } from 'react'
import Banner from './Banner'
import Data from './Data'
import BgSticky from '../training/BgSticky'
import Content9 from '../home/Content9'

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner/>
      <Data/>
      <BgSticky/>
      <Content9/>
    </div>
  )
}

export default Privacy
