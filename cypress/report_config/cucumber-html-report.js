var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonDir: "cypress/reports/cucumber_report.json",
  output: "cypress/reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  storeScreenshots: true,
};

reporter.generate(options);
