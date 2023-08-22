let input = 10;
let system;
let turn = 0;
let sWon = 0;
let yWon = 0;

function rock() {
    input = 0;
    system = Math.floor(Math.random() * 3);
    turn = turn + 1;

    if (system == 1) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">System won!</div>`
        a.replaceWith(b);
        sWon = sWon + 1;
        let c = document.getElementById("sysRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="sysRes" class="mh">${sWon}</span>`
        c.replaceWith(d);
    }
    else if (system == 2) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">You won!</div>`
        a.replaceWith(b);
        yWon = yWon + 1;
        let c = document.getElementById("youRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="youRes" class="mh">${yWon}</span>`
        c.replaceWith(d);
    }
    else if (system == input) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">Draw!</div>`
        a.replaceWith(b);
    }
    let e = document.getElementById("turn");
    let f = document.createElement("span");
    f.innerHTML = `<span id="turn" class="mh">${turn}</span>`
    e.replaceWith(f);
}

function paper() {
    input = 1;
    system = Math.floor(Math.random() * 3);
    turn = turn + 1;

    if (system == 0) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">You won!</div>`
        a.replaceWith(b);
        yWon = yWon + 1;
        let c = document.getElementById("youRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="youRes" class="mh">${yWon}</span>`
        c.replaceWith(d);
    }
    else if (system == 2) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">System won!</div>`
        a.replaceWith(b);
        sWon = sWon + 1;
        let c = document.getElementById("sysRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="sysRes" class="mh">${sWon}</span>`
        c.replaceWith(d);
    }
    else if (system == input) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">Draw!</div>`
        a.replaceWith(b);
    }
    let e = document.getElementById("turn");
    let f = document.createElement("span");
    f.innerHTML = `<span id="turn" class="mh">${turn}</span>`
    e.replaceWith(f);
}

function scissors() {
    input = 2;
    system = Math.floor(Math.random() * 3);
    turn = turn + 1;

    if (system == 0) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">System won!</div>`
        a.replaceWith(b);
        sWon = sWon + 1;
        let c = document.getElementById("sysRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="sysRes" class="mh">${sWon}</span>`
        c.replaceWith(d);
    }
    else if (system == 1) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">You won!</div>`
        a.replaceWith(b);
        yWon = yWon + 1;
        let c = document.getElementById("youRes");
        let d = document.createElement("span");
        d.innerHTML = `<span id="youRes" class="mh">${yWon}</span>`
        c.replaceWith(d);
    }
    else if (system == input) {
        let a = document.getElementById("playbox");
        let b = document.createElement("div");
        b.innerHTML = `<div id="playbox">Draw!</div>`
        a.replaceWith(b);
    }
    let e = document.getElementById("turn");
    let f = document.createElement("span");
    f.innerHTML = `<span id="turn" class="mh">${turn}</span>`
    e.replaceWith(f);
}

let round = 0;

function nextRound() {
    if (yWon > sWon) {
        winner = "You won"
    }
    else if (sWon > yWon) {
        winner = "System won"
    }
    else {
        winner = "Draw"
    }

    round = round + 1;
    let a1 = document.getElementById("rightdiv");
    let b1 = document.createElement("div");
    b1.innerHTML = `<div id="rw">Round-${round} : ${winner}</div>`;
    a1.append(b1);

    let c1 = document.getElementById("youRes");
    let d1 = document.createElement("span");
    d1.innerHTML = `<span id="youRes" class="mh"> 0 </span>`
    c1.replaceWith(d1);

    let e1 = document.getElementById("sysRes");
    let f1 = document.createElement("span");
    f1.innerHTML = `<span id="sysRes" class="mh"> 0 </span>`
    e1.replaceWith(f1);

    let g1 = document.getElementById("turn");
    let h1 = document.createElement("span");
    h1.innerHTML = `<span id="turn" class="mh"> 0 </span>`
    g1.replaceWith(h1);

    turn = 0;
    sWon = 0;
    yWon = 0;

}
