/**
 *
 * wdio.conf.iOSSim.js
 * Test configuration file used for iOS test environment
 * It uses Chome with Google Nexus 5 mobileEmulation
 *
 */
const fs = require("fs");

const path = require("path");

const merge = require("deepmerge");

const wdioConfChrome = require("./wdio.conf.drivers.js");

const epics = {
  vivino: "/scripts/features/vivino"
};


let fileName = [];

const readDirectory = testFolder => {
    let directories = [];
    var base = path.resolve(".");
    const directory = base + testFolder;
    let files = fs.readdirSync(directory);
    files.forEach(file => {
        const testFile = `${directory}/${file}`;
        const type = fs.statSync(testFile);
        if (type.isDirectory()) directories.push(`${testFolder}/${file}`);
        else fileName.push(testFile);
    });
    if (directories.length) directories.forEach(dir => readDirectory(dir));
};

const readData = directories => {
    directories.forEach(testFolder => readDirectory(testFolder));
};

const getSelectedTextCases = function() {
    const tickets = (process.env.FEATURE || "").split(",");
    let ticketToTest = [];
    let testFilter;
    tickets.length &&
        tickets.forEach(ticket => {
                    fileName = [];
                    readData(Object.values(epics));
                    testFilter = tc => {
                        return tc.indexOf(`${ticket}-`) !== -1;
                    };
                    let file = fileName.filter(testFilter);
                    ticketToTest = ticketToTest.concat(file);
        });
    return ticketToTest;
};

const wdioSelectedConfig = merge(wdioConfChrome.config, {
  suites: {
    feature: getSelectedTextCases()
  }
});

exports.config = wdioSelectedConfig;
