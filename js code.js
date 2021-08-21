console.log(document.getElementsByTagName("ul")[0].innerHTML)

var n = document.getElementsByTagName("ul")[1]

console.log(n.innerHTML)

console.log(n.nodeName);

console.log(n.nodeType);

console.log(n.parentNode);

console.log(n.childNodes);

console.log(n.childNodes.length);

console.log(n.previousSibling)

console.log(n.nextSibling)

console.log(n.firstChild.nodeValue)

console.log(n.lastChild.nodeValue)

n.firstChild.nodeValue="continue"

n.lastChild.nodeValue="next"

var myelement=document.getElementById("my id")
myelement.style.backgroundColor="yellow"

var myel=document.getElementById("text")

myel.style.color="red"
myel.style.backgroundColor="black"
myel.style.border="5px solid blue"
myel.style.textAlign="center"

var element=document.getElementById("hi")
//element.className="class"
element.setAttribute("class","class")

var x=document.getElementById("family")
//x.textContent="somthing changed"
x.innerHTML="<h1>somthing changed</h1>"
//x.outerHTML="<span>somthing changed</span>"