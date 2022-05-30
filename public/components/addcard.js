let subButton = document.getElementById("create");
let list = document.getElementById("taskform");
let addNew = document.getElementById("newTask");

renderItems();

subButton.addEventListener("click", function() {
console.log("call");
  let itemName = document.getElementById("taskInput").value;
  let Detail = document.getElementById("detail").value;
  let estimatedTimeInput = document.getElementById("e_hour").value;
  let estimatedTimeInput_m = document.getElementById("e_min").value;
  let dueDateInput = document.getElementById("dueDateInput").value;
  let timezone = document.getElementById("timezone").value;
  let duetime = document.getElementById("due_time").value;
  let tag_lecture = document.getElementById("lecture").value;
  let tag_meeting = document.getElementById("meeting").value;
  let tag_reading = document.getElementById("reading").value;
  var priorityInput = document.getElementById("priorityInput").value;


  if(itemName == "") { document.getElementById("taskInput").classList.add("error");
    return;
  };

  let itemObj = {
    'itemName': itemName,
    'Detail': Detail,
    'estimatedTimeInput': estimatedTimeInput,
    'estimatedTimeInput_m': estimatedTimeInput_m,
    'dueDateInput': dueDateInput,
    'timezone': timezone,
    'duetime':duetime,
    'priorityInput': priorityInput,
    'tag_lecture': tag_lecture,
    'tag_meeting': tag_meeting,
    'tag_reading': tag_reading
  };

  let existingItems = getItems();

  existingItems.push(itemObj);

  existingItems = JSON.stringify(existingItems);

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

  let itemUl = document.querySelector('#taskCard ul');

  itemUl.innerHTML = ""; 

  items.forEach(function(item) {

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
    estimatedTimeInput.innerText = item.estimatedTimeInput;
// estimate time min
    let estimatedTimeInput_m = document.createElement('p');
    estimatedTimeInput_m.setAttribute('id', 'mins'); 
    estimatedTimeInput_m.innerText = item.estimatedTimeInput_m;
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
// tag_lecture
    let tag_lecture = document.createElement('p');
    tag_lecture.setAttribute('id', 'lec'); 
    tag_lecture.innerText = item.tag_lecture;
// tag_meeting
    let tag_meeting = document.createElement('p');
    tag_meeting.setAttribute('id', 'meet'); 
    tag_meeting.innerText = item.tag_meeting; 
// tag_reading
    let tag_reading = document.createElement('p');
    tag_reading.setAttribute('id', 'lec'); 
    tag_reading.innerText = item.tag_reading;
// priority
    let priorityInput = document.createElement('p');
    priorityInput.setAttribute('id', 'priority'); 
    priorityInput.innerText = item.priorityInput;

    

    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = "Delate this card"; 
    
    itemRemove.addEventListener("click", function() {
      itemLi.remove();

      removeItem(item.itemName);
    });

    itemLi.appendChild(itemName);
    itemLi.appendChild(Detail);
    itemLi.appendChild(estimatedTimeInput);
    itemLi.appendChild(estimatedTimeInput_m);
    itemLi.appendChild(dueDateInput);
    itemLi.appendChild(timezone);
    itemLi.appendChild(duetime);
    itemLi.appendChild(tag_lecture);
    itemLi.appendChild(tag_meeting);
    itemLi.appendChild(tag_reading);
    itemLi.appendChild(priorityInput);

    
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

addNew.addEventListener("click", function(){
    console.log("kala");
    list.classList.toggle("appear");
});

subButton.addEventListener("click", function(){
    console.log("lala");
    list.classList.toggle("active");
});