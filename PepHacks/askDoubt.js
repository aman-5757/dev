const puppeteer = require("puppeteer");
const id = "aman4863@gmail.com";   //Your Email Here
const pw = "dingdong";   //Your Password Here
const name = "Aman Srivastava";   //Your name here
const batchName = "DevPP";
const msg = "Hi! I have doubt in DSA! \n My name is "+ name + "\n Batch: "+ batchName +"\n Please send me a zoom link!";
let browser;
(async function(){
  try{
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    }); // 10 sec
  let allPages = await browser.pages();
  let tab = allPages[0];
  await tab.goto("https://classroom.pepcoding.com/myClassroom");
  await tab.type('[name="email"][placeholder="email"]', id);
  await tab.type('[action="login"] [name="password"][placeholder="Password"]', pw);
  await tab.click('[action="login"] [type="submit"]');
  //login successful

  await tab.waitForTimeout(5000);  
  await tab.waitForSelector('.dropdown-trigger.dashboard-burger' , {visible:true});
  await (await tab.$('a[class="dropdown-trigger dashboard-burger"]')).click();
  
  await tab.waitForSelector('a[id="showLiveDoubtSlideOut"]' , {visible:true});
  await tab.click('a[id="showLiveDoubtSlideOut"]');
  
  // await tab.waitForTimeout(5000); 
  // await tab.waitForSelector('.additionalPadding #chatTextarea' , {visible:true});
  // // await (await tab.$('a[data-target="slide-out-admin-chat"]')).click();
  // //navigated to tawk.to
  
  
  // // await page.$eval('#email', el => el.value = 'test@example.com');

  // await tab.waitForSelector('.additionalPadding textarea' , {visible:true});
  // await tab.type('.additionalPadding textarea', msg);



  


  // await tab.waitForTimeout(5000); 
  // await tab.waitForSelector('fieldset .additionalPadding' , {visible:true});
  // await (await tab.$('fieldset .additionalPadding')).click();
  // fieldset .additionalPadding

  await tab.waitForTimeout(3000); 
  await tab.waitForSelector('textarea#chatTextarea' , {visible:true});
  await tab.type('textarea#chatTextarea', msg);
  await tab.keyboard.press("Enter");
  //requested successfully for a zoom link!
  }
  catch(error){
    await console.log(error);
    // await browser.close();
  }
})();