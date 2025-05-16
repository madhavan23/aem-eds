// export default function decorate() {
//   // Select all elements
//   const imageTextWrapper = document.querySelectorAll('.image-text-wrapper');
//   imageTextWrapper.forEach((imageText) => {
//     // Find the div that contains the picture element
//     const pictureElement = imageText.querySelector('div > picture');
//     const imageDiv = pictureElement?.closest('div');

//     if (imageDiv) {
//       imageDiv.classList.add('picture-container');

//       const parentDiv = imageDiv.parentElement;
//       if (parentDiv) {
//         parentDiv.classList.add('image-text-parent-container');
//       }
//     }

//     const textContainer = document.createElement('div');
//     textContainer.classList.add('text-wrapper');

//     const detailsDivs = imageText.querySelectorAll(
//       'div[data-aue-prop="title"], div[data-aue-prop="description"], p.button-container',
//     );

//     detailsDivs.forEach((div) => {
//       const parentDiv = div.parentElement;
//       if (parentDiv && parentDiv.parentElement === imageText) {
//         textContainer.appendChild(parentDiv);
//       } else {
//         textContainer.appendChild(div);
//       }
//     });

//     // Remove empty divs inside the wrapper
//     imageText.querySelectorAll('div').forEach((div) => {
//       if (div.childNodes.length === 0) {
//         div.remove();
//       }
//     });

//     // Insert the text container after the image container
//     if (imageDiv && imageDiv.parentNode) {
//       imageDiv.parentNode.insertBefore(textContainer, imageDiv.nextSibling);
//     } else {
//       imageText.appendChild(textContainer);
//     }
//   });
// }

export default function decorate() {
  // Select all elements with class 'image-text'
  const imageTextElements = document.querySelectorAll('.image-text');

  imageTextElements.forEach((block) => {
    // Create the new container div for all except first child
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('textContainer');

    // Get all child divs of the block
    const children = Array.from(block.children);

    // Skip if no children or only one child
    if (children.length <= 1) return;

    // Append all children except the first one into contentContainer
    children.slice(1).forEach((child) => {
      contentContainer.appendChild(child);
    });

    // Append the contentContainer back to the block
    block.appendChild(contentContainer);
  });
}
