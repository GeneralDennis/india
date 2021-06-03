import './expertise.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'



class ExpertiseSlider {
  constructor($root) {
    this.slider = new Swiper('.expertise-swiper-container', {
      speed: 1000,
      spaceBetween: 28,
      slidesPerView: 1.3,
      breakpoints: {
        720: {
          slidesPerView: 2
        }
      }
      // autoplay: {
      //   delay: 3000
      // },
      // loop: true,
      // loopedSlides: $root.find('.projects-swiper-slide').length,
    })
  }
}

export default ExpertiseSlider
