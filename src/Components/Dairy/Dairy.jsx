import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'

import BgDairy from '../../assets/dairy-banner.jpg'


const DAIRY = () => {
  return (
    <div>
           <CategoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']} />

    </div>
  )
}

export default DAIRY
