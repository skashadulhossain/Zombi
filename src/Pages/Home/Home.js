import React from 'react'
import ZombiHeader from '../../Components/Zombi-header/ZombiHeader'
import ZombiHero from '../../Components/Zombi-hero/ZombiHero'
import ZombiAirdrop from '../../Components/Zombi-airdrop/ZombiAirdrop'
import ReferralBanner from '../../Components/ReferralBanner/ReferralBanner'
import ZombieFAQSection from '../../Components/FAQSection/FAQSection'


const Home = () => {
  return (
    <div>
      <ZombiHeader/>
      <ZombiHero/>
      <ZombiAirdrop/>
      <ReferralBanner/>
      <ZombieFAQSection/>
      

    </div>
  )
}

export default Home
