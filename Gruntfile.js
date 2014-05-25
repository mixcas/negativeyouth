module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {                                 // task
      dist: {                             // target
        files: {                        // dictionary of files
            'main.css': 'main.scss'     // 'destination': 'source'
        }
      },
      dev: {                              // another target
        options: {                      // dictionary of render options
          includePaths: [
            '.'
          ]
        },
        files: {
          'main.css': 'main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['./*.scss'],  //watched files        
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass']);
}


