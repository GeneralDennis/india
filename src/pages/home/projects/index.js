import './projects.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class ProjectsSlider {
  constructor($root) {
    this.slider = new Swiper('.projects-swiper-container', {
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 1.3,
      breakpoints: {
        720: {
          slidesPerView: 2
        },
        1230: {
          slidesPerView: 3
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

export default ProjectsSlider
