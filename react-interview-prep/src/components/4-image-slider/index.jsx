import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css"

//5. get url
export default function ImageSlider({ url, limit = 5, page = 1 }) {

  //1
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    //3. error handling
    try {

      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext() {
    setCurrentSlide()
  }
  useEffect(() => {
    //2
    if (url !== '') fetchImages(url)
  }, [url])
  // console.log(images);

  if (loading) {
    //4.loading
    return <div>Loading data ! Please wait.</div>
  }

  if (errorMsg !== null) {
    return <div>Error ocurred ! {errorMsg}</div>
  }
  return <div className="container">
    {/* 6.adding functionality */}
    <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
    {
      images && images.length ? images.map(imageItem => (
        <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className="current-image"
        />
      )) : null
    }
    <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
    <span className="circle-indicators">
      {
        images && images.length ?
          images.map((_, index) => <button
            key={index}
            className="current-indicator"></button>) : null
      }
    </span>
  </div>
}