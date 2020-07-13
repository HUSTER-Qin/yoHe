const request = require('request')

export function getMovie () {
  return request('https://douban.uieee.com/v2/movie/in_theaters')
}
