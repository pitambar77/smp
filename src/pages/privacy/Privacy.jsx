import React, { useEffect } from 'react'
import Banner from './Banner'
import Data from './Data'
import BgSticky from '../training/BgSticky'

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner/>
      <Data/>
      <BgSticky/>
    </div>
  )
}

export default Privacy
