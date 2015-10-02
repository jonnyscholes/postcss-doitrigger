var fs = require('fs');
var postcss = require('postcss');
var assert = require('assert');

var doitrigger = require('../');

var cssFixture = fs.readFileSync('test/fixtures/basic.css', 'utf8').toString();
var reportFixture = require('./fixtures/report.json');

describe('postcss-doitrigger', function () {
    it('Generates the correct report', function (done) {
        postcss()
            .use(doitrigger())
            .process(cssFixture)
            .then(function (result) {
                try {
                    assert.ok(true);
                    assert.deepEqual(result.messages[0].stats, reportFixture);
                    done();
                } catch (error) {
                    done(error);
                }
            });
    });
});
