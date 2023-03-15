import React from 'react'
import './Banner.css'
export default function Banner( {image}) {
  return (
    <div className="responsive-img">
    <div style={{backgroundImage: `url(${image})`}} className='header'> 
      <div className="">
<h1 >TechKnowGram</h1>
<h6>Solution | Performance | Comfort</h6>
</div>
    </div>
    </div>
  )
}
