function changeTitle() {
    const message = "Kodowanko?";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function showText() {
    const duck = document.querySelector(".duck");
    let counter = 0;

    duck.addEventListener("click", function() {
        counter++;

        if(counter < 5) {
            console.log("Hello! I'm Rubber Ducky. Do you need help?");
        } else {
            console.log("Hey! Stop it!");
        }
    })
}

const init = function() {
    changeTitle();
    showText();
};

document.addEventListener("DOMContentLoaded", init);
