const inputBox1 = document.getElementById("input-box");
const listConstainer = document.getElementById("list-container");

function addTask(){
    if(inputBox1.value === ''){
        alert("Good job I guess? You already completed nothing...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listConstainer.appendChild(li);

        let plus = document.createElement("img");
        plus.src = "./images/plus.png"; 
        plus.classList.add("plus");
        let wrap = document.createElement("span");
        wrap.classList.add("img-wrap"); //make and assign to "img-wrap" class
        wrap.appendChild(plus)
        li.appendChild(wrap);

        let span = document.createElement("span");
        span.classList.add("cross")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
        li.parentElement()
    }
    inputBox1.value = '';
}

listConstainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){ //can stay for sublist
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.classList.contains("cross")){
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.classList.contains("plus")){
        //make sub input box
        
        let subInputBox = document.createElement("input");
        //move subInputBox after cross (get to grandparent (plus -> img-wrap -> li) and get to last position)
        e.target.parentElement.parentElement.insertBefore(subInputBox, e.target.parentElement.parentElement.lastElementChild.nextSibling);  //note:  e.target.parentElement.parentElement.appendChild(subInputBox) also works, also e.target.parentElement.parentElement.lastElementChild.nextSibling is none
        //need to update so css alright, specifically top attribute because li doesn't care about the input

        //(while not sent, change plus image to something else so you can click it to erase the input box)
        //if input not empty and sent, 
        
        //if main list has no ul, make one and appendChild it to main li
        //add li to it

        //let subli = document.createElement("LI");
        //subli.classList.add("sublist");

        //saveData();

    }
}, false);

inputBox1.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        addTask();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listConstainer.innerHTML);
}
function showTask(){
    listConstainer.innerHTML = localStorage.getItem("data");
}
showTask();

function delAll(){
    localStorage.setItem("data", "");
}
//delAll();