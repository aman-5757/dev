const puppeteer = require("puppeteer");
const id = "aman4863@gmail.com";
const pw = "pepcoder";
const msg = "Hi! I have doubt in DSA! \n My name is Aman \n Batch: IPU_2 \n Please send me a zoom link!";
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
  
  await tab.waitForTimeout(5000); 
  await tab.waitForSelector('a[data-target="slide-out-admin-chat"]' , {visible:true});
  await (await tab.$('a[data-target="slide-out-admin-chat"]')).click();
  //navigated to tawk.to

  await tab.waitForTimeout(3000); 
  await tab.waitForSelector('#chatTextarea' , {visible:true});
  await tab.type('#chatTextarea', msg);
  await tab.keyboard.press("Enter");
  //requested successfully for a zoom link!
  }
  catch(error){
    await console.log(error);
    await browser.close();
  }
})();