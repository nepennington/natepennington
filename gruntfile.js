//The "wrapper" function
module.exports = function(grunt) {
	//Project and task configuration
	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),

	  		sass: {
	 			 options: {
	 			 	sourceMap: false
	 			},
	 			dist: {
	 				files: {
	 					'web/themes/contrib/bootstrap_subtheme/css/style.css': 
	 					'web/themes/contrib/bootstrap_subtheme/scss/style.scss'
	 				}
	 			}
	  		},

	  		/**
	  		 * Grunt Contrib Watch
	  		 * Monitor files and execute tasks
	  		 * https://www.npmjs.com/package/grunt-contrib-watch
	  		 */
	  		watch: {
	  			sass: {
	  				files: [
	  					'web/themes/contrib/bootstrap_subtheme/scss/**/*.scss'
	  					],
	  					tasks: [
	  						'sass'
	  					]
	  		  		}
	  		  	}
	  		
  		});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['watch']);

  // Do grunt-related things in here
};