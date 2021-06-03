import './callback-popup.sass'

import magnificPopup from 'magnific-popup';
import validate from 'jquery-validation';
import Inputmask from 'inputmask';

export default class CallbackPopup {
  constructor() {
    $('.js-callback-popup').magnificPopup({
      type: 'inline',
      showCloseBtn: false,
    });
    $('.callback-form__close-btn').on('click', ()=>{
      $.magnificPopup.close();
    })
    const $field = $('input[type="tel"]');
    const $im = new Inputmask('+7 (999) 999-99-99');
    $im.mask($field);

    const $form = $('.callback-form__form');
    $form.on('submit', function(e){
      e.preventDefault();
      let $formData = $(this).serializeArray();
      $(this).validate({
        errorClass: 'callback-form__error',
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          phone: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          }
        },
        messages: {
          name: {
            required: 'Заполните поле',
            minlength: 'Должно быть не менее 2-х символов'
          },
          phone: {
            required: 'Заполните поле'
          },
          email: {
            required: 'Заполните поле',
            email: "Неверный формат",
          }
        }
      });
      if($(this).valid()){
        // $.ajax({
        //   type: 'POST',
        //   url: 'https://app-publisher-73f93-default-rtdb.europe-west1.firebasedatabase.app/',
        //   data: $formData
        // })
        // .done(resp=>{
        //   $(this).trigger('reset');
        //   console.log(resp);
        // })
        // .fail(error=>{
        //   console.error(error)
        //   $.magnificPopup.close();
        // })
        console.log('success');
        $(this).trigger('reset');
        let $head = $('.callback-form__form').find('.callback-form__list-head');
        $head.each(function(){
          $(this).text($(this).attr('data-title'))
        })
        // .text($head.attr('data-title'));
        $.magnificPopup.close();
        $.magnificPopup.open({
          items: {
            src: '#js-success-popup'
          },
          type: 'inline',
          showCloseBtn: false,
        })
      }
    })
  }
}
