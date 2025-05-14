export default function decorate() {
  const videoWrapper = document.querySelectorAll('.video-wrapper');
  videoWrapper.forEach((item) => {
    const componentDiv = item.querySelector('div[data-aue-type="component"]');
    const videoPath = item.querySelector('p > a[href]');
    const videoUrl = videoPath.getAttribute('href');
    const videoPlayer = document.createElement('video');
    videoPlayer.src = videoUrl;
    videoPlayer.autoplay = true;
    videoPlayer.muted = true;
    videoPlayer.playsInline = true;
    videoPlayer.controls = true;
    videoPlayer.classList.add('video-player');

    const videoTextContainer = document.createElement('div');
    videoTextContainer.classList.add('video-text-container');
    const contentDivs = item.querySelectorAll(
      'div[data-aue-prop="video-title"],div[data-aue-prop="video-description"]',
    );

    contentDivs.forEach((div) => {
      const parentDiv = div.parentElement;
      if (parentDiv && parentDiv.parentElement === item) {
        videoTextContainer.appendChild(parentDiv);
      } else {
        videoTextContainer.appendChild(div);
      }
    });

    // Remove empty divs inside the wrapper
    item.querySelectorAll('div').forEach((div) => {
      if (div.childNodes.length === 0) {
        div.remove();
      }
    });

    // Create a parent container to hold video and text side by side
    const parentContainer = document.createElement('div');
    parentContainer.classList.add('video-text-wrapper');

    // Append video and text containers to parent
    parentContainer.appendChild(videoPlayer);
    parentContainer.appendChild(videoTextContainer);
    componentDiv.appendChild(parentContainer);
    const path=item.querySelector('p.button-container');
    if (path && path.parentElement){
        path.parentNode.remove();
    }
  });
}
