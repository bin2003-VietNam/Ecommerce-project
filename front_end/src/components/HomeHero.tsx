import React from 'react'
import CategoryMenu from './CategoryMenu'
import BannerSlider from './BannerSlider'
import Section from './Section'

function HomeHero() {
  return (
    <Section className='flex flex-row gap-4 justify-center py-10 rounded-xl mt-4'>
        <CategoryMenu />
        <BannerSlider />
    </Section>
  )
}

export default HomeHero