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
    }
    inputBox1.value = '';
}

function addSubTask(inputEle){
    if(inputEle.value === ''){
        alert("Good job I guess? You already completed nothing..."); //why tf is this shown when I click on the plus???
    }
    else{
        let originalLi = inputEle.parentElement.parentElement.parentElement.parentElement;
        let ul = inputEle.parentElement.parentElement.parentElement;
        let inputLi = inputEle.parentElement.parentElement;
        
        let newLi = createElement("li");
        newLi.innerHTML = inputEle.value;

        ul.appendChild(newLi);

        //ul.insertBefore(newLi, inputLi.querySelector("div"));

        inputEle.parentElement.remove();

    }
    //why tf does this not work???

}

listConstainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){ //can stay for sublist ---> should be upd so click is more accurate
        e.target.classList.toggle("checked"); //add checked class to it
        saveData();
    }
    else if (e.target.classList.contains("cross")){ //TODO: subli (quite easy), just add a "cross" class with the right innerHTML to the right
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

        //group input and button
        let div = document.createElement("div");
        subli.appendChild(div);
        div.classList.add("sub-row")

        //add input
        let subInput = document.createElement("input");
        div.appendChild(subInput);

        //add button
        let subButton = document.createElement("button");
        div.appendChild(subButton);
        subButton.classList.add("sub-button");
        subButton.innerText = "Add";
        subButton.onclick = addSubTask(subInput);

        

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