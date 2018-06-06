const puppeteer = require('puppeteer');
const getPagePerfMetrics = require('./mhe-c2pqa-pages');

(async () => {
	  const browser = await puppeteer.launch({
		  headless: false
//		  , ignoreHTTPSErrors: true
//		  , slowMo: 50
//		  , devtools: true
	  });


	  page = await browser.newPage();
	  await page.setViewport({ width: 1280, height: 800 })
	  
	  
	  console.log('start). test bb student open asset')
	  console.log('------------------------------------------\n')
	  console.log('1). launch moodle-pqa login page')
	  console.log( await getPagePerfMetrics(page, 'https://mhhestaging2.blackboard.com/'));
	  
	  
	  console.log('2). login to pqa')
	  await page.type('#user_id', 'bbstudent0601u165')
	  await page.type('#password', 'Passpass1')
	  console.log( await getPagePerfMetrics(page, '[type="submit"]'));
	    
	  console.log('3). click on Bencourse-0530c1 course')
	  await page.waitForSelector('#_4_1termCourses_noterm > ul > li > a')
	  console.log( await getPagePerfMetrics(page, 'https://mhhestaging2.blackboard.com/webapps/blackboard/execute/launcher?type=Course&id=_15734_1&url='));
	 
	  
	  console.log('4). click on Content')
	  console.log( await getPagePerfMetrics(page, 'https://mhhestaging2.blackboard.com/webapps/blackboard/content/listContentEditable.jsp?content_id=_1726697_1&course_id=_15734_1&mode=reset'));
	  
			  
	  
	  // await browser.close();
	  
	  console.log('5). expand on C2-course: Unit1: International POC- Course-1')
	  console.log( await getPagePerfMetrics(page, 'https://mhhestaging2.blackboard.com/webapps/blackboard/content/listContent.jsp?course_id=_15734_1&content_id=_1726699_1'));
	  
	  console.log('6). open open asset')
	  console.log( await getPagePerfMetrics(page, 'https://mhhestaging2.blackboard.com/webapps/partner-cloud/app/launch/content?course_id=_15734_1&content_id=_1726718_1'));	  
	  
	  
	  
	  await page.waitFor(2*1000);
	  await page.screenshot({path: 'bb-student-oepn-asset.png.png', fullPage: true});
	  
	  
	  browser.close();
	  console.log('\n-----------------------')
	  console.log('end). test is done')

	}) ()
