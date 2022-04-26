
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import bannerImage from '../assets/photos/car_01.jpg'
function Banner() {
  return (
    <div className={styles.banner_img}>
      <Image 
      src={bannerImage}
      layout="responsive"
      />

    </div>
  )
}

export default Banner