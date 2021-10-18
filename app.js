let button = document.getElementById('add');

const addTodo = (event) =>{

	let input = document.getElementById('input-text');
	let item = event.target.innerHTML;

	var li = document.createElement('li');
	let val = input.value
	li.innerHTML = val.trim();
	li.class = 'todo-item';

	var del = document.createElement('button');
	del.innerHTML = 'delete';
	del.class = 'delete';
	del.addEventListener('click', deleteItem);
	del.style.float = 'right';


	let todos = document.getElementById('todos');
	todos.appendChild(li);

	li.appendChild(del);
	input.value = '';

let todoItems = document.getElementsByTagName('li');
	for(i=0; i<todoItems.length; i++){
		todoItems[i].style.cursor = 'pointer';
	}

}


const deleteItem = () =>{
	let todoItems = document.getElementsByTagName('li');
	for(todoitems of todoItems){
		todoitems.addEventListener('click', function() {
			// body...
			this.style.display = 'none';
		})
	}
}

button.addEventListener('click', addTodo);
