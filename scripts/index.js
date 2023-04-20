$(document).ready(() => {
    /* Hacker text effect (it plays once when loaded) */

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()=+,.?'";
    let intervalList = [];
    let hoverEvent = new Event("mouseover");

    function hackerTextEffect(target) {
        let interval = 0;

        for (listItem of intervalList) {
            if (listItem[0] === target.id) {
                interval = target;
                clearInterval(listItem[1]);
                listItem[1] = hackerTextEffectInterval(target);
            }
        }


        if (interval === 0) {
            interval = hackerTextEffectInterval(target);
            intervalList.push([target.id, interval]);
        }
    }

    function hackerTextEffectInterval(target) {
        let iteration = 0;

        let interval = setInterval(() => {
            target.innerText = target.innerText
                .split("")
                .map((character, index) => {
                    if (index < iteration) {
                        return target.dataset.text[index];
                    }

                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            if (iteration >= target.dataset.text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2;
        }, 30);

        return interval;
    }

    setTimeout(() => {
        document.querySelector("h1").dispatchEvent(hoverEvent);
        document.querySelector("h2").dispatchEvent(hoverEvent);
    }, 500);

    $("h1").on("mouseenter", (event) => {
        hackerTextEffect(event.target);
    });

    $("h2").on("mouseenter", (event) => {
        hackerTextEffect(event.target);
    });
});