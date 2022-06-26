<<<<<<< Updated upstream
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');
=======
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
>>>>>>> Stashed changes

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

       

<<<<<<< Updated upstream

		const todo = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})

	DisplayTodos()
})

function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
}

function formValidate(){
    let x = document.getElementById('content').value;
    if (x === ' ' || x === '') {
        alert('That would be too easy for you, fill in task name')
        
    }
}
=======
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
    
    

    
    
})

let taskDatabase = []

//adding onclick to button taking inputs and adding them to an object and then pushes them into array

newTaskSubmitButton.addEventListener('click', (e) => {
     let taskData = {
        task : document.getElementById('newTaskInput').value,
        dueDate : document.getElementById('dueDateInput').value
        
    }

    taskDatabase.push(taskData)
    
    console.log(taskDatabase)
    
})

let taskDatabaseJSON = JSON.push(taskDatabase)


>>>>>>> Stashed changes
