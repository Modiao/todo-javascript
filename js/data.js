const ul = document.getElementById("list");
const input = document.getElementById("item");


function addTodo(item) {
	const text = `<li class="item">
				<i class="co fa fa-circle-thin" job="complete"></i>
				<p class="text" style="margin-right: 11rem; margin-bottom: 5px">${item.name}</p>
				<i class="de fa fa-trash-o" job="delete" id="${item.id}"></i>
			</li>`;
	const position = "beforeend";
	ul.insertAdjacentHTML(position, text);
};


// let lists = [
// 	{
// 		name: "abdou",
// 		id:  0,
// 		done:  true,
// 		trash: false
// 	},
// 	{
// 		name: "fatou",
// 		id:  1,
// 		done:  true,
// 		trash: false
// 	},
// 	{
// 		name: "diop",
// 		id:  2,
// 		done:  true,
// 		trash: false
// 	}
// ];

let lists = []
document.addEventListener('keyup', function(event){
	if(event.key == "Enter"){
		let todo = {
			name: input.value,
			id:  lists.length,
			done:  false,
			trash: false
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
	
}

ul.addEventListener('click', function(event){
	let element = event.target;
	const elementJob = event.target.attributes.job.value;
	if(elementJob=='delete'){
		removeTodo(element);
		lists = lists.filter(item => item.id !== parseInt(element.id));
		console.log(lists);
	}else if (elementJob=='complete'){

	}
});



