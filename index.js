var postcss = require('postcss');
var triggers = require('./triggers.json');

module.exports = postcss.plugin('doitrigger', function (opts) {
    opts = opts || {};

    return function (css, result) {
        var report = [];

        css.nodes.forEach(function (rule) {
            rule.nodes.forEach(function (declaration) {
                if (triggers[declaration.prop]) {
                    report.push({
                        selector: rule.selector,
                        property: declaration.prop,
                        location: declaration.source.start,
                        changes:  triggers[declaration.prop]
                    });
                }
            });
        });

        if (result && result.messages) {
            result.messages.push({
                type:   'doitrigger',
                plugin: 'postcss-doitrigger',
                stats:  report
            });
        }
    };
});
