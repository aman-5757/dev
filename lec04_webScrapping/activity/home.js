const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/england-tour-of-india-2020-21-1243364/india-vs-england-1st-t20i-1243388/full-scorecard";
let lc = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary';
let real = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary';

request(real,cb);

function cb(error, response, body){
    parseBody(body);
}

function parseBody(html){
    let ch = cheerio.load(html);
    let aTagKaData = ch('.d-flex.match-comment-padder.align-items-center .col-14.col-md-15.col-lg-14 p');
    let ans = ch(aTagKaData['0']).text();
    console.log(ans);
}


