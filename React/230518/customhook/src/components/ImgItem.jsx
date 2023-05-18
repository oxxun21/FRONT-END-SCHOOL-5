import React from 'react'

export default function ImgItem({ imgdata }) {
  return (
    <img src={imgdata.download_url} alt='' style={{width: 400, height: 300}} />
  )
}
