#Jasmine Testing App

## Index
* Project Overview
* How to run application
* Test Suites
* Future Features Tests
* Code Dependencies
* License.


## Project Overview

This project is a web-based application that reads RSS feeds. and implement Jasmine Testing Suite to verify code is working as written..


## How to run application

1. Clone or download this repo
2. From web browser, open index.html in root folder
3. You can see the tests running and their results


## Test Suites:

Tests implemented in this web application 

`RSS Feeds:`

Test 1: Make sure that the allFeeds variable has been defined and that it is not empty.

Test 2: test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

`Menu:`

Test 1: Menu element is hidden by default.

Test 2: ensures the menu changes visibility when the menu icon is clicked.

`Initial Entries:`

Test 1: Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

`New Feed Selection:`

Test 1: Ensure when a new feed is loaded by the loadFeed function that the content actually changes.

## Future Features Tests

* Adding additional tests to better assist in adding future features to the application.

`Select Menu:`

Test 1: Make sure that the select menu has been added to the DOM HTML.

Test 2: Ensure that menu element has at least two options to choose from.

Test 3: Test to Ensure that after changing menu options the feeds content changes.


## Code Dependencies
1. [Icon Font & SVG Icon Sets ❍ IcoMoon](https://icomoon.io/)
2. [Normalize.css](https://necolas.github.io/normalize.css/)
3. [Google Fonts](https://fonts.google.com/)
4. [JasmineJS](https://jasmine.github.io/)
5. [HandlebarJS](https://handlebarsjs.com/)
6. [jQuery](https://jquery.com/)
7. [Google's loading API](https://www.google.com/jsapi)


## License

MIT License