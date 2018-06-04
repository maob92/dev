const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
	  
//	  headless: true
	  headless: false
	  , slowMo: 50
//	  , devtools: true
	  
  });

  console.log('--------------- start --------------------')

  page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  
  await page.goto('http://moodle-pqa.integration.nonprod.mheducation.com/login/index.php');
  // await page.waitFor(1*1000);
  
  await page.type('#username', 'moodlestudent0529')
  await page.type('#password', 'Passpass1#')
  await page.click('#loginbtn')
    
   
   
//  await page.goto('https://moodle-pqa.integration.nonprod.mheducation.com/course/view.php?id=18');
//  await page.waitFor(5*1000);
  await page.waitForSelector('#course-info-container-18 > div.hidden-xs-down.visible-phone > div > div.media-body > h4 > a')
  await page.click('#course-info-container-18 > div.hidden-xs-down.visible-phone > div > div.media-body > h4 > a');
 
  // await page.goto('https://moodle-pqa.integration.nonprod.mheducation.com/mod/lti/view.php?id=37');
  // await page.waitFor(20*1000);
  await page.waitForSelector('#module-37 > div > div > div:nth-child(2) > div > a > span')
  await page.click('#module-37 > div > div > div:nth-child(2) > div > a > span');
  
 
  
  await page.waitForSelector('#element1 > div.rightrowcontent > div.toprightrowcontent > div > span.pointer')
  await page.click('#element1 > div.rightrowcontent > div.toprightrowcontent > div > span.pointer');
  await page.waitFor(2*1000);

  await page.waitForSelector('#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span')
  await page.click('#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span');
  await page.waitFor(2*1000);
  
  // await page.waitForNavigation({waitUntil: 'load'});
  
  await page.waitFor(5*1000);
  await page.screenshot({path: 'end.png', fullPage: true});
  
  
  browser.close();
  console.log('--------------- end --------------------')

}) ()



/**
 * 
 * 
 * 

 * 
 */





//   