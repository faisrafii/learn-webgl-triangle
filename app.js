var InitDemo = function(){
    console.log("This is working")
    /*1. Initialize WebGL */
    var canvas = document.getElementById('game-surface');
    var gl = canvas.getContext('webgl');

    if(!gl){ /*if the browser doesn't fully support*/
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        alert('Your Browser Does Not Support WebGL')
    }