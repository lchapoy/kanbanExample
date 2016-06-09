/**
 * Created by luis on 3/30/2016.
 */
module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ["es2015"]
            },
            dist: {
                files: {
                    'serverComp.js': ['server.js']
                }
            }
        },
        watch:{
            test:{
                files:['server.js'],
                tasks:['babel']
            }
        },
        express:{
            options: {
                port: process.env.PORT || 3000
            },
            dev: {
                options: {
                    script: 'serverComp.js',
                        debug: true
                }
            }
        }
    });
    grunt.registerTask('server',['babel','express:dev','watch']);
};