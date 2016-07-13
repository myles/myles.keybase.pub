module.exports = function (grunt) {
    var config = {
        build: ['build/'],
        keybase: [
            '/keybase/public/myles/index.html',
            '/keybase/public/myles/assets'
        ]
    };

    grunt.config.set('clean', config);
};
