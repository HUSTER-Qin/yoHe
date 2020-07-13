import Vue from 'vue'
// import { createRouter } from './router'
import {createStore} from './store'
import App from './App.vue'

export function createApp() {
	// const router = createRouter()
	const store = createStore()
	const app = new Vue({
		store,
		render:h=>h(App)
	})
	return {app, store, App}
}

