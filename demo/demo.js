function updateDemoSect(demoSect){
    var markupEl = getMarkupEl(demoSect, "html");
    var contextEl = getContextEl(demoSect);

    var htmlMarkup = cleanHtmlSource(contextEl.innerHTML, ["style", "content-maximizing"]);
    updatePrettyprintEl(markupEl, htmlMarkup);
}

document.addEventListener('DOMComponentsLoaded', function(){
    xtag.addEvent(document, "click:delegate(.demo-wrap > .markup-wrap > button.toggle)", function(e){
        var button = this;
        var demoSect = button.parentNode.parentNode;
        var toggleAttr = this.getAttribute("data-toggle-attr");
        if(!toggleAttr) return;

        var layoutEl = demoSect.querySelector("x-layout");
        layoutEl[toggleAttr] = !layoutEl[toggleAttr];

        updateDemoSect(demoSect);
    });

    xtag.query(document, ".demo-wrap").forEach(function(demoSect){
        updateDemoSect(demoSect);
    });

    prettyPrint();
});