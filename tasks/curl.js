module.exports = function (grunt) {
    var config = {
        keybase: {
            src: 'https://keybase.io/_/api/1.0/user/lookup.json?usernames=myles',
            dest: 'source/data/keybase.json'
        }
    };

    grunt.config.set('curl', config);
};
