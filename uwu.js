//store all non func vars here c:
const { isMobile, zoomLevel } = DetectZoom();

//code for everything else below
const msgary = [
    "a messaging app focused on YOUR privacy",
    "100% open sourced",
    "putting the user first",
    "encrypting your messages",
];

//Change the phrases / headings
function HeadingSwap() {
    var index = 0;
    const headingTextSwap = document.getElementById("switch");

    const textupdate = () => {
        headingTextSwap.classList.add('fade-out');

        setTimeout(() => {
            headingTextSwap.innerText = msgary[index];
            headingTextSwap.classList.remove('fade-out');
            headingTextSwap.classList.add('fade');
            index++;
            if (index >= msgary.length) {
                index = 0;
            }  
        }, 1000);
    }
    
    setInterval(textupdate, 2500);

    textupdate();
}

//detects for mobile or pc / pc zoom
function DetectDevice() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    const zoomLevel = window.innerWidth < window.outerWidth ? 'zoomed-in' : 'normal';

    return {
        isMobile,
        zoomLevel,
    };
}

if (isMobile) {
    console.log(`Mobile device is ${zoomLevel}.`);
} else {
    console.log(`Desktop device is ${zoomLevel}.`);
}

HeadingSwap();