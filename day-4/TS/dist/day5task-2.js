"use strict";
const div = document.querySelector("#div");
const add = () => {
    const todoTextBox = document.getElementById("todo");
    const value = todoTextBox.value;
    if (value === "") {
        alert("TODO can not be empty. Please Enter valid todo");
    }
    else {
        const todoDiv = document.createElement("div");
        const todoText = document.createElement("p");
        const deleteTodo = document.createElement("span");
        todoText.innerText = value;
        deleteTodo.innerText = 'Complete';
        deleteTodo.style.border = "solid Brown";
        todoText.style.display = "inline";
        todoText.style.marginRight = "20px";
        deleteTodo.style.cursor = "pointer";
        todoDiv.append(todoText, deleteTodo);
        deleteTodo.addEventListener("click", event => {
            var _a;
            if (confirm("Did You completed this ?")) {
                const target = event.target;
                (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            }
        });
        div.append(todoDiv);
        todoTextBox.value = "";
    }
};
//# sourceMappingURL=day5task-2.js.map