global.expect = require('expect');

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

const dom = new JSDOM(html, {
  resources: "usable",
  runScripts: "dangerously",
});

global.window = dom.window;
global.document = dom.window.document;
