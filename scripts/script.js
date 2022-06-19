const userInputForm = document.getElementById('userInputForm');
 let errorElement = document.getElementById('error')
 const listElement = document.querySelector('#tasks')

 userInputForm.addEventListener('submit', (e) =>{
    let x = []
    const dueDate = document.getElementById('dueDateInput').value
    const newTask = document.getElementById('newTaskInput').value
    if(newTask === '' || newTask == null || dueDate === '' ){
        console.log(newTask)
         x.push('Inputs cannot be empty')
         
    }

    if(x.length > 0){
        e.preventDefault()
        errorElement.innerText = x
        return
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task')

    const taskContentElem = document.createElement('div')
    taskContentElem.classList.add('content')
    taskContentElem.innerText = newTask

    taskElement.appendChild(taskContentElem)
    listElement.appendChild(taskElement)


})




