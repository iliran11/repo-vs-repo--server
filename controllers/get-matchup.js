const Repository = require('../models/repository')
function getRandomNumber(ceilNumber) {
    return Math.floor(Math.random() * ceilNumber)
}
function getRandomNumberExclude(ceilNumber, numberToExclude) {
    let randomNumber = getRandomNumber(ceilNumber)
    while (randomNumber === numberToExclude) {
        randomNumber = getRandomNumber(ceilNumber)
    }
    return randomNumber;
}
module.exports = function () {
    return Repository.count()
        .then((count) => {
            const randomNumber = getRandomNumber(count)
            const anotherRandomNumber = getRandomNumberExclude(count, randomNumber)
            return Promise.all([
                Repository.findOne().skip(randomNumber),
                Repository.findOne().skip(anotherRandomNumber)
            ])
        })
    }
