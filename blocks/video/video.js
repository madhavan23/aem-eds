export default function decorate() {
  // Select all video blocks
  const autoVideoBlocks = document.querySelectorAll('.video-wrapper');
  autoVideoBlocks.forEach((autoVideoBlock) => {
    // Find the <p> that contains the <a> with video URL
    const videoPath = autoVideoBlock.querySelector('p > a[href]');
    if (!videoPath) return; // No video link found, skip
    const videoUrl = videoPath.getAttribute('href');

    // Create video element
    const videoPlay = document.createElement('video');
    videoPlay.src = videoUrl;
    videoPlay.autoplay = true;
    videoPlay.muted = true;
    videoPlay.playsInline = true;
    videoPlay.controls = true;
    videoPlay.classList.add('video-auto-player');
    // Create text container for title and description
    const videoTextContainer = document.createElement('div');
    videoTextContainer.classList.add('video-auto-text-container');

    // Select title and description elements
    const titleVideoDiv = autoVideoBlock.querySelector('div[data-aue-prop="video-title"]');
    const descriptionVideoDiv = autoVideoBlock.querySelector('div[data-aue-prop="video-description"]');

    if (titleVideoDiv) {
      // Append a clone or move the element to avoid removing from original place
      videoTextContainer.appendChild(titleVideoDiv);
    }
    if (descriptionVideoDiv) {
      videoTextContainer.appendChild(descriptionVideoDiv);
    }

    // Create a parent container to hold video and text side by side
    const videoParentContainer = document.createElement('div');
    videoParentContainer.classList.add('video-text-wrapper');

    // Append video and text containers to parent
    videoParentContainer.appendChild(videoPlay);
    videoParentContainer.appendChild(videoTextContainer);
  });
}
