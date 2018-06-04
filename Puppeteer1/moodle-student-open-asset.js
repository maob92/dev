const puppeteer = require('puppeteer');
const getPagePerfMetrics = require('./mhe-c2pqa-pages');

(async () => {
	  const browser = await puppeteer.launch({
//		  headless: false
//		  , ignoreHTTPSErrors: true
//		  , slowMo: 50
//		  , devtools: true
	  });


	  page = await browser.newPage();
	  await page.setViewport({ width: 1280, height: 800 })
	  
	  
	  console.log('start). test moodle teacher open asset')
	  console.log('------------------------------------------\n')
	  console.log('1). launch connect2-pqa')
	  console.log( await getPagePerfMetrics(page, 'http://moodle-pqa.integration.nonprod.mheducation.com/'));
	  
	  
	  console.log('2). login to pqa')
	  console.log( await getPagePerfMetrics(page, 'http://moodle-pqa.integration.nonprod.mheducation.com/login/index.php'));
	  await page.type('#username', 'moodlestudent0529')
	  await page.type('#password', 'Passpass1#')
	  await page.click('[type="submit"]')
	    
	  console.log('3). click on one moodle course')
	  await page.waitForSelector('#course-info-container-18 > div.hidden-xs-down.visible-phone > div > div.media-body > h4 > a')
	  console.log( await getPagePerfMetrics(page, 'https://moodle-pqa.integration.nonprod.mheducation.com/course/view.php?id=18'));
	 
	  
	  console.log('4). click on C2-course')
	  console.log( await getPagePerfMetrics(page, '#module-37 > div > div > div:nth-child(2) > div > a > span'));
	  
	  console.log('5). expand on C2-course: Unit1: International POC- Course-1')
	  console.log( await getPagePerfMetrics(page, '#element1 > div.rightrowcontent > div.toprightrowcontent > div > span.pointer'));
	  
	  console.log('7). open open asset')
	  console.log( await getPagePerfMetrics(page, 'https://connect2-pqa.mheducation.com/lti/launch.php?linkid=4403000035966723&toolid=81&clid=5003300060798&stuid=26396588'));
	  
	  
	  await page.waitFor(2*1000);
	  await page.screenshot({path: 'moodle-student-oepn-asset.png.png', fullPage: true});
	  
	  
	  browser.close();
	  console.log('\n-----------------------')
	  console.log('end). test is done')

	}) ()
