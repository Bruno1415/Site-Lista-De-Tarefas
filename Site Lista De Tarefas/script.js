function AddTask(){
    
    var task = document.getElementById("taskinput").value;
    
    if(task !== ""){
    var addtask = document.createElement("li");

    addtask.textContent = task;

    document.getElementById("list").appendChild(addtask);

    addtask.addEventListener("click", function(){
        this.classList.toggle("riscado")
    })

    addtask.addEventListener("dblclick", function(){
        this.parentNode.removeChild(addtask)
    })

    document.getElementById("taskinput").value = "";
}}