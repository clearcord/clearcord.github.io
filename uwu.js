//store all non func vars here c:

//extra things here uwu
HeadingSwap();
window.onresize = createMenu();
window.onload = createMenu();

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
function createMenu() {
    const width = window.innerWidth;

    if (width <= 640) {
        const page = document.querySelectorAll('a.text');
        page.forEach(page => {
            page.remove();
        })
    }
}