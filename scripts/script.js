const userInputForm = document.getElementById('userInputForm');
 let errorElement = document.getElementById('error')
 const listElement = document.querySelector('#tasks')

 userInputForm.addEventListener('submit', (e) =>{
    //preventing form from refreshing
    e.preventDefault()
    
    //form validation (check if inputs are not empty)
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

    //creating task dive to add individual tasks to 
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    //creating content element to input all of the content for an individual task
    const taskContentElem = document.createElement('div');
    taskContentElem.classList.add('content');

    //appending the above content task to task element
    taskElement.appendChild(taskContentElem);

    //creating the task description element to contain the task that is received from 'newTask Form'
    const taskInputEle = document.createElement('input');
    taskInputEle.classList.add('text');
    taskInputEle.type = 'text';
    taskInputEle.value = newTask;
    taskInputEle.setAttribute('readonly' , 'readonly')

    //creating the due date element to contain the due date that is received from 'newTask Form'
    const taskDateEle = document.createElement('input')
    taskDateEle.classList.add('text')
    taskDateEle.type = 'date'
    taskDateEle.value = dueDate
    taskDateEle.setAttribute('readonly' , 'readonly')

    //appending the task and dueDate to content div 
    taskContentElem.appendChild(taskInputEle)
    taskContentElem.appendChild(taskDateEle)

    //creating actions 'edit' & 'delete' for task elements 
    const taskActionsEle = document.createElement('div')
    taskActionsEle.classList.add('actions')

    //making the buttons for the delete and edit 
    const taskEditEle = document.createElement('button')
    taskEditEle.classList.add('edit')
    taskEditEle.innerHTML = 'Edit'

    //making the buttons for the delete and edit 
    const taskDelEle = document.createElement('button')
    taskDelEle.classList.add('delete')
    taskDelEle.innerHTML = 'Delete'

    //appending the buttons to the actions element created above
    taskActionsEle.appendChild(taskEditEle)
    taskActionsEle.appendChild(taskDelEle)

    //appending actions element to task element  
    taskElement.appendChild(taskActionsEle)

    listElement.appendChild(taskElement)

    //adding the functionality to the 'edit' and 'delete' buttons 
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


    //convering user inputs to an object
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

