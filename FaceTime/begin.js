const video = document.getElementById("videoElm");

const loadFaceAPI = async() => {
    await faceapi.nets.faceLandmark68Net.loadFromUri('./model');
    await faceapi.nets.faceLRecognitionNet.loadFromUri('./model');
    await faceapi.nets.tinyFaceDetector.loadFromUri('./model');
    await faceapi.nets.faceExpressionNet.loadFromUri('./model');
}

function getCameraStream() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {} })
            .then(stream => {
                video.srcObject = stream;
            });
    }
}

video.addEventListener('playing', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight
    }
    setInterval(async() => {
        const detect = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
        const resizedDetects = faceapi.resizeResults(detect, displaySize);
        faceapi.draw.drawDetections(canvas, resizedDetects);
    }, 300);
});

loadFaceAPI().then(getCameraStream());