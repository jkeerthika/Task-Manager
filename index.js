// Add Task Button

let AddTask = document.getElementById("task");
let Input = document.getElementById("input");
let count = 0;
let completed = 0;
let pending = 0;
let edittask = null;

AddTask.addEventListener("click", function () {

   if (edittask !== null) {
      let duplicatecheck = document.querySelectorAll(".tasktext");
      let duplicate = false;

      for (let i = 0; i < duplicatecheck.length; i++) {
         if (duplicatecheck[i] !== edittask &&
            Input.value.trim().toLowerCase() === duplicatecheck[i].textContent.trim().toLowerCase()) {
            duplicate = true;
            alert("Duplicate Value should not pass");
            break;
         }
      }

      if (duplicate == false) {
         edittask.textContent = Input.value;
         edittask = null;
         AddTask.textContent = "Add Task";
         Input.value = "";
         return;
      }
   }
   else {
      if (Input.value.trim() !== "") {

         let duplicatecheck = document.querySelectorAll(".tasktext");
         let duplicate = false;

         for (let i = 0; i < duplicatecheck.length; i++) {
            if (Input.value.trim().toLowerCase() === duplicatecheck[i].textContent.trim().toLowerCase()) {
               duplicate = true;
               alert("Duplicate Value should not pass");
               break;
            }
         }
         if (duplicate == false) {
            let taskitem = document.createElement("div");
            taskitem.classList.add("taskitem");

            let task = document.createElement("div");
            task.classList.add("inserttask");

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("taskCheck");

            let value = document.createElement("p");
            value.textContent = Input.value;
            value.classList.add("tasktext");

            let btntask = document.createElement("div");
            btntask.classList.add("altertask");

            let Ebtn = document.createElement("button");
            Ebtn.textContent = "Edit";
            Ebtn.id = "editbtn";

            let Dbtn = document.createElement("button");
            Dbtn.textContent = "Delete";
            Dbtn.id = "deletebtn";

            let add = document.querySelector(".listbox");
            let removeelement = document.querySelector(".empty");
            if (removeelement) {
               removeelement.remove();
            }

            task.append(checkbox, value);
            btntask.append(Ebtn, Dbtn);
            taskitem.append(task, btntask);
            add.append(taskitem);

            // Delete Button

            Dbtn.addEventListener("click", function () {
               taskitem.remove();
               count--;
               pending--;

               let totalTask = document.querySelector(".countTask");
               totalTask.innerHTML = count;

               let pend = document.querySelector(".countpending");
               pend.innerHTML = pending;

               // No task here
               let remainingtask = document.querySelectorAll(".taskitem");
               if (remainingtask.length === 0) {
                  let empty = document.createElement("p");
                  empty.classList.add("empty");
                  empty.textContent = "No tasks here.";
                  document.querySelector(".listbox").appendChild(empty);
               }
            })

            // Task Done --> checkbox method

            checkbox.addEventListener("change", function () {
               if (checkbox.checked) {
                  value.style.textDecoration = "line-through";
                  value.style.color = "gray";
                  completed++;
                  pending--;
               }
               else {
                  value.style.textDecoration = "none";
                  value.style.color = "black";
                  completed--;
                  pending++;
               }
               //Completed count
               let complete = document.querySelector(".countcompleted");
               complete.innerHTML = completed;

               let pend = document.querySelector(".countpending");
               pend.innerHTML = pending;


            })

            // Edit button
            Ebtn.addEventListener("click", function () {
               Input.value = value.textContent;
               edittask = value;
               AddTask.textContent = "Update Task";
            });

            // Total Count
            let totalTask = document.querySelector(".countTask");
            count++;
            totalTask.innerHTML = count;

            let pend = document.querySelector(".countpending");
            pending++;
            pend.innerHTML = pending;
         }
         Input.value = "";
      }
   }
});


// clear completed

let ClearBtn = document.getElementById("clear");
ClearBtn.addEventListener("click", function () {
   let Check = document.querySelectorAll(".taskCheck");
   let CheckedCount = 0;
   for (let i = 0; i < Check.length; i++) {
      if (Check[i].checked) {
         document.querySelector(".taskitem").remove();
         CheckedCount++;
      }
   }
   if (CheckedCount == 0) {
      alert("Nothing is completed");
   }
   // No task here
   let remainingtask = document.querySelectorAll(".taskitem");
   if (remainingtask.length === 0) {
      let empty = document.createElement("p");
      empty.classList.add("empty");
      empty.textContent = "No tasks here.";
      document.querySelector(".listbox").appendChild(empty);
   }
});

// Pending button

let PBtn = document.getElementById("Pending");
PBtn.addEventListener("click", function () {
   let Check = document.querySelectorAll(".taskCheck");
   for (let i = 0; i < Check.length; i++) {
       let task = Check[i].closest(".taskitem");
      if (!Check[i].checked) {
         
          task.style.display = "flex";
      }
      else{
         task.style.display = "none";
      }
   }
});

// Completed button

let compBtn = document.getElementById("completed");
compBtn.addEventListener("click",function(){
   let Check = document.querySelectorAll(".taskCheck");
   for (let i = 0; i < Check.length; i++) {
      let task = Check[i].closest(".taskitem");
      if(Check[i].checked){
         task.style.display = "flex";
      }
      else{
         task.style.display = "none";
      }
   }
});

// All button

let Abtn = document.getElementById("all");
Abtn.addEventListener("click",function(){
   let task = document.querySelectorAll(".taskitem");
   for(let i = 0 ; i < task.length ; i++){
      task[i].style.display = "flex";
   }
});