"use strict"

let count = 0;
let countEL = document.getElementById("count-el")

function increment() {
    count += 1;
    countEL.innerHTML = `${count}`
    if (count === 100) {
        alert("Don't you have anything better to do?")
    }
    return
}

function reset() {
    count = 0;
    return countEL.innerHTML = `${count}`
}

let secretCount = 0;
let countSecret = document.getElementById("demo")

function secret() {
    secretCount += 1;
    switch(secretCount) {
        case 1:
            countSecret.innerHTML = ("Why did you click this?");
            break;
        case 2:
            countSecret.innerHTML = ("Please stop clicking!");
            break;
        case 3:
            countSecret.innerHTML = ("Stop!");
            break;
        case 4:
            countSecret.innerHTML = ("Why are you doing this!");
            break;
        case 5:
            countSecret.innerHTML = ("Who hired you!");
            break;
        case 6:
            countSecret.innerHTML = ("Please! I beg you!");
            break;
        case 7:
            countSecret.innerHTML = ("Stop!");
            break;
        case 8:
            countSecret.innerHTML = ("I gave up!");
            break;
        case 9:
            document.getElementById("Link").innerHTML = "Here it is!"
            document.getElementById("Link").href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            break;
        case 10:
            alert("I hate you")
            document.getElementById("Link").innerHTML = ""
            document.getElementById("Link").href = ""
            countSecret.innerHTML = ("Now leave me alone!");
            break;
        case 11:
            count = 0;
            break;
    }
    return
}

// function randomEvent() {
//     let random = Math.floor(Math.random() * (10 - 0 + 1));
//     switch (random) {
//         case 0:
//             console.log(0)
//             document.getElementById('Random').src='https://cdn.cloudflare.steamstatic.com/steam/apps/1761210/capsule_616x353.jpg?t=1659945847'
//             break;
//         case 1:
//             console.log(1);
//             document.getElementById('Random').src='station.jpg'
//             break;
//     }
// }

function randomEvent() {
    const doNotClick = readFileSync(links/do_not_click.txt, "utf-8").split('\n')
}