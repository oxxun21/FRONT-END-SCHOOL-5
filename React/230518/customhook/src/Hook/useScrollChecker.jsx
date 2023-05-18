import React, { useEffect, useState } from 'react'

export default function useScrollChecker() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBottom(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight);  
      // 스크롤한 높이 + 사용자의 뷰포트 높이 >= 요소의 높이
    })
  }, [])

  return isBottom;
}
