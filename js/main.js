var front = false;
var cameraView = document.getElementById('camera');
var cameraView2 = document.getElementById('view');
// document.getElementById('flipCamera').onclick = function() { front = !front; };
// var constraints = { video: { facingMode: (front? "user" : "environment"), width: 1080, height: 1440  } };
var constraints = { video: { facingMode: (front? "user" : "environment")} };
var constraints2 = { video: { facingMode: (!front? "user" : "environment")} };
function cameraStart() {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
function cameraStart2() {
    navigator.mediaDevices
    .getUserMedia(constraints2)
    .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView2.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

window.addEventListener("load", cameraStart, false);
window.addEventListener("load", cameraStart2, false);

let canvas = document.getElementById('view')
// document.getElementById('MakePhoto').addEventListener('click', function() {
    // canvas.getContext('2d').drawImage(cameraView, 0, 0, canvas.width, canvas.height);
    // let image_data_url = canvas.toDataURL('image/jpeg');
    
    // data url of the image
    // console.log(image_data_url);
    // });