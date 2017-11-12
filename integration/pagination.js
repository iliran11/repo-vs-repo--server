const linksRegex = new RegExp('<[^>]*>', 'g');
const PageRegex = new RegExp('&page=.*')
const PageNumberRegex = new RegExp('[0-9]+$')
function trimmedLink(link) {
    /** the result looks like that <http:// ... >
 * so the following code first slice the last char which is > , then slice the first char which is < */
    return link.slice(0, -1).substring(1)
}
function pageNumber(link) {

    return parseInt(link.match(PageRegex)[0].match(PageNumberRegex)[0])
}

module.exports = function (headerInfo) {
    const nextLink =   trimmedLink(headerInfo.match(linksRegex)[0])
    const lastLink = trimmedLink(headerInfo.match(linksRegex)[1])
    return {
        nextLink,
        lastPageNumber: pageNumber(lastLink),
        nextPageNumber: pageNumber(nextLink)
    }
}