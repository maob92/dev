const { extractDataFromPerformanceTiming } = require('./mhe-utils');

async function getPagePerfMetrics( page, urlString ) {
	console.log('---- testing the link: ' + urlString);

	
	if (urlString.includes('http')) {
		// console.log('goto url')
		await page.goto(urlString, {'waitUntil' : 'networkidle2'});
		
		await page.waitFor(2*1000);
		
		const performanceTiming = JSON.parse(
		    await page.evaluate(() => JSON.stringify(window.performance.timing))
		    );

		  return extractDataFromPerformanceTiming(
		    performanceTiming,
		    'connectEnd',
		    'responseEnd',
		    'domContentLoadedEventEnd',
		    'loadEventEnd',
		    'domInteractive'
		  );
				
		
	}
	else {

		await page.waitForSelector(urlString);
		
		await page.waitFor(2*1000);
		const start = new Date().getTime();

		// click on the selector 
		// await page.click(urlString, {'waitUntil' : 'networkidle2'});
		
		await Promise.all([page.click(urlString, {'waitUntil' : 'networkidle2'})]);
		

		const PageLoadTime = new Date().getTime() - start;
		return 'PageLoadTime: ' + PageLoadTime;
		
	}
	

	
}



module.exports = getPagePerfMetrics;


// https://connect2-pqa.mheducation.com
