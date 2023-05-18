import React from 'react'
import useMouseLoc from '../Hook/useMouseLoc'

export default function TestBox() {
  const location = useMouseLoc();

  return (
    <div style={{width: 100, height: 100, backgroundColor: location.y > 200 ? 'royalblue' : 'hotpink'}}>TestBox</div>
  )
}