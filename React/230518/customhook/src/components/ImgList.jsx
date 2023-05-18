import React from 'react'
import ImgItem from './ImgItem'

export default function ImgList({ imgdata }) {
  console.log(imgdata);
  return (
    <ul>
      {imgdata.map((item) => {
        return (
          <li key={item.id}>
            <ImgItem imgdata={item} />
          </li>
        )
      })}
    </ul>
  )
}
