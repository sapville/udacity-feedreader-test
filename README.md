# Feed Reader Application
## How to start
  Open this [link](https://sapville.github.io/udacity-feedreader-test/) in Chrome browser.

  Depending on the settings of your browser it may be needed to allow script loading. If it is the case the following icon will be shown in the browser address field:

![security-icon](https://github.com/sapville/udacity-feedreader-test/blob/master/img/security-icon.PNG)
## Description
The application allows to load and read 4 feeds:
- [Udacity Blog](http://blog.udacity.com/feed)
- [CSS Tricks](http://feeds.feedburner.com/CssTricks)
- [HTML5 Rocks](http://feeds.feedburner.com/html5rocks)
- [Linear Digressions](http://feeds.feedburner.com/udacity-linear-digressions)
## How to proceed
- Initially Udacity Blog feed will be loaded
   - All the article links are clickable
   - Click a link to see the content of the article 
- To get access to other feeds click on the menu icon
   - A slide menu will be shown
   - Choose a feed to show
# Feed Reader Tests
## How to start
The tests will start automatically upon application start in Chrome browser.
## What is to be tested
The following tests will be run:
- if RSS feeds are defined correctly and contain metadata
- if the slide menu works properly
- if selected feeds can be loaded and their content is not void
More details can be found in test log
## Procedure
- The tests are carried out with Jasmine library v2.8.0.
- The test results appear at the bottom of the page in 10-20 seconds after the app is run depending on PC's connection quality and performance
- 10 specifications are to be tested
- If all the tests run without errors each spec reference will be shown in green, and marked with green dots at the header
- In case an error occurs an respective spec will display the error details and will be marked with a red cross at the header

