const { extractDataFromPerformanceTiming } = require('./mhe-utils');

async function getPagePerfMetrics( page, urlString ) {
	console.log('---- testing the link: ' + urlString);

	
	if (urlString.includes('http')) {
		// console.log('goto url')
		await page.goto(urlString);
		
		
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
		// console.log('click on selector');
		await page.waitForSelector(urlString);
		await page.click(urlString);
		
	}
	

	
}


async function getPagePerfMetrics1( page, urlString ) {
	console.log('testing page: ' + urlString);
}

module.exports = getPagePerfMetrics;


// https://connect2-pqa.mheducation.com
