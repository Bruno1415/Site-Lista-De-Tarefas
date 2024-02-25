function Adcionar(){
    var tasklist = document.getElementById('entrylist').value;

    var li = document.createElement("li");
    
    var tasktext =document.createTextNode("entrylist").value;

    li.appendChild(tasktext);

    document.getElementById("tasklist").appendChild(li);

    document.getElementById("entrylist").value = "";
}