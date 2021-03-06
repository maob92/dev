const puppeteer = require('puppeteer');
const getPagePerfMetrics = require('./mhe-c2pqa-pages');


(async () => {
  const browser = await puppeteer.launch({
	  headless: false
//	  , ignoreHTTPSErrors: true
	  , slowMo: 50
//	  , devtools: true
  });


  page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  
  
  console.log('start). test moodle teacher open asset')
  console.log('------------------------------------------\n')
  console.log('1). launch connect2-pqa')
  console.log( await getPagePerfMetrics(page, 'http://moodle-pqa.integration.nonprod.mheducation.com/'));
  
  
  console.log('2). login to pqa')
  console.log( await getPagePerfMetrics(page, 'http://moodle-pqa.integration.nonprod.mheducation.com/login/index.php'));
  await page.type('#username', 'moodleteacher0529')
  await page.type('#password', 'Passpass1#')
  await page.click('[type="submit"]')
    
  console.log('3). click on one moodle course')
  await page.waitForSelector('#course-info-container-18 > div.hidden-xs-down.visible-phone > div > div.media-body > h4 > a')
  console.log( await getPagePerfMetrics(page, 'https://moodle-pqa.integration.nonprod.mheducation.com/course/view.php?id=18'));
 
  
  console.log('4). click on C2-course')
  console.log( await getPagePerfMetrics(page, '#module-37 > div > div > div:nth-child(2) > div > a > span'));
  
  console.log('5). open on C2-course: Unit1: International POC- Course-1')
  console.log( await getPagePerfMetrics(page, '#element1 > div.rightrowcontent > div.toprightrowcontent > span'));

  console.log('7). open open asset')
  //await page.waitForSelector('#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span');
  //await page.click('#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span');
  console.log( await getPagePerfMetrics(page, '#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span'));
  
  
  await page.waitFor(2*1000);
  await page.screenshot({path: 'moodle-teacher-oepn-asset.png', fullPage: true});
  
 
  
  browser.close();
  console.log('\n-----------------------')
  console.log('end). test is done')

}) ()

