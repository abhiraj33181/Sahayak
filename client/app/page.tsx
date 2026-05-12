import React from 'react'
import SearchPanel from './components/Home/SearchPanel'
import CategoryShowcase from './components/Home/CategoryShowcase'

const page = () => {
  return (
    <div className=''>
      <SearchPanel/>
      <CategoryShowcase/>
    </div>
  )
}

export default page