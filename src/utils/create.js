import config from 'config/config'

function create(sfc) {
  sfc.name = config.prefix + '-' + sfc.name;
  return sfc;
}

export default create