import config from 'config/config'
import bem from 'utils/bem'

const install = function(Vue) {
  Vue.component(this.name, this);
};
function create(sfc) {
  sfc.name = config.prefix + '-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(bem);
  return sfc;
}

export default create