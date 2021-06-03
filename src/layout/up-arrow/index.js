
import './up-arrow.sass'
import throttle from 'lodash-es/throttle';

export default () => {
  const $button = $('.up-arrow');
  const $about = $('.about');
  const buttonToggle = () => {
    if($(window).scrollTop() > $about.outerHeight()){
      $button.addClass('up-arrow--show');
    } else {
      $button.removeClass('up-arrow--show');
    }
  }
  $(window).on('scroll', throttle(buttonToggle, 700));
  $button.on('click', ()=>{
    $('body, html').animate({
      scrollTop: 0
    }, 400)
  })
}
