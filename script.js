function add(){
    const todoInput = document.getElementById('todo-input')
    const todoList = document.getElementById('todo-list')

    var todoText = document.createElement('li')
    todoText.textContent = todoInput.value

    todoList.appendChild(todoText)

    var deleteBtn = document.createElement('span')
    todoText.appendChild(deleteBtn)
    deleteBtn.textContent = 'Delete'


    todoText.addEventListener('click', function() {
        markCompleted(this); // Pozivamo funkciju markCompleted i proslijeđujemo trenutni <li> element
    });


    deleteBtn.onclick = function(){
        todoList.removeChild(todoText)
    }

    todoInput.value = ''
    


}



function markCompleted(task){
    task.classList.toggle('completed')
}