import React from 'react'
import ContactForm from './ContactForm'
import Content6 from '../pages/home/Content6'

const ContactUs = () => {
  return (
   <div>
 
          <div className="relative">
            {/* Background Image with Overlay and Content */}
            <div className="w-full h-[540px] bg-[url('https://safarimarketingpro.com/images/contact-us-banner.jpg')] bg-cover bg-center">
              <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] flex items-center justify-center px-4">
                <div className="max-w-[1140px] -mt-9 mx-auto text-center text-white">
                  <h2 className="font-[Montserrat] -mt-1 tetx-center font-semibold text-[48px] capitalize leading-[1.4] mb-2 pb-[10px]">
Ready to Grow?                                  </h2>
                  <p className="font-[Montserrat] -mt-1  font-medium text-[18px] leading-[1.5] my-0 px-[10%] text-center">
      Great partnerships begin with great discoveries. We start with your safari business goals and budget, and then help you find the right marketing strategy to fuel growth.
      </p>
                </div>
              </div>
            </div>
     
          </div>
           <ContactForm/>
            <Content6/>
    </div>
  )
}

export default ContactUs
