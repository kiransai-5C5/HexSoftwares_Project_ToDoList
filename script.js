const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById("list-container");

// This function adds a new task to the list
// It checks if the input box is empty and alerts the user if it is
// If not, it creates a new list item with the input value and appends it to the list container
// It also creates a span element for removing the task and appends it to the list item
function addTask() {
    if(inputbox.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign
        li.appendChild(span);

    }
    inputbox.value = "";
    saveData();
}
// Add event listener to the list container for click events

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
window.onload = showTask;
// This function is called when the window loads to display saved tasks
// It retrieves the data from localStorage and sets it to the list container