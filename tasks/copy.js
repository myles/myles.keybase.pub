module.exports = function (grunt) {
    var config = {
        images: {
            expand: true,
            cwd: 'source/assets/images/',
            src: '**',
            dest: 'build/assets/images/'
        },
        keybase: {
            expand: true,
            cwd: 'build/',
            src: '**',
            dest: '/keybase/public/myles/'
        }
    };
    
    grunt.config.set('copy', config);
};
