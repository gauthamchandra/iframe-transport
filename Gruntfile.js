/* global module */
/* global require */
module.exports = function(grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'library/ift.js']
        }
    });

    grunt.registerTask('build', ['jshint']);
};