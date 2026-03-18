 function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      // Toggle complete
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }