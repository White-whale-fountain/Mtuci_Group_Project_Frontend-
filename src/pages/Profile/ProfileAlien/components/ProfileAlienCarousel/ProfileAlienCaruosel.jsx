import Carousel from 'react-elastic-carousel';
import './ProfileAlienCarousel.css'
export default function ProfileAlienCarousel({profilePhotos}){
  console.log(profilePhotos)
  return(
    // <>
    //   <p>{profilePhotos?.length}</p>
    // </>
    <Carousel
      isRTL itemsToShow={1}
      enableMouseSwipe ={false}
      initialActiveIndex = {0}
      className={'img_alien_carousel'}
    >
      {profilePhotos?.map((item, count) => (
        <div key={count}>
          <img src={item} alt="ProfilePhoto" className={"img_alien_carousel_photo"}/>
        </div>
        ))}
    </Carousel>
  )
}