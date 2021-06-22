const { DateTime } = require('luxon')

const actions = {
	с: 'seconds',
	мин: 'minutes',
	ч: 'hours',
	д: 'days',
	н: 'weeks',
	мес: 'months',
	г: 'years',
	лет: 'years',
}

const exceptions = ['л', 'м']

function parse(str, timezone) {
	const result = str.match(/(\d+) ?(.*)/)

	const digit = +result[1]
	const hint = result[2]
	const resultHint = exceptions.includes(hint[0]) ? hint.slice(0, 3) : hint[0]
	const action = actions[resultHint]

	const date = DateTime.now()
		.setZone(timezone)
		.plus({ [action]: digit })

	return date.toObject()
}

module.exports = parse
