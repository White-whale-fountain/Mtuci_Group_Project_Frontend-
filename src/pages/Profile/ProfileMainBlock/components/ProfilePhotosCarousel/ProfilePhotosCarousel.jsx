import Carousel from 'react-elastic-carousel';
import './ProfilePhotosCarousel.css'

export default function ProfilePhotosCarousel({photoList}){

  return(
    <Carousel
      isRTL itemsToShow={1}
      pagination={false}
      enableMouseSwipe ={false}
      initialFirstItem = {photoList?.length}
    >
      {photoList?.map((item, count) => (
        <div key={count}>
          <img src={item} alt="ProfilePhoto" className={"img_carousel_photo"}/>
        </div>
        ))}
    </Carousel>
  )
}