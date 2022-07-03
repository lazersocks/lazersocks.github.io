const form = document.forms["task_input"]
const input = form["task_"]
const list = document.getElementById("list")

form.addEventListener("submit", (e)=>{  
    e.preventDefault()
    const val = input.value
    console.log(val)

     const item = document.createElement("div") //
     item.classList.add("task-container")

    item.innerHTML = "<li>" + val + "<i  onclick=\"del(this)\" class=\"fa-solid fa-xmark\" style=\"float: right;\"></i> </li>"

    list.appendChild(item)

}) 



 function del(elem){
    elem.parentElement.parentElement.remove()
}