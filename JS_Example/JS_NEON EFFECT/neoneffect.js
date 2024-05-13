// Import the neonCursor function from the external JavaScript library
import neonCursor from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

// Call the neonCursor function with the desired configurations
neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 80,
    curvelerp: 8.5,
    radius1: 5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefx: 0.0025,
    sleepTimeCoefy: 0.0025
    // Add more configurations if needed
});
