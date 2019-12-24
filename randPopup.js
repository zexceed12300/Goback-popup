var randURL = [
    "https://example-1.com/",
    "https://example-2.com/",
    "https://example-3.com/"
];

var URL = randURL[Math.floor(Math.random()*randURL.length)] 
window.history.pushState({page: 1}, "", "");
window.onpopstate = function(event) {
    if(event){
        window.open(URL);
    }
}
