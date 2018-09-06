import Vue from 'vue'
import Cell from 'components/cell'
import Contacts from 'components/contacts'

console.log(Contacts)
const version = '0.0.1';
const components = [
  Cell,
  Contacts
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

//export {
//install,
//version,
//Cell,
//Contacts
//};

export default {
  install,
  version,
  Cell,
  Contacts
};

