(function () {

    const addButton = document.getElementById('add-button');
    const todoList = document.querySelector('ul#incomplete-tasks');
    const completedList = document.querySelector('ul#completed-tasks');
    const createElem = elem => document.createElement(elem);
    const appendChildElem = (parent, child) => { parent.appendChild(child) };
    const addText = (text,elem) => { elem.textContent = text; };
    const isNotEmpty = x =>  x !== "" ;

    const createNewItem = (textValue) => {
            const li = createElem('li');
            const checkBox = createElem('input');
            const label = document.createElement("label");
            const editInput = createElem('input');
            const editButton = createElem('button');
            const deleteButton = createElem('button');

            checkBox.type = "checkBox";
            editInput.type = "text";
            editButton.innerText = "Edit";
            editButton.className = "edit";
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            label.innerText = textValue;

            appendChildElem(li,checkBox);
            appendChildElem(li,label);
            appendChildElem(li,editInput);
            appendChildElem(li,editButton);
            appendChildElem(li,deleteButton);

            return li;
    };

    const editTask = function() {

        const listItem = this.parentNode;
        const editInput = listItem.querySelector("input[type=text]");
        const label = listItem.querySelector("label");
        const containsClass = listItem.classList.contains("editMode");

        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }
        listItem.classList.toggle("editMode");
    };

    const deleteTask = function () {
        const li = this.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    };

    const taskCompleted = function() {
        console.log('here1')
        const li = this.parentNode;
        completedList.appendChild(li);
        attachTasks(li, taskIncomplete);
    };

    const taskIncomplete = function() {
        console.log('here')
        const li = this.parentNode;
        todoList.appendChild(li);
        attachTasks(li, taskCompleted);
    };


    const attachTasks = (listItem, checkBoxEventhandler) => {

        const editButton = listItem.querySelector("button.edit");
        const deleteButton = listItem.querySelector("button.delete");
        const checkBox = listItem.querySelector('input[type="checkbox"]');

        // onclick event for edit, delete and check boxes
        editButton.onclick = editTask.bind(editButton);
        deleteButton.onclick = deleteTask;
        checkBox.onchange = checkBoxEventhandler;

    };

    addButton.addEventListener('click', () => {
        let textInput = document.getElementsByClassName('add-item-input')[0];
        let textValue = textInput.value;
        if(isNotEmpty(textValue)) {
            const li = createNewItem(textValue);
            appendChildElem(todoList,li);
            attachTasks(li,taskCompleted);
            textInput.value = "";
        }
    });


    for (var i = 0; i < todoList.children.length; i ++) {
        attachTasks(todoList.children[i], taskCompleted);
    }

    for (var i = 0; i < completedList.children.length; i ++) {
        attachTasks(completedList.children[i], taskIncomplete);
    }



})();
