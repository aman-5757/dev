const request = require("request");
const cheerio = require("cheerio");

let highestWickerTaker = {};
let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';
request(url,cb);

function cb(error, response, body){
    parseData(body);
}

function parseData(html){
    let highestWicketsSoFar = 0;
    let nameOfHighestWicketTaker;

    let economy;
    let ch = cheerio.load(html);

    let bothBowlingTables = ch('.Collapsible .table.bowler');
    // {  '0' :{} , '1' :{}  }

    for(let i = 0; i<bothBowlingTables.length;  i++){
        let bowlingTable = bothBowlingTables[`${i}`];
        let allTrs = ch(bowlingTable).find("tbody tr");
        //{ 0: tr , 1:tr , 2:tr, 3:tr, 4:tr, 5:tr }

        for(let j=0 ; j<allTrs.length ; j++){
            let allTds = ch(allTrs[j]).find("td");
            let wicketsTaken = ch(allTds['4']).text();
            if(wicketsTaken > highestWicketsSoFar){
                highestWicketsSoFar = wicketsTaken;
                nameOfHighestWicketTaker = ch(allTds['0']).text();
                economy = ch(allTds['5']).text();
            }
            // 0=> name  // 4=>wickets  // 5=>eco
        }
    }
    highestWickerTaker.name = nameOfHighestWicketTaker;
    highestWickerTaker.wickets = highestWicketsSoFar;
    highestWickerTaker.economy = economy;   
    console.log(highestWickerTaker);
}
    
