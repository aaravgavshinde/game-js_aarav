let num = Math.floor(Math.random() * 101);
let chances = 0;

function guess() {
    let input = document.getElementById("mainInput").value;
    if (input < 0 || input > 100) {
        let maindiv1 = document.getElementById("moremaindiv");
        let b = document.createElement("div");
        b.innerHTML = `<div class="Text1"> Please enter a number from 0-100!</div>`
        maindiv1.append(b);
    }

    else if (input > num) {
        let maindiv2 = document.getElementById("moremaindiv");
        let c = document.createElement("div");
        c.innerHTML = `<div class="Text1"> ${input} is <b>greater</b> than the actual number! </div>`;
        maindiv2.append(c);
        chances++;
    }

    else if (input < num) {
        let maindiv3 = document.getElementById("moremaindiv");
        let d = document.createElement("div");
        d.innerHTML = `<div class="Text1"> ${input} is <b>smaller</b> than the actual number! </div>`;
        maindiv3.append(d);
        chances++;
    }

    else {
        let maindiv4 = document.getElementById("moremaindiv");
        let e = document.createElement("div");
        chances++;
        e.innerHTML = `<div class="Text2"> ${input} is Correct, You Won! 🥳🎉 <br> You took ${chances} chances to guess.</div>`;
        maindiv4.append(e);
    }

    document.getElementById("mainInput").value = "";
}