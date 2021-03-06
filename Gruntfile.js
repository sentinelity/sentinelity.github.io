module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
// Tasks
    
watch: {
     compass: {
           files: ['styles/**/*.{scss,sass}'],
           tasks: ['compass:dev']
     },
     js: {
           files: ['javascripts/**/*.js'],
           tasks: ['uglify']
     },
     cssmin: {
           files: ['styles/**/styles.css'],
           tasks: ['cssmin']
     }
},
    
compass: {
  dev: {
      options: {              
           sassDir: ['styles/sass'],
           cssDir: ['styles/css'],
           environment: 'development'
      }
  },
  prod: {
      options: {              
           sassDir: ['styles/sass'],
           cssDir: ['styles/css'],
           environment: 'production'
      }
  },
},
    
uglify: {
  all: {
      files: {
          'javascripts/min/main.min.js': [
          'javascripts/libs/*.js',
          'javascripts/main.js'
          ]
      }
  },
},
    
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'styles/css',
      src: ['*.css', '!*.min.css'],
      dest: 'styles/css',
      ext: '.min.css'
    }]
  }
},
    
imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
},
     
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-compass');

// Default task(s).
grunt.registerTask('default', ['compass:dev' , 'uglify' , 'cssmin' , 'imagemin' , 'watch']);
};