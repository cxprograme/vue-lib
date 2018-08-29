/*
* @Author: cxpro
* @Date:   2018-01-12 11:17:23
* @Last Modified by:   cx
* @Last Modified time: 2018-08-28 21:44:43
*
*/
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
//Store 需要大写
export default new Vuex.Store({
	state: {
		user: {},
		token: null,
		title: '',
		book:{}
	},
	  getters: {
	    getStorage: function (state) {
	      if (!state.user) {
	        state.user = JSON.parse(localStorage.getItem(key))
	      }
	      return state.user
	    }
	  },
	mutations: {
		//登录记录token
		[types.LOGIN]: (state, data) => {
			localStorage.token = data;
			state.token = data;
		},
		//登出移除token
		[types.LOGOUT]: (state, data) => {
			localStorage.removeItem('token');
			state.token = null;
		},
		[types.TITLE]: (state, data) => {
			state.title = data
		},
		[types.BOOKINFO]:(state,data) => {
			state.book = data;
		},
		$_setStorage (state, value) {
	      state.user = value
	      localStorage.setItem(key, JSON.stringify(value))
	    },
	    $_removeStorage (state) {
	      state.user = null
	      localStorage.removeItem(key)
	    }

	}
})