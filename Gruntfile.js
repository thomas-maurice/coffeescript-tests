module.exports = function(grunt) {

  // Grunt config
  grunt.initConfig({
    copy: {
        main: {
            files: [
                {
                    expand: true,
                    cwd: 'bower_components/jquery/dist',
                    src: ['jquery.min.js'],
                    dest: 'public/static/js'
                },
            ]
        }
    },
    coffee: {
        compile: {
            files: {
                "public/static/js/main.js": "coffee/main.coffee"
            }
        }
    },
    clean: {
        build: [
            'public'
        ],
    },
    // Allows to deploy the app
    run: {
      deploy: {
        options: {
          cwd: "."
        },
        cmd: "node",
        args: [
          'server.js'
        ]
      }
    }
  })

  // Loads the grunt tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-run');
  
  // Task definition
  grunt.registerTask('default', ['copy', 'coffee'])
  grunt.registerTask('deploy', ['default', 'run:deploy'])
}
