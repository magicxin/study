import Vue from 'vue'
import _ from 'underscore'
import debug from 'utils/error'
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
        if(variable === undefined) {
          return str
        }else if(_.isString(variable)) {
            return str + '__' + variable
        }else if(_.isArray(variable)) {
            return str + '--' + variable
        }else {
          debug.error('Type Error. variable must be undefined, Array or String')
        }
      }
    }
  })
}