(function () {

    const addButton = document.getElementById('add-button');

    const todoList = document.querySelector('ul#incomplete-tasks');

    const createElem = elem => document.createElement(elem);

    const appendChildElem = parent => child => parent.appendChild(child);

    const addText = (text,elem) => { elem.textContent = text; };

    const isNotEmpty = x =>  x !== "" ;

    const addNewItem = () => {

        const TextValue = document.getElementsByClassName('add-item-input')[0].value;

        if(isNotEmpty(TextValue)) {
            console.log(TextValue);
            const li = createElem('li');
            addText(TextValue,li);
            appendChildElem(todoList)(li)
        }
    }

    addButton.addEventListener('click', addNewItem);








})();
