
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="color:#b2ce32;">WE ARE<span\>')
.pauseFor(300)
.deleteAll()
.pauseFor(300)
.typeString('<span style="color:#b2ce32;">PROJECT <span\><span style = "color:#005caa;">X<span\>')
.pauseFor(5000)



.start()





    
  