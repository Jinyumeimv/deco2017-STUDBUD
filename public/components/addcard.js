// I use getElementById to select the DOM element, because it can accurately locate the element in the html through the id.
let subButton = document.getElementById("create");
let list = document.getElementById("taskform");
let addNew = document.getElementById("newTask");
let taskCards = document.getElementById("card");
let column = document.getElementById("box");
console.log("call");

renderItems();

// addEventListener for creating task card, when the button is clicked, the following equation will be triggered.
// So adding events listener can create more functionality, here I use it to create task cards on kanban board and save into the local storage.
subButton.addEventListener("click", function() {
console.log("call");
// Using getElementById to get the value of the DOM elements
  let itemName = document.getElementById("taskInput").value;
  let Detail = document.getElementById("detail").value;
  let estimatedTimeInput = document.getElementById("e_hour").value;
  let estimatedTimeInput_m = document.getElementById("e_min").value;
  let dueDateInput = document.getElementById("dueDateInput").value;
  let timezone = document.getElementById("timezone").value;
  let duetime = document.getElementById("due_time").value;
// I want to create a tag for each type of task, but I didn't make it.
  // let tag_lecture = document.getElementById("lecture").value;
  // let tag_meeting = document.getElementById("meeting").value;
  // let tag_reading = document.getElementById("reading").value;
  let taskType = document.getElementById("taskSelector").value;
  var priorityInput = document.getElementById("priorityInput").value;

  // if itemName is empty, the card will not appear. After clicking create button, the form will be hidden and no task card be added. 
  if(itemName == "") { 
    return;
  };

// Build the js object and add key and values. It can be used to create the key items into the task card, and the value will be saved in the local storage. 
  let itemObj = {
    'itemName': itemName,
    'Detail': Detail,
    'estimatedTimeInput': estimatedTimeInput,
    'estimatedTimeInput_m': estimatedTimeInput_m,
    'dueDateInput': dueDateInput,
    'timezone': timezone,
    'duetime':duetime,
    'priorityInput': priorityInput,
    'taskType':taskType
    // 'tag_lecture': tag_lecture,
    // 'tag_meeting': tag_meeting,
    // 'tag_reading': tag_reading
  };

  let existingItems = getItems();

  // push can make the item into the end of the Array, so I need to change the JS object to an Array.
  existingItems.push(itemObj);

// Use JSON.stringify to convers the JS object to an arrey which can be identified by local Storage.
  existingItems = JSON.stringify(existingItems);

// Save the key and value into the local Storage.
  localStorage.setItem('items', existingItems);

  renderItems();
});

function getItems() {

  let items = localStorage.getItem('items');

  if (items == null) {
    return [];
  }

  items = JSON.parse(items);

  return items;
}

function renderItems() {

  let items = getItems();


// Use document.querySelector to find the ul element into HTML. 
  let itemUl = document.querySelector('#taskCard ul');

  itemUl.innerHTML = ""; 

  items.forEach(function(item) {
// Create HTML elements and set the id attribute to set the CSS style for each element. 
    let itemLi = document.createElement('li');
    itemLi.setAttribute('draggable', 'true');
    itemLi.setAttribute('id', 'card');
// taskName
    let itemName = document.createElement('h1');
    itemName.setAttribute('id', 'itemname'); 
    itemName.innerText = item.itemName;
// details
    let Detail = document.createElement('p');
    Detail.setAttribute('id', 'details'); 
    Detail.innerText = item.Detail;
// estimate time hours
    let estimatedTimeInput = document.createElement('p');
    estimatedTimeInput.setAttribute('id', 'hours'); 
    estimatedTimeInput.innerText = item.estimatedTimeInput + "Hour(s)" + " ";
// estimate time min
    let estimatedTimeInput_m = document.createElement('p');
    estimatedTimeInput_m.setAttribute('id', 'mins'); 
    estimatedTimeInput_m.innerText = item.estimatedTimeInput_m + "Min(s)" + " ";
// duedate
    let dueDateInput = document.createElement('p');
    dueDateInput.setAttribute('id', 'deadline'); 
    dueDateInput.innerText = item.dueDateInput;
// timezone
    let timezone = document.createElement('p');
    timezone.setAttribute('id', 'timeZone'); 
    timezone.innerText = item.timezone;
// time
    let duetime = document.createElement('p');
    duetime.setAttribute('id', 'time'); 
    duetime.innerText = item.duetime;
// task type
    let taskType = document.createElement('p');
    taskType.setAttribute('id', 'types'); 
    taskType.innerText = item.taskType;
// // tag_lecture
//     let tag_lecture = document.createElement('p');
//     tag_lecture.setAttribute('id', 'lec'); 
//     tag_lecture.innerText = item.tag_lecture;
// // tag_meeting
//     let tag_meeting = document.createElement('p');
//     tag_meeting.setAttribute('id', 'meet'); 
//     tag_meeting.innerText = item.tag_meeting; 
// // tag_reading
//     let tag_reading = document.createElement('p');
//     tag_reading.setAttribute('id', 'lec'); 
//     tag_reading.innerText = item.tag_reading;
// priority
    let priorityInput = document.createElement('p');
    priorityInput.setAttribute('id', 'priority'); 
    priorityInput.innerText = "Priority" + ":" + " " + item.priorityInput;

    

    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = "Delate this card"; 
    
    itemRemove.addEventListener("click", function() {
      itemLi.remove();

      removeItem(item.itemName);
    });
// Add the elements to the li, it can arrange the information more neatly.
    itemLi.appendChild(itemName);
    itemLi.appendChild(Detail);
    itemLi.appendChild(estimatedTimeInput);
    itemLi.appendChild(estimatedTimeInput_m);
    itemLi.appendChild(dueDateInput);
    itemLi.appendChild(timezone);
    itemLi.appendChild(duetime);
    itemLi.appendChild(taskType);
    itemLi.appendChild(priorityInput);

    // itemLi.appendChild(tag_lecture);
    // itemLi.appendChild(tag_meeting);
    // itemLi.appendChild(tag_reading);

// Add delate button to the li by using appendChild.
    itemLi.appendChild(itemRemove);

    itemUl.appendChild(itemLi);
  });
}

function removeItem(itemName) {
  let items = getItems();

  let itemIndex = items.findIndex(function(item) {
    return item.itemName == itemName;
  });
 
  items.splice(itemIndex, 1);
  
  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}
// Add popup effect using addEventListener, the user clicks the "+" button and the create new task box will appear so that the user can add a new task.
// .toggle means it can shift the CSS style, so I use it to make the create a new task box visible and hidden.
addNew.addEventListener("click", function(){
    console.log("kala");
    list.classList.toggle("appear");
});
// User can add and save the card by click the create button, addEventListener function can add a new class for the list (#taskform).
subButton.addEventListener("click", function(){
    console.log("lala");
    list.classList.toggle("active");
});



// drop and drag function.
// I wanted to achieve it, but I'm not made it.
taskCards.forEach((element)=>{
  dragCard(element);
});

// column.forEach((columns)=>{
//   columns.addEventListener('dragover', (e)=>{
//     let dragging_card = document.querySelector('.dragging');
//     columns.appendChild(dragging_card);
//   });
// })

function dragCard(element){
  element.addEventListener('dragstart', ()=>{
    card.classList.add('dragging');
    console.log("call");
  });

  element.addEventListener('dragend', ()=>{
    card.classList.remove('dragging');
  });
}
