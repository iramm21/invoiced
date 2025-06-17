import HeroSection from '@/components/sections/public/Hero'
import FeaturesSection from '@/components/sections/public/Features'
import React from 'react'
import PricingSection from '@/components/sections/public/Pricing'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  )
}

export default HomePage