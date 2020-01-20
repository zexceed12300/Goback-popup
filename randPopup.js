minPost = 0
// maxPost = maximum of posts to be randomized 
maxPost = 10
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// change YOUR-WEBSITE.COM to your website domain
document.write('<script type=\"text/javascript\" src=\"https://YOUR-WEBSITE.COM/feeds/posts/default?alt=json-in-script&max-results='+getRandomInt(minPost, maxPost)+'&callback=getPostsURL\"><\/script>');
function getPostsURL(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
    };
    for (var j = 0; j < entry.link.length; j++) {
        if (entry.link[j].rel == "alternate") {
        var URL = entry.link[j].href;
        window.URL = URL;
        }
    }
};
window.history.pushState({page: 1}, "", "");
    window.onpopstate = function(event) {
        if(event){
            window.location.replace(URL);
        }
    }
