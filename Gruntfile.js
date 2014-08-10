module.exports = function(grunt) {

  // Grunt config
  grunt.initConfig({
    coffee: {
        compile: {
            files: {
                "public/static/js/main.js": "coffee/main.coffee"
            }
        }
    },
    clean: {
      build: [
          'public/static/js/main.js'
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
  grunt.loadNpmTasks('grunt-run');
  
  // Task definition
  grunt.registerTask('default', ['coffee'])
  grunt.registerTask('deploy', ['default', 'run:deploy'])
}
