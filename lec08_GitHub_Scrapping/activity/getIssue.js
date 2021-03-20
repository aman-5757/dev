//3
const request = require('request');
const cheerio = require('cheerio');

// const getMatch = require('./match');
// let url = 'https://github.com/ohmyzsh/ohmyzsh/issues';

function getIssue(url){
    request(url,cb);
}
function cb(error, response, data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('.js-navigation-container.js-active-navigation-container div[id] div>div>a');
    // console.log('aman');
    for(let i = 0; i< 5; i++){
        let aTag  = allATags[i+""];
        let link = ch(aTag).attr("href");
        let completeLink = "https://github.com/" + link;
        let repoName =  completeLink.split("/")[5]; //why can't  use trim() -->[5].trim()
        if()//chck repo
        console.log(completeLink);
        // getMatch(completeLink);
    }

}

module.exports = getIssue;

//module.exports.getAllMatches = getAllMatches;