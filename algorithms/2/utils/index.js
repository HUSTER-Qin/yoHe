const Readline = require('./read')

const Queue = require('./queue')

const Stack = require('./stack')
module.exports = {
	...Readline,
	...Queue,
	...Stack
}