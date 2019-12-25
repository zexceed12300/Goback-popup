## Random Pop-up Posts When Goback Button Clicked (For Blogger)
### Setting Up Plugins

This variable is maximum amount of posts to be randomized
```
maxPost = 10
```
Recomended change to 20 for best performance of your website

Important to change "YOUR-WEBSITE.COM" to your website domain name
```
document.write('<script type=\"text/javascript\" src=\"https://YOUR-WEBSITE.COM/feeds/posts/default?alt=json-in-script&max-results='+getRandomInt(minPost, maxPost)+'&callback=getPostsURL\"><\/script>');
```

### Installation
You can install this script to your blogger gadget(recomended install in the head). and done! script has been installed. 
also you can install directly to your template blogger..

find <head> tag in your template and copy/paste the script below
```
<head>
    PASTE THE SCRIPT HERE!
    
</head>
```
or you can install in below <body> tag, but this not recomended
```
<body>
    PASTE THE SCRIPT HERE!

</body>
```
