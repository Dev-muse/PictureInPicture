// Selecting Elements

const videoElement = document.querySelector("#video");
const buttonElement = document.querySelector("#button");

// prompt user to select media stream then pass to video element and play

async function selectMediaStream() {
  try {
    //   mediaStream awaits until user selects what media to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    // selected video on media stream loaded into video element's src then played
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // caught error logged here:
    console.error("Error found:", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;

  //start picture in picture
  await videoElement.requestPictureInPicture();

  //   reset button only if picture in picture triggered
  button.disabled = false;
});

// on load:
selectMediaStream();
