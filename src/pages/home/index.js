import './index.sass';
import './index.pug';
import './work/work.sass'
import './callback/callback.sass'
import ProjectsSlider from './projects'
import ExpertiseSlider from './expertise'
import InitContacts from './contacts'


export default () => {


  let $projects = $('.projects')
  if($projects.length){
    new ProjectsSlider($projects)
  }

  let $expertise = $('.expertise')
  if($expertise.length){
    new ExpertiseSlider($expertise)
  }

  let $contacts = $('.contacts')
  if($contacts.length){
    new InitContacts($contacts)
  }
};
