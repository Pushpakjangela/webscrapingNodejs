const cheerio = require("cheerio")
const request = require("request-promise");
const chalk = require("chalk");
const json2csv= require("json2csv").Parser;
const fs = require("fs");

// let url = "https://www.imdb.com/title/tt0242519/";
// request(url,cb);



// function cb(error,response,html){
//     if(error){
//         console.log("error",error);
//     }
//     else{
//         handlecb(html);
//     }
// }
// function handlecb(html){
//     let $=cheerio.load(html);
//     let title = $('div[class="sc-dffc6c81-0 iwmAVw"] >h1 > span').text();
//     let rating = $('div[class="sc-bde20123-2 gYgHoj"] > span').text();
//     let summary = $('div[class="ipc-html-content-inner-div"]').text();
    
//     let releasedate = $(
//       'a[class="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link"]'
//     )
    

//     console.log(title);
//     console.log(rating);
//     console.log(summary);
//     console.log("-------------------")
//     let date = $(releasedate[18]).text();
//     console.log(date);

//     // let elemarr = $(".cb-col .cb-col-100 .cb-min-tm .cb-text-gray .ng-binding");
//     // for(let i=0;i<elemarr.length;i++){
//         // console.log($(elemarr[i]).html());
//         // console.log("-----------------")
//     // }

// }

let movie = "https://www.imdb.com/title/tt0242519/";

(async()=>{
  let imdbdata = [];
  const response = await request({
    uri: movie,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
    },
    gzip: true,
  });

    let $ = cheerio.load(response);
    let title = $('div[class="sc-dffc6c81-0 iwmAVw"] >h1 > span').text();
    let rating = $('div[class="sc-bde20123-2 gYgHoj"] > span').text();
    let summary = $('div[class="ipc-html-content-inner-div"]').text();
    // let releasedate = $(
    //     'a[class="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link"]'
    // )
    // let data = $(releasedate[18])

    imdbdata.push({
        title,
        rating,
        summary,
        // data,
    });
    const j2cp=new json2csv()
    const csv=j2cp.parse(imdbdata)
    fs.writeFileSync("./imdb.csv",csv,"utf-8");
})()