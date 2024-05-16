import Carousel from 'react-elastic-carousel';
import './ProfilePhotosCarousel.css'

export default function ProfilePhotosCarousel(photoList){

  return(
    <Carousel
      isRTL itemsToShow={1}
      pagination={false}
      enableMouseSwipe ={false}
    >
      {photoList.photoList.map((item) => (
        <div key={item.index}>
          <img src={item} alt="ProfilePhoto" className={"img_carousel_photo"}/>
        </div>
        ))}
    </Carousel>
  )
}