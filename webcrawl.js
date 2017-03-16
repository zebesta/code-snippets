
// API given URL return HTML
var fetch = require('fetch');
var cheerio = require('cheerio');

// hash for visited URLS
var visited = {};
//list of reachable places
var reachable = {};


// Got disconnected and can't seem to reconnect here... calling back but to no avail
function webcrawl(url){
  if(visited[url]){
    return;
  }else{
    visited[url] = true;
    var links = getlinks(url);
    links.then(res=>{
        res.map((a)=>{
          // Add logic to check for matching host, and also construct relative complete URLs

          if(url.parse(url).host == url.parse(url.resolve(url, r)).host){
            reachable[a] = true;});
          }
        for(let r of res){
          if(!visited[r]){
            if(url.parse.host == url.resolve(url, r)){
              webcrawl(r);
            }
          }
        }
      }, err=>{
        return err;
      }
    )
  }
}

function samehost(url){
}


function getlinks(url){
  var resultinglinks = fetch(url)
  .then(res=>{
    let $ = cheerio.load(res.text());
    var links = $('a').map((i, a)=>{return $(a).attr('href')}).get(); // return array of       all the a tags HREFs
    return links;
  },
  err=>{
    return err;
  })

  return resultinglinks;
};




function initialize(url){
  reachable[url] = true;
  webcrawl(url);
  return Object.keys(reachable);
}

// Edge cases to consider: Dynamic URLs with the same content and not the same URL



/*
Your previous Plain Text content is preserved below:

question: https://crawl.codeferret.net

We want to write a webcrawler that, given a URL A, finds all URLs reachable from A on the same host and protocol.

So, if we find the following set of links:

    https://www.example.com/1 -> https://www.example.com/2
    https://www.example.com/1 -> https://www.example.com/3
    https://www.example.com/2 -> https://www.example.com/4
    https://www.example.com/3 -> http://www.example.com/5
    https://www.example.com/3 -> https://www.somewhere-else.com/6
    http://www.example.com/5 -> https://www.example.com/7

And an initial URL of: https://www.example.com/1

We expect to get back a list/set (we do not care about order) of:

    [
      "https://www.example.com/1",
      "https://www.example.com/2",
      "https://www.example.com/3",
      "https://www.example.com/4"
    ]

We get 4 because we are recursing. We skip 5 because it is on the wrong protocol (http), and 6 because it is on the wrong host (somewhere-else.com). We do not see 7 because we do not search pages with URLs that do not meet our criteria, so we do not scan 5 for links.

Start your crawl at 1.html and you should get 1.html, 2.html, 3.html and 4.html in your return list
 */
