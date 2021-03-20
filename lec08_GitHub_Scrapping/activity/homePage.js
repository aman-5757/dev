const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const topics = require('./getTopics');

let url = 'https://www.github.com/topics';
request(url,cb);

function cb(error, response, data){
    parseData(data);
}


function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('.container-lg.p-responsive.mt-6 ul li a');  //obj 
    // console.log(aTag.attr("href"));
    for(let i = 0; i<allATags.length; i++){
        let aTag = ch(allATags[i+""]);
        // console.log(aTag);
        // let trendName = aTag.find(".container-lg.d-sm-flex.flex-items-center.p-responsive.py-5 h1").text();

        let link = ch(aTag).attr("href");
        let completeLink = "https://www.github.com"+link;
        let trendName = completeLink.split("/")[4].trim();

        // createFolder(trendName);

        // console.log(trendName);
        topics(completeLink);
    }

    

}

function createFolder(trendName){
    let trendPath = `./GitHub/${trendName}`;
    fs.mkdirSync(trendPath);
}