const Repository = require('../models/repository')
module.exports = function (response) {
    response.data.items.forEach((repositoryData) => {
        const {
            id: repositoryId,
            full_name: fullName = '',
            description: description = 'no description',
            html_url: htmlUrl = '',
            stargazers_count: stars = 0,
        } = repositoryData
        var repository = new Repository({ repositoryId, fullName, description, htmlUrl, stars })
        Repository.findOne({repositoryId: '10270250'})
            .then((foundRepository) => {
                debugger
                if (foundRepository === null) {
                    return repository.save()
                } else {
                    foundRepository.description = "bla bla"
                    foundRepository.save()
                }
            })
            .catch(error=> {
                console.log(`error: ${error}. repository: ${fullName}, ${description}`)
            })
    })
}