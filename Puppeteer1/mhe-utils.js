const extractDataFromPerformanceTiming = (timing, ...dataNames) => {
  const navigationStart = timing.navigationStart;
  const extractedData = {};
  dataNames.forEach(name => {
	//  console.log('---- name:' + name)
    extractedData[name] = timing[name] - navigationStart;
  });
  return extractedData;
};

module.exports = {
  extractDataFromPerformanceTiming,
};

