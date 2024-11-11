import React from 'react'
import ZombiHeader from '../../Components/Zombi-header/ZombiHeader'
import ZombiHero from '../../Components/Zombi-hero/ZombiHero'
import ZombiAirdrop from '../../Components/Zombi-airdrop/ZombiAirdrop'
import ReferralBanner from '../../Components/ReferralBanner/ReferralBanner'
import ZombieFAQSection from '../../Components/FAQSection/FAQSection'
import TokenStats from '../../Components/TokenStats/TokenStats'


const Home = () => {
  return (
    <div>
      <ZombiHeader/>
      <ZombiHero/>
      <ZombiAirdrop/>
      <TokenStats/>
      <ReferralBanner/>
      <ZombieFAQSection/>
      

    </div>
  )
}

export default Home
