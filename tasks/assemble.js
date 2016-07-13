module.exports = function (grunt) {
    var config = {
        options: {
            layout: 'source/layouts/default.hbs',
            flatten: true,
            production: false,
            data: 'source/data/keybase.json',
            partials: 'source/partials/*.svg'
        },
        pages: {
            options: {
                assets: 'build/assets'
            },
            files: {
                'build/': [
                    'source/pages/index.hbs'
                ]
            }
        }
    };
    
    grunt.config.set('assemble', config)
};
