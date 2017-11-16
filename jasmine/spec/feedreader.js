/*global
allFeeds
loadFeed
 */
/* feedreader.js
 *
 */

$(function () {
  //This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
  describe('RSS Feeds', function () {
    // Make sure that the allFeeds variable has been defined and that it is not empty.
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
  });
  /*
   * #08 A Test that loops through each feed
   * in the allFeeds object and ensures it has a URL defined
   * and that the URL is not empty.
   */
  it('have all their URLs filled', function () {
    allFeeds.forEach((feed) => {
      expect(feed.url).toBeDefined();
      expect(feed.url).not.toBe('');
    });
  });
  /*
   * #09 A test that loops through each feed
   * in the allFeeds object and ensures it has a name defined
   * and that the name is not empty.
   */
  it('have all their names filled', function () {
    allFeeds.forEach((feed) => {
      expect(feed.name).toBeDefined();
      expect(feed.name).not.toBe('');
    });
  });

  /**
   * Get a number of pixels by which the menu is shifted to the left outside the screen
   * @returns {number} a number of pixels (negative - the menu is hidden; positive - the menu is shown)
   */
  function getTransformShift () {
    const shift = $('.slide-menu').css('transform').split(',')[4];
    return Number(shift);
  }

  /*
   * #11 Write a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */
  describe('The menu', function () {
    it('is hidden by default', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true);
      expect(getTransformShift()).toBeLessThan(0);
    });
  });
  /*
   * #12 Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */
  describe('The menu', function () {
    const menuIcon = $('.menu-icon-link');
    const body = $('body');

    beforeEach(function (done) { // since menu sliding takes some time css-properties should be checked asynchronously
      menuIcon.trigger('click');
      setTimeout(done, 1000);
    });

    it('shows itself when clicked', function (done) {
      expect(body.hasClass('menu-hidden')).toBe(false);
      expect(getTransformShift()).toBeGreaterThanOrEqual(0); //method is absent in version 2.1.2 hence version 2.8.0 was used
      done();
    });
    it('hides itself when clicked again', function (done) {
      expect(body.hasClass('menu-hidden')).toBe(true);
      expect(getTransformShift()).toBeLessThan(0);
      done();
    });
  });
  /**
   * #14 A test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   */
  describe('Initial Entries', function () {
    beforeEach(function (done) {
      loadFeed(0, done);
    });

    it('are loaded', function (done) {
      //since the first feed is to be loaded (or not) anyway, we can just make sure that entries are present
      //and there is no need to check the title
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });

  });
  /*
   * #16 A test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   */
  describe('New Feed Selection', function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; //some feeds take there time to load...

    let feedNum = 0;
    let prevFeedHtml = '';

    beforeEach(function (done) {
      loadFeed(feedNum, done);
      feedNum++;
    });

    allFeeds.forEach((feed) => { //check every feed except the first one (checked during Initial Entries test)
      it(`loads ${feed.name}`, function (done) {
        expect($('.header-title').text()).toBe(feed.name); //feed load succeeded
        expect($('.feed .entry').length).toBeGreaterThan(0); //feed contains entries
        const feedHtml = $('.feed').html();
        expect(feedHtml).not.toBe(prevFeedHtml); //to be sure that the content of the feed has changed
        prevFeedHtml = feedHtml;
        done();
      });
    });
  });
}());
