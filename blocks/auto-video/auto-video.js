export default function decorate() {
  // Select all video blocks
  const videoBlocks = document.querySelectorAll('.auto-video-wrapper');
  videoBlocks.forEach((videoBlock) => {
    // Find the <p> that contains the <a> with video URL
    const videoLink = videoBlock.querySelector('p > a[href]');
    if (!videoLink) return; // No video link found, skip
    const videoUrl = videoLink.getAttribute('href');

    // Create video element
    const videoEl = document.createElement('video');
    videoEl.src = videoUrl;
    videoEl.autoplay = true;
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.controls = true;
    videoEl.classList.add('video-player');

    // Optional: Use poster image if available inside a picture element
    const pictureElement = videoBlock.querySelector('picture img');
    if (pictureElement) {
      videoEl.setAttribute('poster', pictureElement.src);
    }

    // Create text container for title and description
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    // Select title and description elements
    const titleDiv = videoBlock.querySelector('div[data-aue-prop="video-title"]');
    const descriptionDiv = videoBlock.querySelector('div[data-aue-prop="video-description"]');

    if (titleDiv) {
      // Append a clone or move the element to avoid removing from original place
      textContainer.appendChild(titleDiv);
    }
    if (descriptionDiv) {
      textContainer.appendChild(descriptionDiv);
    }

    // Create a parent container to hold video and text side by side
    const parentContainer = document.createElement('div');
    parentContainer.classList.add('video-text-wrapper');

    // Append video and text containers to parent
    parentContainer.appendChild(videoEl);
    parentContainer.appendChild(textContainer);

    // Clear existing content and append the new structure
    videoBlock.innerHTML = '';
    videoBlock.appendChild(parentContainer);
  });
}
