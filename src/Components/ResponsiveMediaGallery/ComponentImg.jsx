import React from 'react'

export default function ComponentImg({srcImg}) {
  return (
    <div>
        <img src={srcImg.img} alt={srcImg.alt}/>
    </div>
  )
}
