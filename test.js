var moment = require('moment')
  , assert = require('assert')
  , timeago = require('./index')

assert.equal(timeago(moment().subtract('seconds', 25).valueOf()), '25s')
assert.equal(timeago(moment().subtract('seconds', 25).toDate()), '25s')
assert.equal(timeago(moment().subtract('minutes', 5).valueOf()), '5m')
assert.equal(timeago(moment().subtract('hours', 5).valueOf()), '5h')
assert.equal(timeago(moment().subtract('days', 2).valueOf()), '2d')
var back = moment().subtract('days', 20)
assert.equal(timeago(back.valueOf()), back.format('M/D/YYYY'))
assert.equal(timeago(moment().subtract('minutes', 1).toString()), '1m')

process.exit(0)
