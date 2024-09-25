//store all non func vars here c:

//extra things here uwu
HeadingSwap();
setInterval(() => {
    detectScreenSize();
}, 20);


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
function detectScreenSize() {
    const width = window.innerWidth;

    if (width <= 640) {
        const page = document.querySelectorAll('a.text');
        page.forEach(page => {
            page.remove();
        })
    } else if (width >=640) {
        const originalPage =  document.getElementById('buttonhead');
        originalPage.innerHTML = '<a class="text" href="">About</a> <a class="text" href="">Docs</a> <a class="img" href=""><img class="iconimg" src="./imgs/IconwoFrame.png"></a> <!--Download :3--><a class="text" href="mailto:alice@ferretbeans.dev">Contact</a> <a class="text" href="https://github.com/clearcord/">Source</a>'
    }
}

//actually creates the silly menuwu >w<
function menuCreate() {
    const width = window.innerWidth;
    
    if (width <= 640) {
        const uwu = document.getElementById('buttonhead');
        uwu.innerHTML = ''
    }
}