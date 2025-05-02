export default function decorate() {
  // Select all video blocks
  const videoBlocks = document.querySelectorAll('.video-wrapper');  
  videoBlocks.forEach((videoBlock) => {
    // Find the picture element and wrap it
    const pictureElement = videoBlock.querySelector('picture');
    const imageDiv = pictureElement?.closest('div');
    if (imageDiv) {
      imageDiv.classList.add('picture-container');
    }

    // Find the <p> that contains the <a> with video URL
    const videoLinkP = videoBlock.querySelector('p > a[href]');
    if (videoLinkP) {
      const videoUrl = videoLinkP.getAttribute('href');
      // Create video element
      const videoEl = document.createElement('video');
      videoEl.src = videoUrl;
      videoEl.autoplay = true;
      videoEl.muted = true;
      videoEl.controls = true;
      videoEl.playsInline = true;
      videoEl.classList.add('video-player');
      videoEl.setAttribute('poster', pictureElement?.querySelector('img')?.src || '');
  
      // Replace the <p> parent with video element
      const pParent = videoLinkP.closest('p');
      if (pParent) {
        pParent.replaceWith(videoEl);
      }
    }
  
    // Create text container for title and description
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-wrapper');
  
    // Select title and description divs
    const titleDiv = videoBlock.querySelector('div[data-aue-prop="title"]');
    const descriptionDiv = videoBlock.querySelector('div[data-aue-prop="description"]');
  
    // Append title and description to text container if they exist
    if (titleDiv) {
      textContainer.appendChild(titleDiv.parentElement);
    }
    if (descriptionDiv) {
      textContainer.appendChild(descriptionDiv.parentElement);
    }
  
    // Remove empty divs inside the videoBlock
    videoBlock.querySelectorAll('div').forEach((div) => {
      if (div.childNodes.length === 0) {
        div.remove();
      }
    });
  
    // Wrap imageDiv and video player in a container for 50% width
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-wrapper');
    if (imageDiv) mediaContainer.appendChild(imageDiv);
    const videoPlayer = videoBlock.querySelector('.video-player');
    if (videoPlayer) mediaContainer.appendChild(videoPlayer);
  
    // Clear videoBlock content and append media and text containers
    videoBlock.innerHTML = '';
    videoBlock.appendChild(mediaContainer);
    videoBlock.appendChild(textContainer);
    });
}
