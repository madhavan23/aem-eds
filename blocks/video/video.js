export default function decorate(block){
    const videoWrappers = document.querySelectorAll('.video-wrapper');

    videoWrappers.forEach((item) => {
        const textContainer= document.createElement('div');
        textContainer.classList.add('text-wrapper');

        const content = item.querySelectorAll(
            'div[data-aue-prop="title"]','div[data-aue-prop="description"]',
        );
        
    
    
    });
}