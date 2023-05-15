$(document).ready(() => {
    if ($(window).width() < 750) {
        $(".header.image").css("top", $(".header.text").outerHeight() * 0.85 / 16 + "rem");
    } else {
        $(".header.image").css("top", ($(".header.text").outerHeight() + 560 - $(window).width()) / 16 + "rem");
    }

    $(window).resize(() => {
        if ($(window).width() < 750) {
            $(".header.image").css("top", $(".header.text").outerHeight() * 0.9 / 16 + "rem");
        } else {
            $(".header.image").css("top", ($(".header.text").outerHeight() + 560 - $(window).width()) / 16 + "rem");
        }
    });

    $.getScript("scripts/functions/dependent-functions/hacker-text-effect.js").done(() => {
        $("#the-website-hacker-text-effect-demo").on({
            mouseenter: (event) => {
                hackerTextEffect(event.target);
            },
            click: (event) => {
                hackerTextEffect(event.target);
            }
        });
    }).fail((jqxhr) => {
        console.log(jqxhr.status);
    });
});
