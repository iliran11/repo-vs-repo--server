const axios = require('axios');
const pagination = require('./pagination.js')
// module.exports = function getReposData(url, q, language, access_token,callback) {
module.exports = function getReposData(options) {
    const { url, q, language, access_token, callback } = options
    axios({
        methods: 'get',
        url,
        params: {
            q, language, access_token,
            per_page: 1000
        }
    })
        .then((response) => {
            const remainingCalls = response.headers['x-ratelimit-remaining']
            const { nextLink, lastPageNumber, nextPageNumber } = pagination(response.headers.link)
            console.log(`remaining Calls: ${remainingCalls}. nextLinkNumber: ${nextPageNumber}. lastLinkNumber: ${lastPageNumber}`)
            if (remainingCalls < 2) {
                console.log('no more calls remains')
                return;
            }
            if (nextPageNumber !== 1) {
                callback(response)
                getReposData({
                    url: nextLink,
                    callback
                })
            } else {
                console.log('didnt called page number 1. we are done.')
            }
        })
        .catch((error) => {
            console.log(error)
        })
}