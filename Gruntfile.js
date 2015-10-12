/**
 * Created by tony on 10/4/15.
 */
/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
 "grunt" alone creates a new, completed images directory
 "grunt clean" removes the images directory
 "grunt responsive_images" re-processes images without removing the old ones
 */

module.exports = function(grunt) {

    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'views/js/main.min.js': ['views/js/main.js'],
                    'js/perfmatters.min.js': ['js/perfmatters.js']
                }
            }
        },
        responsive_images: {
            dev: {
                options: {
                    engine: "im",
                    sizes: [{
                        width: 1600,
                        suffix: "_lg_2x",
                        quality: 30,
                        upscale: false
                    },{
                        width: 640,
                        suffix: "_md",
                        quality: 60,
                        upscale: false
                    },{
                        width: 320,
                        suffix: "_sm",
                        quality: 75
                    },{
                        width: 100,
                        suffix: "_xs",
                        quality: 75
                    },
                    {
                        width: 70,
                        suffix: "_xxs",
                        quality: 90
                    }]
                },
                /*
                 You don't need to change this part if you don't change
                 the directory structure.
                 */
                files: [{
                    expand: true,
                    src: ["*.{gif,jpg,png}"],
                    cwd: "img_src/",
                    dest: "img/"
                }]
            }
        },
        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ["img"],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ["img"]
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: "img_src/fixed/*.{gif,jpg,png}",
                    dest: "img"
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.registerTask("default", ["clean", "mkdir", "copy", "responsive_images", "uglify", "cssmin"]);

};