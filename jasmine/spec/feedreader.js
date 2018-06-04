/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
    */
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();//ensure all feeds is defined
            expect(allFeeds.length).not.toBe(0);//ensure all feeds is not empty

        });

        it('Url is defined', function() {
            for (var i = 0; i <= allFeeds.length - 1; i++) {
                expect(allFeeds[i].url).toBeDefined();//Test that the URL is defined in each feed
                expect(allFeeds[i].url).not.toBe(0);//Test that the URL is not empty
            }

        });

        it('Name is defined', function() {
            for (var i = 0; i <= allFeeds.length - 1; i++) {
                expect(allFeeds[i].name).toBeDefined();//Test that the name is defined
                expect(allFeeds[i].name).not.toBe(0);//Test that the name is not empty
            }

        });
    });


    //Test Suite to test the menu behaviour when clicked
    describe('The menu', function() {
       
        var menu_icon = $("body");
        var menu_btn = $("i");
        it('to be hidden initially', function() {
            expect(menu_icon.attr("class")).toContain("menu-hidden");//Test wether the menu item is hidden initially

        });

       
        it("body toggles the class 'menu-hidden' on clicking menu icon", function() {
            menu_btn.click();
            expect(menu_icon.hasClass('menu-hidden')).toBe(false);//Check if menu is displayed

            menu_btn.click();
            expect(menu_icon.hasClass('menu-hidden')).toBe(true);//Check if menu is hidden
        });
    });

    /* Test suite to test the "Initial Entries" */
    describe('The menu', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //Test there is at least a single .entry element within the .feed container.
        it("has at least 1 entry after loadFeed function is called", function(done) {
            var numEntries = $(".feed").find(".entry").length;
            expect(numEntries).toBeGreaterThan(0);
            done();
        });

    });
    //Test suite for the news feed
    describe('News Feed', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                inital_feed = $(".feed").html();
                loadFeed(1, function() {
                done();
            });
            });
            
        });
        //Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        it("the feed content changes", function(done) {
            var new_feed = $(".feed").html();
            expect(inital_feed).not.toBe(new_feed);
            done();
        });

    });
}());