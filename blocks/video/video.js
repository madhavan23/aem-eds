export default function decorate() {
  const videoWrappers = document.querySelectorAll('.video-wrapper');

  videoWrappers.forEach((item) => {
      const textContainer = document.createElement('div');
      textContainer.classList.add('text-wrapper');

      const content = item.querySelectorAll(
          'div[data-aue-prop="title"]','div[data-aue-prop="description"]', 
      );
      content.forEach((div) => {
        const parentDiv = div.parentElement;
        if (parentDiv && parentDiv.parentElement === item) {
          textContainer.appendChild(parentDiv);
        } else {
          textContainer.appendChild(div);
        }
      });;
  });
}