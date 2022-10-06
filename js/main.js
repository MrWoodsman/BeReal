var front = false;
var video = document.querySelector('video');
// document.getElementById('flipCamera').onclick = function() { front = !front; };
var constraints = { video: { facingMode: (front? "user" : "environment"), width: 1, height: 1  } };
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
    video.play();
};
})
.catch(function(err) { console.log(err.name + ": " + err.message); })

let canvas = document.getElementById('view')
document.getElementById('MakePhoto').addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    // data url of the image
    console.log(image_data_url);
});