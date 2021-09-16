Vivino search

Framework update workflow

This Framework is build with webdriverio for frontend testing, Cucumber for test case creation(BDD), Chai for assertion library, and wdio reporter is used for reports.

Step 1

Download the repository - https://github.com/{repoURl} Branch - {branch name} And issue the command npm install

step 2 - Install the selenium and start the srever

         install- npm run webdriver-install
         start -  npm run webdriver-start
         
         The browser version must be compatible with the Chrome API

Step 3 - Command for execution (required a minimum Node.js version of 13)

a) Execution of testcases

Command to execute: FEATURE={testcase ID} keyword={search keyword} npm run test

         Example: FEATURE=TC001 KEYWORD="grapes" npm run test - Execution of a single test case
         Example2: FEATURE=TC001,TC002 KEYWORD="grapes" npm run test - Execution of multiple testcases (we can execute multiple testcases with commas)

Step 4 - Report

After execution corresponding report will be stored in /wdio-report.html file
