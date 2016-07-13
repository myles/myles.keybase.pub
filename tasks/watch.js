module.exports = function (grunt) {
    var config = {
        options: {
            livereload: true
        },
        html: {
            tasks: [
                'assemble'
            ],
            files: [
                'source/**/*.hbs',
                'source/**/*.yml',
                'source/helpers/*-helper.js'
            ]
        },
        sass: {
            tasks: [
                'sass'
            ],
            files: [
                'source/assets/stylesheets/*.scss',
                'source/assets/stylesheets/**/*.scss'
            ]
        },
        images: {
            tasks: [
                'copy:images'
            ],
            files: [
                'source/assets/images/*.svg'
            ]
        }
    };

    grunt.config.set('watch', config);
};