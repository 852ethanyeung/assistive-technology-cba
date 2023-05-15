$(document).ready(() => {
    /* JQuery plugin: pulsing circles */
    $("head").append($("<!-- JQuery plugin: pulsing circles -->"));
    $("head").append($("<script></script").attr("src", "scripts/Simple-Pulsating-Circle-Animation-with-jQuery-jPulse-Plugin/dist/jQuery.jPulse.js"));

    /* Adding elements needed (so I don't have to manually add them in every page) */
    $("body").append($("<!-- Dropdown menu -->"));
    $("body").append($("<div></div>").addClass("dropdown-menu-button").append($("<p></p>").addClass("dropdown-menu-text").text("menu")));
    $("body").append($("<div></div").addClass("dropdown-menu").append($("<div></div>").append($("<div></div>").append($("<a></a>").attr("href", "the-challenge.html").text("the challenge")),
        $("<div></div>").append($("<a></a>").attr("href", "the-design.html").text("the design")),
        $("<div></div>").append($("<a></a>").attr("href", "the-process.html").text("the process")),
        $("<div></div>").append($("<a></a>").attr("href", "the-website.html").text("the website")),
        $("<div></div>").append($("<a></a>").attr("href", "the-evaluation.html").text("the evaluation")))));
    if (window.location.pathname !== "/index.html") {
        $(".dropdown-menu").append($("<a></a>").addClass("home-icon").attr("href", "index.html").append($("<span></span>").addClass("material-symbols-outlined").text("home")));
    }

    /* Dropdown menu button effects */

    let menuOpen = false;

    /* Idle ripple */
    $(".dropdown-menu-button").jPulse({
        color: "rgba(255, 255, 255, 0.5)",
        size: 80,
        speed: 4000,
        interval: 2500,
        zIndex: 100
    });

    $(".dropdown-menu-button").on({
        mouseenter: () => {
            /* Ripple strengthens */
            $(".dropdown-menu-button").jPulse("disable");
            $(".dropdown-menu-button").jPulse({
                color: "rgba(255, 255, 255, 0.75)",
                size: 80,
                speed: 3000,
                interval: 1000,
                zIndex: 100
            });
        },
        mouseleave: () => {
            /* Ripple weakens */
            $(".dropdown-menu-button").jPulse("disable");
            $(".dropdown-menu-button").jPulse({
                color: "rgba(255, 255, 255, 0.5)",
                size: 80,
                speed: 4000,
                interval: 2500,
                zIndex: 100
            });
        },
        click: () => {
            if (!menuOpen) {
                menuOpen = true;
                $(".dropdown-menu").slideToggle(1000);
                setTimeout(() => {
                    $(".dropdown-menu-text").text("back");
                }, 250);
                setTimeout(() => {
                    $("h1").toggle();
                    $("h2").toggle();
                }, 1000);
            } else {
                menuOpen = false;
                $("h1").toggle();
                $("h2").toggle();
                $(".dropdown-menu").slideToggle(1000);
                setTimeout(() => {
                    $(".dropdown-menu-text").text("menu");
                }, 750);
            }
        }
    });
});