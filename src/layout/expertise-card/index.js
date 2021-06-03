import './expertise-card.sass'

export default () => {
  const $root = $('.expertise-card__video');
  const $playBtn = $root.find('.expertise-card__play-btn');
  $playBtn.on('click', function(){
    let $iframe = $(this).parent().find('iframe');
    $(this).parent().find('img').css({'opacity': 0, 'z-index': -1});
    let $src = $iframe.data('src');
    $iframe.attr('src', $src);
    $(this).addClass('expertise-card__play-btn--hide');
  })
}
