import { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import Header from "../components/Header";
import { dogImage } from "../services/APIRandomDog";

export default function RandomDog() {
  const [dogSrc, setDogSrc] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  const fetchDogImage = async () => {
    const image = await dogImage();
    if (image.includes('mp4')) {
      setIsVideo(true)
    } else {
      setIsVideo(false)
    };
    setDogSrc(image);
  }

  useEffect(() => { fetchDogImage() }, []);

  return (
    <>
      <Header />
      <main>
        <div onClick={() => { fetchDogImage() }}>
          <h1>Refresh</h1>
          <FaRedo />
        </div>
        <div>
          {
            (isVideo)
            ? <video autoPlay loop muted>
              <source src={dogSrc} type="video/mp4" />
            </video>
            : <img src={dogSrc} alt='random-dog' />
          } 
        </div>
      </main>
    </>
  )
}