const taskBlock = document.querySelector('.main__task')
homeTasks()
function homeTasks(){
    addTask();
    loadTasks();
}
function addTask(){
    const addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', () => {
        let task = createTask()
        taskBlock.append(task)
    })
}
function createCompleteBtn(){
    const btn = document.createElement('button')
    const block = document.createElement('div')
    btn.classList.add('completed-btn-task')
    btn.classList.add('hoverGreen')
    block.textContent = "complete"
    block.style.color = '#444444'
    btn.append(block)
    return btn
}
function createDeleteBtn(){
    const btn = document.createElement('button')
    const block = document.createElement('div')
    btn.classList.add('delete-btn-task')
    btn.classList.add('hoverRed')
    block.textContent = "delete"
    block.style.color = '#444444'
    btn.append(block)
    return btn
}
function createHeader(){
    const header = document.createElement('input')
    header.classList.add('header-task')
    header.placeholder = "Введите заголовок"
    return header
}
function createDeadlineInput(){
    const deadLine = document.createElement('input')
    deadLine.classList.add('deadline-task')
    deadLine.placeholder = 'DD.MM.YYYY'
    return deadLine
}
function createTextInput(){
    const textBlock = document.createElement('div')
    const text = document.createElement('textarea')
    text.classList.add('text-area-task')
    textBlock.classList.add('text-block-task')
    text.placeholder = "Введите текст"
    textBlock.append(text)
    return textBlock
}
function createTask(){
    const task = document.createElement('div')
    const done = document.createElement('div')
    task.classList.add('block-task')
    task.append(createHeader())
    task.append(createDeadlineInput())
    task.append(createTextInput())
    done.append(createCompleteBtn(), createDeleteBtn())
    task.append(done)
    completeTask(task)
    deleteTask(task)
    checkDeadline(task)
    saveTasks();
    return task
}
function completeTask(element) {
    const btn = element.querySelector('.completed-btn-task');
    btn.addEventListener('click', () => {
        element.style.backgroundColor = '#59b4ff'
    });
}
function deleteTask(element) {
    const btn = element.querySelector('.delete-btn-task');
    btn.addEventListener('click', () => {
        element.remove()
    });
}
function checkDeadline(element) {
    const deadlineInput = element.querySelector('.deadline-task');
    const main = document.querySelector('main')
    main.addEventListener('mousemove', () => {
            let localDate = deadlineInput.value
            localDate = new Date(localDate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            const tomorrow = new Date();
            const toDay = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            if (localDate.getFullYear() === tomorrow.getFullYear() && localDate.getMonth() === tomorrow.getMonth() && localDate.getDate() === tomorrow.getDate()) {
                element.style.backgroundColor = '#ffdc77';
            } else if (localDate.getFullYear() >= toDay.getFullYear() && localDate.getMonth() <= toDay.getMonth() && localDate.getDate() <= toDay.getDate()) {
                element.style.backgroundColor = '#ff4545';
            } else {
                element.style.backgroundColor = '#9afb6e';
            }
        }
    )
    return element.style.backgroundColor
}

function saveTasks() {
    const saveBtn = document.getElementById('save-btn')
    saveBtn.addEventListener('click', () => {
        const tasks = Array.from(document.querySelectorAll('.block-task'));
        const savedTasks = tasks.map(task => {
            const header = task.querySelector('.header-task').value;
            const deadline = task.querySelector('.deadline-task').value;
            const text = task.querySelector('.text-area-task').value;
            const backgroundColor = checkDeadline(task);
            return {header, deadline, text, backgroundColor};
        });
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
    })
}
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const newTask = createTask();
            newTask.querySelector('.header-task').value = task.header;
            newTask.querySelector('.deadline-task').value = task.deadline;
            newTask.querySelector('.text-area-task').value = task.text;
            newTask.style.backgroundColor = task.backgroundColor
            taskBlock.append(newTask);
        });
    }
}






