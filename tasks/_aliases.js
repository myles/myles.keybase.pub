module.exports = function (grunt) {
    grunt.registerTask('build', [
        'curl:keybase',
        'assemble',
        'copy:images',
        'sass'
    ]);

    grunt.registerTask('develop', [
        'build',
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('deploy', [
        'clean:build',
        'build',
        // 'clean:keybase',
        'copy:keybase'
    ]);

    grunt.registerTask('default', [
        'develop'
    ]);
};
