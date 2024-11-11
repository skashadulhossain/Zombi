import React from 'react'
import ZombiHeader from '../../Components/Zombi-header/ZombiHeader'
import ZombiHero from '../../Components/Zombi-hero/ZombiHero'
import ZombiAirdrop from '../../Components/Zombi-airdrop/ZombiAirdrop'

const Home = () => {
  return (
    <div>
      <ZombiHeader/>
      <ZombiHero/>
      <ZombiAirdrop/>
    </div>
  )
}

export default Home
