import './header.sass';

export default () => {
  const $root = $('.header');
  const $burger = $root.find('.js-open-menu');
  const $closeBtn = $root.find('.js-close-menu')
  const $menu = $root.find('.header__content');
  const $body = $root.closest('body');
  const $langBth = $root.find('.js-show-languages');
  const $langList = $root.find('.header__language-wrapper');
  $burger.on('click', ()=>{
    $menu.addClass('header__content--open');
    $body.addClass('body--open-menu');
  })
  $closeBtn.on('click', ()=>{
    $menu.removeClass('header__content--open');
    $body.removeClass('body--open-menu')
  })
  $(window).on('resize', ()=>{
    if($(document).width() >= 1024 ) {
      $menu.hasClass('header__content--open') ? $menu.removeClass('header__content--open') : null
      $body.hasClass('body--open-menu') ? $body.removeClass('body--open-menu') : null
    }
  })
  $langBth.on('click', ()=>{
    $langList.slideToggle();
  })
}
