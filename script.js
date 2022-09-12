var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

//Creating new list items
function createListElement() {
	var li = document.createElement("li");
	var btn1 = document.createElement("button");
	var btn2 = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));

	//Creates buttons
	btn1.innerHTML = "Done";
	btn2.innerHTML = "Delete";

	li.appendChild(btn1);
	li.appendChild(btn2);

	//delete list item

	btn2.addEventListener("click", function (event) {
		li.parentNode.removeChild(li);
	});

	//Toggle list item as done
	btn1.addEventListener("click", function (event) {
		li.classList.toggle("done")
	});

	ul.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Append current list of items to have done and delete options
Array.from(items).forEach(function (item) {

	var btn1 = document.createElement("button");
	var btn2 = document.createElement("button");

	//Creates buttons
	btn1.innerHTML = "Done";
	btn2.innerHTML = "Delete";

	item.appendChild(btn1);
	item.appendChild(btn2);



	//Toggle list item as done
	btn1.addEventListener("click", function (event) {
		item.classList.toggle("done")
	});

	//delete list item

	btn2.addEventListener("click", function (event) {
		item.parentNode.removeChild(item);
	});
});


//Delete and Toggle separated into their own functions 
// function deleteTask(event) {
// 	li.parentNode.removeChild(li);
// }

// function toggleDone() {
// 	li.classList.toggle("done")
// }



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);