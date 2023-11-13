

const chalk = require("chalk");
const request = require("request");
const cheerio = require("cheerio");


console.log("before req");
// feature is given by -> request
let url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url, cb);

console.log("after req");

// call back function which is call by request 
function cb(error, response,html) {
    if(error){
        console.log("error", error);
    }
    else{
        handlehtml(html);
    }
}
function handlehtml(html){
    // console.log(html);
    // console.log("--------------------------------------------------------------------/////")
    // let $=cheerio.load(html);
    // let elemarr = $(".ci-html-content .ds-py-2 .ds-px-3 .xl:ds-pr-14");
    // for(let i = 0;i<contentarr.length;i++){
    //     let data=seltool(contentarr[i]).text();
    //     console.log("data ",data);
    // }

    // let total = seltool(contentarr[0]).text();
    // let death = seltool(contentarr[1]).text();
    // let reconverd = seltool(contentarr[2]).text();
    // console.log(chalk.gray("total"+total));
    // console.log(chalk.red("death"+death));
    // console.log(chalk.green("recovered"+reconverd));



    let $ = cheerio.load(html);
    let elemarr = $(".ds-grow");
    let text =$(elemarr[0]).text()
    let htmldata = $(elemarr[0]).html();

    console.log("text data ",text);

    console.log("/-----------------------------------------/")
    console.log("html data ",htmldata);


}