// const taskForm = document.getElementById("taskform");
// const button = document.querySelector("#taskform > button");

// var tasklist = document.querySelector("#tasklist > ul");
// var taskInput=document.getElementById("taskInput");

// var dueDateInput = document.getElementById("dueDateInput");
// var deadlineTimeInput = document.getElementById("duedateTimeInput");
// var estimatedTimeInput = document.getElementById("estimatedTimeInput");
// var priorityInput = document.getElementById("prioritySelect");


// // console.log(taskForm);
// // console.log(taskNameInput);

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let taskName= taskInput.value;
//     let dueDate = dueDateInput.value;
//     let time = deadlineTimeInput.value;
//     let estimationTime = estimatedTimeInput.value;
//     let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
//     if (task){
//         addTask(taskName, dueDate, time, estimationTime, priorityRating);
//     }
//     });
//   var taskListArray = [];
  
//   function addTask(description, tag, timeZone, dueDate, estimationTime, time, priorityRating, pin) {
//     let d = new Date();
//     let dateCreated = d.getFullYear();
//     let task = {
//       id: Date.now(),
//       description,
//       tag,
//       timeZone,
//       dateCreated,
//       dueDate,
//       estimationTime,
//       time,
//       priorityRating,
//       pin
//     };
  
//     taskListArray.push(task);
//     renderTask(task);
//     console.log(taskListArray);
//   }
  
//   function renderTask(task){
  
//       updateEmpty();
  
//       let item = document.createElement("li");
//       item.setAttribute('data-id', task.id);
//       item.innerHTML = "<p>" + task.description + "</p>";
  
//       tasklist.appendChild(item);
  
//       let delButton = document.createElement("button");
//       let delButtonText = document.createTextNode("Delete Task");
//       delButton.appendChild(delButtonText);
//       item.appendChild(delButton);
  
//       delButton.addElementListener("click", function(event){
//           event.preventDefault();
//           item.remove();
//       })
//       form.reset();
//   }
  //console.log(taskName);
  //addTask(taskName, "More details", "Type of the task", "BJT", "15/4", 3, false, false, true);