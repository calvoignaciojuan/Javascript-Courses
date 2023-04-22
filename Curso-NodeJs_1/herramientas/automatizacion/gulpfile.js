const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build",(cb)=>{

    console.log("ejecuto mis comandos aqui");
    setTimeout(cb,1200 );

});

gulp.task("serve",function(cb){
    gulp.src("www")
        .pipe(server({
            livereload:true,
            open:true
        }));
});