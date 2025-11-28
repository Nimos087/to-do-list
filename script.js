const inputBox1 = document.getElementById("input-box");
const listConstainer = document.getElementById("list-container");
var cssTop = 50;

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
    }
    inputBox1.value = '';
}

listConstainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){ //can stay for sublist
        e.target.classList.toggle("checked"); //add checked class to it
        saveData();
    }
    else if (e.target.classList.contains("cross")){
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.classList.contains("plus")){
        //check if first sublist element added (if grandparent img-wrap has (grand+)child with that tagName)
        let subul = e.target.parentElement.parentElement.querySelector("ul");

        if (!subul) { //if there is no ul there yet
            subul = document.createElement("ul");
            e.target.parentElement.parentElement.appendChild(subul);
        }


        //make sub input box and put it inside an li that is inside subul
        let subli = document.createElement("li");
        subul.appendChild(subli);

        let subInputBox = document.createElement("input");
        subli.appendChild(subInputBox);

        saveData();

        

        //(while not sent, change plus image to something else so you can click it to erase the input box)
        //if input not empty and sent, 

        //sublist deletable
        //input content fit
        //click area content fit

        //progress status
        


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