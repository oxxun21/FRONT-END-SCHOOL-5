import { useEffect, useState } from "react";

export default function useMouseLoc(initVal){
  const [mouseLoc, setMouseLoc] = useState(initVal || { x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseLoc({x: event.x , y: event.y});
    })
  }, []);

  return mouseLoc;
}