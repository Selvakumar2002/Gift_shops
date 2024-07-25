import React from 'react'
// import Products from '../../redux/Products'
import SeactionFrist from './SeactionFrist'
import SeactionSaving from './SeactionSaving'
import WhyShop from './WhyShop'
import SeactionGift from './SeactionGift'
import SeactionContact from './SeactionContact'
import SeactionTestimonial from './SeactionTestimonial'
import Footer from './Footer'

const Index = () => {
  return (
    <div>

   <SeactionFrist />
   {/* <Products /> */}
   <SeactionSaving />
   <WhyShop />
   <SeactionGift />
   <SeactionContact />
   <SeactionTestimonial />

   <Footer />
   
    </div>
  )
}

export default Index