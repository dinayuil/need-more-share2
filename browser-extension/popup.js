const code = `
var getTitle = function() {
    var content;
    // check querySelector existance for old browsers
    if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
                return content.getAttribute('content');
            } else if (content = document.querySelector('title')) {
                return content.innerText;
            }
        }
      return document.title;
    };

    // get image from html
var getImage = function() {
    var content;
    // check querySelector existance for old browsers
    if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
            return content.getAttribute('content');
        } else
            return '';
        } else
        return '';
    };

    // get description from html
var getDescription = function() {
    var content;
    // check querySelector existance for old browsers
    if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
            return content.getAttribute('content');
        } else
            return '';
        } else {
        if (content = document.getElementsByTagName('meta').namedItem('description'))
            return content.getAttribute('content');
        else
            return '';
        }
    };
[location.href, getTitle(), getImage(), getDescription()]
`;

chrome.tabs.executeScript({
    code
}, (ret) => {
    if (ret && ret[0]) 
        new needShareButton('#i-share', {
            url: ret[0][0],
            title: ret[0][1],
            image: ret[0][2],
            description: ret[0][3],
        });
    else 
        new needShareButton('#i-share', {
            title: 'NeedMoreShares: share web pages on social medias'
        });
})