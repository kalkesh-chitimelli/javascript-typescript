const div = document.querySelector("#div") as HTMLDivElement

const add=()=>{
    const todoTextBox = document.getElementById("todo") as HTMLInputElement;
    const value:string = todoTextBox.value;
    if(value===""){
        alert("TODO can not be empty. Please Enter valid todo")
    }else{
        const todoDiv = document.createElement("div") as HTMLDivElement
        const todoText = document.createElement("p") as HTMLParagraphElement
        const deleteTodo = document.createElement("span") as HTMLSpanElement

        todoText.innerText= value; 
        deleteTodo.innerText= 'Complete';
        deleteTodo.style.border = "solid Brown";

        todoText.style.display="inline"
        todoText.style.marginRight="20px"

        deleteTodo.style.cursor="pointer"

        todoDiv.append(todoText,deleteTodo)

        deleteTodo.addEventListener("click",event=>{
            if(confirm("Did You completed this ?")){
            const target = event.target as HTMLSpanElement
            target.parentElement?.remove();
            }
        })

        
        div.append(todoDiv)
        todoTextBox.value = ""
    }
}