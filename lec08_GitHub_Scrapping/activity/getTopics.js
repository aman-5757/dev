const request = require('request');
const cheerio = require('cheerio');
const issue = require('./getIssue');

// const getMatch = require('./match');
// let url = 'https://github.com/topics/hacktoberfest';

function getTopics(url){
    request(url,cb);
}
function cb(error, response, data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('.tabnav-tabs a:nth-child(2)');
    // console.log('aman');
    for(let i = 0; i< 5; i++){
        let aTag  = allATags[i+""];
        let link = ch(aTag).attr("href");
        let completeLink = "https://github.com/" + link;
        issue(completeLink);
    }

}

module.exports = getTopics;

//module.exports.getAllMatches = getAllMatches;