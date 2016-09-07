module.exports = function(grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    exec: {
      printstuff: {
        cmd: 'echo "printstuff has been fired!"'
      }
    },
    watch: {
      shouldFire: {
        files: ['shouldFire', 'shouldFireDir/shouldFire'],
        tasks: ['printstuff']
      }
    }
  });

  grunt.registerTask('printstuff', 'Prints out some debug', [
    'exec:printstuff',
    'watch'
  ]);

  grunt.registerTask('default', '', [
    'watch'
  ]);
};
