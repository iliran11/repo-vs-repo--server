const axios = require('axios')
const regex = new RegExp('.+?(?=\\n)', 'g');
module.exports = function (repositoryFullName) {
    return axios({
        method: 'GET',
        // url:`https://api.github.com/repos/${repositoryFullName}/readme`
        url: `https://api.github.com/repos/charliekassel/vuejs-datepicker/readme`
    })
        .then((reponse) => {
            const rawBase64 = reponse.data.content
            const readmeContent = rawBase64.match(regex)
            return readmeContent.reduce(function (accumulator, currentValue) {
                const decodedValue = Buffer.from(currentValue, 'base64').toString('utf8')
                return accumulator.concat(decodedValue)
            }, '')

        })
}