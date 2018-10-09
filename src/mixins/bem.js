import Vue from 'vue'
import _ from 'underscore'
import debug from 'utils/error'
import config from 'config/config'
/*
*@desc bem rule
*@author magix
*@eg <div></div>
*
*/
export default function() {
  Vue.mixin({
    methods: {
      b(str,variable) {
        let temp = config.prefix + '-' + str
        if(variable === undefined) {
          return temp
        }else if(_.isString(variable)) {
            return temp + '__' + variable
        }else if(_.isArray(variable)) {
            return temp + '--' + variable
        }else {
          debug.error('Type Error. variable must be undefined, Array or String')
        }
      }
    }
  })
}