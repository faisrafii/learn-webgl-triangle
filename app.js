var vertexShaderText = 
[
    'precision mediump float;',
    '',
    'attribute ver2 vertPosition;',
    '',
    'void main()',
    '{',
    'gl_position = vec4(vertPosition, 0.0, 1.0);',
    '}'
].join('\n');

var fragmentShaderText = 
[
    'precision mediump float;',
    '',
    'void main()',
    '{',
    'gl_fragColor = vec4(1.0, 0.0, 0.0, 1.0);',
    '}'
].join('\n');

var InitDemo = function(){
    console.log("This is working")
    /*1. Initialize WebGL */
    var canvas = document.getElementById('game-surface');
    var gl = canvas.getContext('webgl');

    if(!gl){ /*if the browser doesn't fully support*/
        console.log('Webgl not supported, falling back on experimental-webgl');
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        alert('Your Browser Does Not Support WebGL')
    
    }
    gl.clearColor(0.75, 0.85, 0.8, 1.0); /*Background Color sesuai width ama height (harusnya muncul ijo*/ 
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); /*trigger buat munculin warna*/
    };
    
//1.Declare Vertex Shader//
var vertexShader = gl.createShader();

//2.Declare Fragment Shader//
//3.Declare Source Of Both Shader//
//4.Compile Both Shaders//
//5.Attach To One Program//




}