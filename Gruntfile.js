module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/main.js',
        dest: 'build/js/main.min.js'
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd:'src/css/', src: ['**'], dest: 'build/css/'},
          {expand: true, cwd:'src/font/', src: ['**'], dest: 'build/font/'},
          {expand: true, cwd:'src/img/',  src: ['**'], dest: 'build/img/'},
          {expand: true, cwd:'src/', src: 'index.html', dest: 'build/'},
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify','copy']);

};