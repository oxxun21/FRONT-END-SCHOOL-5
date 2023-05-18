import { useEffect, useState } from 'react';
import ImgList from './components/ImgList';
import useScrollChecker from './Hook/useScrollChecker';
import Loading from './components/Loading';

function App() {
  // const imgdata = [
  //   {
  //   "id": "10",
  //   "author": "Paul Jarvis",
  //   "width": 2500,
  //   "height": 1667,
  //   "url": "https://unsplash.com/photos/6J--NXulQCs",
  //   "download_url": "https://picsum.photos/id/10/2500/1667"
  //   },
  //   {
  //   "id": "11",
  //   "author": "Paul Jarvis",
  //   "width": 2500,
  //   "height": 1667,
  //   "url": "https://unsplash.com/photos/Cm7oKel-X2Q",
  //   "download_url": "https://picsum.photos/id/11/2500/1667"
  //   },
  //   {
  //   "id": "12",
  //   "author": "Paul Jarvis",
  //   "width": 2500,
  //   "height": 1667,
  //   "url": "https://unsplash.com/photos/I_9ILwtsl_k",
  //   "download_url": "https://picsum.photos/id/12/2500/1667"
  //   },
  //   {
  //   "id": "13",
  //   "author": "Paul Jarvis",
  //   "width": 2500,
  //   "height": 1667,
  //   "url": "https://unsplash.com/photos/3MtiSMdnoCo",
  //   "download_url": "https://picsum.photos/id/13/2500/1667"
  //   },
  //   {
  //   "id": "14",
  //   "author": "Paul Jarvis",
  //   "width": 2500,
  //   "height": 1667,
  //   "url": "https://unsplash.com/photos/IQ1kOQTJrOQ",
  //   "download_url": "https://picsum.photos/id/14/2500/1667"
  //   }
  // ]

  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://picsum.photos/v2/list?page=3&limit=5");
  //       if(!response.ok){
  //         throw new Error("네트워크 응답 문제 발생");
  //       }
  //       const json = await response.json();
  //       setPhotos(json);
  //     } catch (error) {
  //       console.error('데이터를 가져오는데 문제가 있음 : ', error);
  //     }
  //   }
  //   fetchData();
  // }, [])

  const [imgList, setImgList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImg(){
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
      if(!response.ok){
        throw new Error("네트워크 응답 문제 발생");
      }
      const data = await response.json();
      setImgList((prevImgs) => {
        return [...prevImgs, ...data]
      });
      setIsLoading(false);
    } catch (error) {
      console.error('데이터를 가져오는데 문제가 있음 : ', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchImg();
  }, [fetchPage])

  const isBottom = useScrollChecker();

  useEffect(() => {
    if(isBottom){
      setFetchPage((prevPage) => {
        return prevPage + 1
      })
    }
  }, [isBottom])

  return (
    <>
      <ImgList imgdata={imgList} />
      {isLoading && <Loading />}
    </>
  );
}
export default App;