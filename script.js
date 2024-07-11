let input = document.getElementById('todo-input')
let btn = document.getElementById('todo-button')
let todoList = document.getElementById('todo-list')

btn.addEventListener('click', function(){
    if(input.value !== ''){
        let todoInput = input.value
        let li = document.createElement('li')
        todoList.appendChild(li)
        li.innerText = todoInput

        let span = document.createElement('span')
        li.appendChild(span)
        span.innerText = 'Delete'
        span.className = 'delete'
        input.value = ''

        span.addEventListener('click',function(){
            li.remove()
        })
        
        li.addEventListener('click', function(){
            if(li.style.textDecoration === 'line-through'){
                li.style.textDecoration = 'none'
            }else{
                li.style.textDecoration = 'line-through'
            }
            
        })
    }
   
})

