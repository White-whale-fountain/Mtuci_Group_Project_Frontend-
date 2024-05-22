import Carousel, { consts } from 'react-elastic-carousel';
import styles from './ProfileAlienCarousel.module.css'

export default function ProfileAlienCarousel({profilePhotos}) {
  function CustomNavArrows({type, onClick, isEdge}) {
    const arrowRight = "⯈"
    const arrowLeft = "⯇"
    const pointer = type === consts.PREV ? arrowRight : arrowLeft
    return (
      <>
        <button className={styles.profile_alien_custom_arrows}
                onClick={onClick} disabled={isEdge}> {pointer} </button>
      </>
    );
  }

  return (
    // <>
    //   <p>{profilePhotos?.length}</p>
    // </>
    <div className={styles.img_alien_carousel_container}>
      <Carousel
        isRTL itemsToShow={1}
        enableMouseSwipe={false}
        initialActiveIndex={0}
        renderArrow={CustomNavArrows}
        disableArrowsOnEnd={true}
      >
        {profilePhotos?.map((item, count) => (
          <div key={count}>
            <img src={item} alt="ProfilePhoto" className={styles.img_alien_carousel_photo}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}