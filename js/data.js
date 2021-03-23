const ul = document.getElementById("list");
const input = document.getElementById("item");
const date = document.getElementById('date');
const clear = document.getElementById('clear');

current_date = new Date()
date.innerHTML = current_date.toGMTString().toString().substr(0,16);


function addTodo(item) {
	const text = `<li class="item">
				<i class="co fa fa-circle-thin" job="complete" id="check-${item.id}" style="color: blue; font-size: 1.5em"></i>
				<p class="text" style="margin-right: 11rem; margin-bottom: 5px">${item.name}</p>
				<i class="de fa fa-trash-o" job="delete" id="${item.id}" style="color: blue"></i>
			</li>`;
	const position = "beforeend";
	ul.insertAdjacentHTML(position, text);
};


let lists = []
document.addEventListener('keyup', function(event){
	if(event.key == "Enter"){
		let todo = {
			name: input.value,
			id:  lists.length,
			done:  true,
			trash: true
		}
		if(input.value){
			lists.push(todo);
			addTodo(todo);
		}
		input.value = "";
	}
});


for(let item of lists){
	addTodo(item);
};

const deleted = document.querySelectorAll('i[job="delete"]');

function removeTodo(element){
	element.parentNode.parentNode.removeChild(element.parentNode)
}

function updateTodo(element){
	const index = parseInt(element.id.split('-')[1]);
	let nextSibling = element.nextElementSibling;
	console.log(nextSibling);
	if(element.classList.contains('fa-circle-thin')){
		element.classList.remove('fa-circle-thin');
		element.classList.add('fa-check-circle');
		nextSibling.classList.add('line-through-todo');
	} else if(element.classList.contains('fa-check-circle')){
		element.classList.remove('fa-check-circle');
		nextSibling.classList.remove('line-through-todo');
		element.classList.add('fa-circle-thin');
	}
	lists[index].done = lists[index].done ? false : true;

}

ul.addEventListener('click', function(event){
	let element = event.target;
	const elementJob = event.target.attributes.job.value;
	if(elementJob=='delete'){
		removeTodo(element);
		lists = lists.filter(item => item.id !== parseInt(element.id));
		console.log(lists);
	}else if (elementJob=='complete'){
		updateTodo(element)
	}
	
});

clear.addEventListener('click', function(event){
	window.location.reload();
});



