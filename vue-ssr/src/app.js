import Vue from 'vue'

import Home from './App.vue'

export function createApp() {
	const app = new Vue({
		render:h=>h(Home)
	})
	return {app}
}

