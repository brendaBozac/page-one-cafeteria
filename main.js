const app = document.getElementById('typewriter');

const typewriter = new Typewriter( app, {
    loop: true,
    delay: 75

});

typewriter
    .typeString('Ya elegiste el Tuyo?...')
    .pauseFor(200)
    .start();


/* ALTO EFECTO ;)   */


