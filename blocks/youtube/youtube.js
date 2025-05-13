export default function decorate() {
  // Select all youtube blocks
  const youtubeBlocks = document.querySelectorAll('.youtube-wrapper');
  youtubeBlocks.forEach((youtubeBlock) => {
    // videoID
    const videoID = youtubeBlock.querySelector('div[data-aue-prop="videoid"]');
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    if (videoID) {
      videoContainer.appendChild(videoID.cloneNode(true));
    }

    // Create text container for title and description
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    // Select title and description elements
    const titleDiv = youtubeBlock.querySelector('div[data-aue-prop="title"]');
    const descriptionDiv = youtubeBlock.querySelector('div[data-aue-prop="description"]');

    if (titleDiv) {
      // Append a clone or move the element to avoid removing from original place
      textContainer.appendChild(titleDiv.cloneNode(true));
    }
    if (descriptionDiv) {
      textContainer.appendChild(descriptionDiv.cloneNode(true));
    }
  });
}
