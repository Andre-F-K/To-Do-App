const userInputForm = document.getElementById('userInputForm');
 let errorElement = document.getElementById('error')
 const listElement = document.querySelector('#tasks')

 userInputForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let x = []
    const dueDate = document.getElementById('dueDateInput').value
    const newTask = document.getElementById('newTaskInput').value
    if(newTask === '' || newTask == null || dueDate === '' ){
        console.log(newTask)
         x.push('Inputs cannot be empty')
         
    }

    if(x.length > 0){
        errorElement.innerText = x
        return
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskContentElem = document.createElement('div');
    taskContentElem.classList.add('content');

    taskElement.appendChild(taskContentElem);

    const taskInputEle = document.createElement('input');
    taskInputEle.classList.add('text');
    taskInputEle.type = 'text';
    taskInputEle.value = newTask;
    taskInputEle.setAttribute('readonly' , 'readonly')

    const taskDateEle = document.createElement('input')
    taskDateEle.classList.add('text')
    taskDateEle.type = 'date'
    taskDateEle.value = dueDate
    taskDateEle.setAttribute('readonly' , 'readonly')

    taskContentElem.appendChild(taskInputEle)
    taskContentElem.appendChild(taskDateEle)

    const taskActionsEle = document.createElement('div')
    taskActionsEle.classList.add('actions')


    const taskEditEle = document.createElement('button')
    taskEditEle.classList.add('edit')
    taskEditEle.innerHTML = 'Edit'

    const taskDelEle = document.createElement('button')
    taskDelEle.classList.add('delete')
    taskDelEle.innerHTML = 'Delete'

    taskActionsEle.appendChild(taskEditEle)
    taskActionsEle.appendChild(taskDelEle)

    taskElement.appendChild(taskActionsEle)

    listElement.appendChild(taskElement)


    taskEditEle.addEventListener('click', () => {
       if(taskEditEle.innerText === 'Edit'){
        taskDateEle.removeAttribute('readonly')
        taskInputEle.removeAttribute('readonly')
       taskInputEle.focus() 
       taskEditEle.innerText = 'Save'
       }else{
        taskDateEle.setAttribute('readonly', 'readonly')
        taskInputEle.setAttribute('readonly', 'readonly')
        taskEditEle.innerText = 'Edit'
       }
    })

    taskDelEle.addEventListener('click', () => {
     listElement.removeChild(taskElement)   
    })



    class TasksObj{
        constructor (task, dueDate){
            this.task = task
            this.dueDate = dueDate
        }
    }

    const myTask = new TasksObj(taskDateEle.value, taskInputEle.value)
     
    console.log(myTask)
    
   localStorage.setItem('Tasks', JSON.stringify(myTask))
})

