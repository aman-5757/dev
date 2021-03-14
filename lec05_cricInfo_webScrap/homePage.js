const cheerio = require('cheerio');
const request = require('request');
const getAllMatches = require('./allMatches');

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595';
request(url,cb);

function cb(error, response, data){
    parseData(data);
}


function parseData(html){
    let ch = cheerio.load(html);
    let aTag = ch('.widget-items.cta-link a');  //obj
    // console.log(aTag.attr("href"));
    let link = aTag['0']["attribs"]["href"];
    let completeLink = "https://www.espncricinfo.com"+link;

    getAllMatches(completeLink);

}