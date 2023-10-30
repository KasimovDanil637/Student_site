import {getLessonsByDay} from "./data_base_schedule/groupHandler.js";

schedule()
function schedule(){
    selectGroups()
    lessons()
}


function selectGroups(){
    const select = document.getElementById('number-group')
    for (let i = 200; i < 210; i++){
        const option = document.createElement('option')
        option.value = "11-" + i
        option.textContent = "11-" + i
        select.append(option)
    }
}
function lessons() {
    const select = document.getElementById('number-group')
    const block = document.querySelectorAll('.item-block-schedule')
    select.value = null
    select.addEventListener('input', () => {
        block.forEach(item => item.innerHTML = "")
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                const schedule = document.createElement('div')
                schedule.classList.add('item-schedule')
                schedule.textContent = getLessonsByDay(select.value,i + 1)[j]
                block[i].append(schedule)
            }
        }
    })
}
