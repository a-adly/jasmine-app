$(function() {
    /** 
     * Test suite RSS Feeds
     * @description
     * checks if RSS Feeds variable is defined correctly
     */
    describe('RSS Feeds', function() {
        /** 
         * @description
         * Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined & not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* url validator from: https://stackoverflow.com/a/43467144 */
        const isValidUrl = (string) => {
                try {
                    new URL(string);
                    return true;
                } catch (_) {
                    return false;
                }
            }
            /** 
             * @description
             * Test that loops through each feed in the allFeeds object
             * and ensures it has a URL & name defined
             * and makes sure they are not empty.
             */
        for (const feed of allFeeds) {
            it(`(${feed.id}) has a valid URL (${feed.url})`, function() {
                expect(feed.url).toBeTruthy(); // checks if defined & not empty
                expect(isValidUrl(feed.url)).toBeTruthy(); // valid url string
            });
            it(`(${feed.id}) has a valid name (${feed.name})`, function() {
                expect(feed.name).toBeTruthy(); // checks if defined & not empty
                expect(feed.name).toEqual(jasmine.any(String)); // of type string
            });
        }
    });
    /** 
     * Test suite "The menu"
     * @description
     * to test if menu is hidden by default
     * and has a toggle visible/hidden state when menu icon is clicked
     */
    describe('Menu bar', function() {
        /** 
         * @description
         * Test that ensures the menu element is hidden by default.
         */
        it('should be hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });
        /**
         * Test suite 'Menu bar visibility'
         * @description
         * Test suite that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        describe('visibility', function() {
            const menuIcon = document.querySelector('.menu-icon-link');
            /*
            added 2 tests in the same spec "it" function, to run in the same order otherwise if 2nd test is run before 1st one (random order is default in jasmin), the two tests will fail (as they depend on each other in clicks)
            */
            it('is toggled when clicked', function() {
                menuIcon.click();
                expect(document.body.classList).not.toContain('menu-hidden');
                menuIcon.click();
                expect(document.body.classList).toContain('menu-hidden');
            });
        });
    });
    /** 
     * @description
     * Test suite "Initial Entries"
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /** 
         * @description
         * Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should has at least one entry', function() {
            expect(document.querySelector('.feed .entry')).not.toBeNull();
        });
    });
    /** 
     * @description
     * Test suite "New Feed Selection"
     */
    describe('New Feed Selection', function() {
        let oldContent;
        beforeAll(function(done) {
            loadFeed(0, done); // load some content
        });
        beforeEach(function(done) {
            oldContent = document.querySelector('.feed').innerHTML;
            loadFeed(2, done); // load different contents after saving oldContent
        });
        /** 
         * @description
         * Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('should change content after calling loadFeed()', function() {
            expect(document.querySelector('.feed').innerHTML).not.toEqual(oldContent);
        });
    });
    /** 
     * Future test suite "Select Menu" 
     * @description
     * future feature to add select menu html tag
     * containing different feed sources names
     * so user can choose his preferable feed from the list
     */
    xdescribe('Select Menu', function() {
        const select = document.querySelector("select");
        /** 
         * @description
         * Test if the select element already exists on the page
         */
        it('exists on the page', function() {
            expect(select).toBeTruthy();
        });
        /** 
         * @description
         * Test to check if the select menu has minimum 2 options to select from
         */
        it('should has at least 2 options', function() {
            expect(select.options.length).toBeGreaterThan(1);
        });
        /** 
         * @description
         * Test suite for menu options
         * when user selects one option feeds on the page should update
         */
        describe('options', function() {
            let oldContent;
            /*
            async calling to a future function updateFeeds(callback)
            */
            beforeEach(function(done) {
                oldContent = document.querySelector('.feed').innerHTML;
                /* Change the selected option to any other new option */
                let nextOption = select.selectedIndex + 1;
                if (nextOption == select.options.length) select.selectedIndex = 0;
                /*
                Future async function in app.js file
                which updates the feeds on the page according to the selected option
                */
                updateFeeds(done);
            });
            /** 
             * @description
             * Test to check feeds contents after changing menu option
             */
            it('should update feeds when selected', function() {
                expect(document.querySelector('.feed').innerHTML).not.toEqual(oldContent);
            });
        });
    });
}());