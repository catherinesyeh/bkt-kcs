AOS.init({
    duration: 1500,
    offset: 0,
    anchorPlacement: 'center-bottom',
    once: true
});

var fc = document.getElementById("flowchart").children;

function filter(cat) {
    var fil = cat.getAttribute("data-fil");

    // select the right button
    var buttons = cat.parentElement.children;
    for (var i = 0; i < buttons.length; i++) {
        var b = buttons[i];
        if (b == cat) {
            b.classList.add("selected");
        } else {
            b.classList.remove("selected");
        }
    }

    // filter kcs by knowledge area
    for (var i = 0; i < fc.length; i++) {
        var item = fc[i];
        item.classList.add("hide");
        var cat = item.getAttribute("data-cat");
        if (cat == null|| fil == "all" || cat.includes(fil)) {
            // matching filter; show kc
            item.classList.remove("hide");
        } // else, not the right filter; hide kc
    }
}

// don't start animations until everything is loaded
document.body.classList.add('js-loading');
console.log("loading");
window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
    console.log("done");
}