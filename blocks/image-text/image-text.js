export default function decorate() {

  const imageText = document.querySelectorAll(".image-text-wrapper");
  imageText.forEach((imageText) => {

    // Find the div that contains the picture element
    const pictureElement = imageText.querySelector("div > picture");
    const imageDiv = pictureElement?.closest("div");

    if (imageDiv) {
      imageDiv.classList.add("picture-container");

      const parentDiv = imageDiv.parentElement;
      if (parentDiv) {
        parentDiv.classList.add("image-text-container");
      }
    }

    const textarea = document.createElement("div");
    textarea.classList.add("text-wrapper");

    const detailsDivs = imageText.querySelectorAll(
      'div[data-aue-prop="title"], div[data-aue-prop="description"], p.button-container'
    );

    detailsDivs.forEach((div) => {
      const parentDiv = div.parentElement;
      if (parentDiv && parentDiv.parentElement === imageText) {
        textarea.appendChild(parentDiv);
      } else {
        textarea.appendChild(div);
      }
    });

    // Remove empty divs inside the wrapper
    imageText.querySelectorAll("div").forEach((div) => {
      if (div.childNodes.length === 0) {
        div.remove();
      }
    });

    // Insert the text container after the image container
    if (imageDiv && imageDiv.parentNode) {
      imageDiv.parentNode.insertBefore(textarea, imageDiv.nextSibling);
    } else {
      imageText.appendChild(textarea);
    }
  });
}
