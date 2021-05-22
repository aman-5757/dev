let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let constraints = {video: true};
let recordingState = false;
let recordedData;
let mediaRecorder;

(async function(){
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);
   try{
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    videoPlayer.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);
    //so next we have attached functions to these events

    mediaRecorder.onstop = function(e){
        console.log("Inside on stop !!");
        console.log(e);
    }
    mediaRecorder.onstart = function(e){
        console.log("Inside on start !!");
        console.log(e);
    }
    mediaRecorder.ondataavailable = function(e){
        console.log("Inside on data available !!");
        recordedData = e.data;
        saveVideoToFs();
    }
    // console.log(mediaRecorder);


    //attach click event on recordButton
    recordButton.addEventListener("click" , function(){
        if(recordingState){
            //stop the recording
            mediaRecorder.stop();
            recordButton.innerHTML = "Record";
        }
        else{
            //start the recording
            mediaRecorder.start();
            recordButton.innerHTML = "Recording";
        }
        recordingState = !recordingState;
    })

    photoButton.addEventListener("click", capturePhotos);

   }
   catch(error){

   }
})();


function saveVideoToFs(){
    console.log("Saving Video");

    //file obj in recordedData
    let videoUrl = URL.createObjectURL(recordedData);
    console.log(videoUrl);

    let aTag = document.createElement("a");
    aTag.download = "video.mp4";
    aTag.href = videoUrl;

    aTag.click();
    aTag.remove();
}

function capturePhotos(){
    let canvas = document.createElement("canvas");
    canvas.height = videoPlayer.videoHeight;
    canvas.width = videoPlayer.videoWidth;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(videoPlayer,0,0);

    let imageUrl = canvas.toDataURL("image/jpg");   //canvas obj = > file url string

    let aTag = document.createElement("a");
    aTag.download = "photo.jpg";
    aTag.href = imageUrl;
    aTag.click();
}