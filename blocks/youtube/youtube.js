export default function decorate() {
  // Select all youtube blocks
  const youtubeBlocks = document.querySelectorAll('.youtube-wrapper');
  youtubeBlocks.forEach((youtubeBlock) => {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    const videoIDDiv = youtubeBlock.querySelector('[data-aue-prop="videoid"]');
    if (!videoIDDiv) return; // skip if no video ID
    const videoID = videoIDDiv.textContent.trim();

    // Create iframe for YouTube embed with autoplay
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoID}`; // embed URL with autoplay
    iframe.allow = 'accelerometer; autoplay; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.classList.add('video-player');
    videoContainer.appendChild(iframe);

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
    // Create a parent container to hold video and text side by side
    const parentContainer = document.createElement('div');
    parentContainer.classList.add('video-text-wrapper');

    // Append video and text containers to parent
    parentContainer.appendChild(videoContainer);
    parentContainer.appendChild(textContainer);

    // Clear existing content and append the new structure
    youtubeBlock.innerHTML = '';
    youtubeBlock.appendChild(parentContainer);
  });
}
