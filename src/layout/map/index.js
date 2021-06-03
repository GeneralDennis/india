import ymap from '../load-ymap';
import './map.sass'

export default () => {
  const $root = $('.map');
  let map = null;
  let $coords = $root.find('#object').data('coordinates');
  let $href = $root.find('#object').data('href');
  let $adress = $root.find('#object').data('adress');

  const zoom = $(window).outerWidth() <= 991 ? 16 : 14;

  if($coords !== undefined){
    function mapLoad(){
      ymap.load().then(()=>{
        ymaps.ready(()=>{
          map = new ymaps.Map('map', {
            center: $coords.split(","),
            // center: [48.033655, 37.784363],
            zoom: zoom,
            controls: []
          });
          const myPlacemark = new ymaps.Placemark(map.getCenter(), {
            hintContent: $adress,
            baloonContent: $adress
          }, {
            iconLayout: 'default#image',
            iconImageHref: $href,
            iconImageSize: [49, 62],
            iconImageOffset: [-26, -62]
          })
          map.geoObjects.add(myPlacemark);
          // runFilter();
          // resizeZoom();
        })
        function resizeZoom() {
          $(window).on('resize', throttle(() => {
            if ($(window).outerWidth() <= 991) {
              map.setZoom(16)
            } else {
              map.setZoom(14)
            }
          }, 100));
        }
      })
    }
    mapLoad();
  }
}
