let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let constraints = {video: true};
let recordingState = false;
let recordedData;
let mediaRecorder;

let zoomIn = document.querySelector("#in");
let zoomOut = document.querySelector("#out");

//zoom
let maxZoom = 3; 
let minZoom = 1; 
let currZoom = 1;


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
            recordButton.querySelector("div").classList.remove("record-animate");
        }
        else{
            //start the recording
            mediaRecorder.start();
            recordButton.querySelector("div").classList.add("record-animate");
        }
        recordingState = !recordingState;
    })

    photoButton.addEventListener("click", capturePhotos);

    zoomIn.addEventListener("click", function(){
        if(currZoom + 0.1 <= maxZoom){
            currZoom += 0.1;
            videoPlayer.style.transform = `scale(${currZoom})`;
        }
    });
    zoomOut.addEventListener("click", function(){
        if(currZoom - 0.1 >= minZoom){
            currZoom -= 0.1;
            videoPlayer.style.transform = `scale(${currZoom})`;
        }
    });


   }
   catch(error){

   }
})();


function saveVideoToFs(){
    console.log("Saving Video");

    //file obj in recordedData
    let videoUrl = URL.createObjectURL(recordedData);
    // console.log(videoUrl);


    let iv = setInterval(function(){
        if(db){
            saveMedia("Video", videoUrl);
            clearInterval(iv);
        }
    }, 100);


    // let aTag = document.createElement("a");
    // aTag.download = "video.mp4";
    // aTag.href = videoUrl;

    // aTag.click();   //download startfor video
}

function capturePhotos(){
    photoButton.querySelector("div").classList.add("capture-animate");
    //async
    setTimeout(function(){
        photoButton.querySelector("div").classList.remove("capture-animate");
    },1000);
    let canvas = document.createElement("canvas");
    canvas.height = videoPlayer.videoHeight;
    canvas.width = videoPlayer.videoWidth;

    let ctx = canvas.getContext("2d");

    //canvas is scaled according to currZoom
    if(currZoom != -1 ){
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(currZoom,currZoom);
        ctx.translate(-canvas.width/2, -canvas.height/2);
    }


    ctx.drawImage(videoPlayer,0,0);

    let imageUrl = canvas.toDataURL("image/jpg");   //canvas obj = > file url string

    let iv = setInterval(function(){
        if(db){
            saveMedia("image", imageUrl);
            clearInterval(iv);

        }
    },100);

    //skip the downloading part
    // let aTag = document.createElement("a");
    // aTag.download = "photo.jpg";
    // aTag.href = imageUrl;
    // aTag.click();
}