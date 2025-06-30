document.querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=e.firstChild;if(n.nodeType===Node.TEXT_NODE){var r=document.createElement("span");r.textContent=n.textContent.trim(),e.insertBefore(r,n),e.removeChild(n),r.addEventListener("click",function(){t.hidden=!t.hidden})}}});
//# sourceMappingURL=index.c5293ad7.js.map
