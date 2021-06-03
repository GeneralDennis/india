import './callback-form.sass'
import validate from 'jquery-validation';
import Inputmask from 'inputmask';


export default () => {
  const $helpRoot = $('.js-help-list');
  const $helpList = $helpRoot.find('.callback-form__list-items');
  const $helpHead = $helpRoot.find('.callback-form__list-head');
  const $helpInp = $helpRoot.find('input:hidden');
  const $helpItem = $helpRoot.find('.callback-form__list-item');
  $helpRoot.css('z-index', 4);

  const $budgetRoot = $('.js-budget-list');
  const $budgetHead = $budgetRoot.find('.callback-form__list-head');
  const $budgetList = $budgetRoot.find('.callback-form__list-items');
  const $budgetInp = $budgetRoot.find('input:hidden');
  const $budgetItem = $budgetRoot.find('.callback-form__list-item');

  $helpRoot.on('click', function(){
    $helpList.slideToggle();
    $helpHead.toggleClass('callback-form__list-head--open');
  })
  $budgetRoot.on('click', function(){
    $budgetList.slideToggle();
    $budgetHead.toggleClass('callback-form__list-head--open');
  })

  $helpItem.on('click', function(){
    $helpInp.val($(this).text());
    $helpHead.text($(this).text());
  })

  $budgetItem.on('click', function(){
    $budgetInp.val($(this).text());
    $budgetHead.text($(this).text());
  })

}
