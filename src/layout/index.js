import './base';
import './grid';
import './wrapper';
import './content';
import '../pages/home/about';
import './socials/socials.sass';
import './card/card.sass';
import './work-card/work-card.sass';
import './footer';
import './success-popup/success-popup.sass';
import UpArrow from './up-arrow';
import InitHeader from './header';
import InitExpertise from './expertise-card';
import CallbackForm from './callback-form';
import CallbackPopup from './callback-popup'
import initMap from './map';

export default () => {

  let $header = $('.header');
  if($header.length){
    new InitHeader($header)
  }

  let $expCard = $('.expertise-card__video')
  if($expCard.length){
    new InitExpertise($expCard)
  }

  let $callbackForm = $('.callback-form')
  if($callbackForm.length){
    new CallbackForm($callbackForm)
  }

  let $callbackPopup = $('.js-callback-popup')
  if ($callbackPopup.length) {
    new CallbackPopup()
  }

  let $upArrow = $('.up-arrow')
  if($upArrow.length){
    new UpArrow($upArrow)
  }

  let $map = $('.map');
  if ($map.length) {
    new initMap($map);
  }

};
