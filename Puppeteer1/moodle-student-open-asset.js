const puppeteer = require('puppeteer');
const getPagePerfMetrics = require('./mhe-page-actions');

(async () => {
	  const browser = await puppeteer.launch({
//		  headless: false
//		  , ignoreHTTPSErrors: true
//		  , slowMo: 50
//		  , devtools: true
	  });

	  page = await browser.newPage();
	  await page.setCacheEnabled(false);
	  await page.setViewport({ width: 1280, height: 800 })
	  
	  
	  console.log('start). test moodle student open asset')
	  console.log('------------------------------------------\n')
	  console.log('1). launch moodle-pqa login page')
	  console.log( await getPagePerfMetrics(page, 'http://moodle-pqa.integration.nonprod.mheducation.com/login/index.php'));
	  
	  
	  console.log('2). login to pqa')
	  await page.type('#username', 'moodlestudent0529')
	  await page.type('#password', 'Passpass1#')
	  console.log( await getPagePerfMetrics(page, '[type="submit"]'));
	    
	  console.log('3). click on one moodle course')
	  await page.waitForSelector('#course-info-container-18 > div.hidden-xs-down.visible-phone > div > div.media-body > h4 > a')
	  console.log( await getPagePerfMetrics(page, 'https://moodle-pqa.integration.nonprod.mheducation.com/course/view.php?id=18'));
	 
	  
	  console.log('4). click on C2-course')
	  console.log( await getPagePerfMetrics(page, '#module-37 > div > div > div:nth-child(2) > div > a > span'));
	  
	  
	  await browser.close();
	  
	  console.log('5). expand on C2-course: Unit1: International POC- Course-1')
	  console.log( await getPagePerfMetrics(page, '#element1 > div.rightrowcontent > div.toprightrowcontent > div > span.pointer'));
	  
	  console.log('6). open open asset')
	  console.log( await getPagePerfMetrics(page, '#element19 > div.rightrowcontent > div.toprightrowcontent > div.toprightleftrowcontent > a > span'));	  
	  
	  
	  
	  await page.waitFor(2*1000);
	  await page.screenshot({path: 'moodle-student-oepn-asset.png.png', fullPage: true});
	  
	  
	  browser.close();
	  console.log('\n-----------------------')
	  console.log('end). test is done')

	}) ()
