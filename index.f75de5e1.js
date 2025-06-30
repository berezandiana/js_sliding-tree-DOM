"use strict";
const allLi = document.querySelectorAll("li");
allLi.forEach((li)=>{
    const childUl = li.querySelector("ul");
    if (childUl) {
        const firstChild = li.firstChild;
        if (firstChild.nodeType === Node.TEXT_NODE) {
            const span = document.createElement("span");
            span.textContent = firstChild.textContent.trim();
            li.insertBefore(span, firstChild);
            li.removeChild(firstChild);
            span.addEventListener("click", ()=>{
                childUl.hidden = !childUl.hidden;
            });
        }
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
