import {getLessonsByDay205} from "./groups/group205.js";

schedule()
function schedule(){
    selectGroups()
    lessons()
}


function selectGroups(){
    const select = document.getElementById('number-group')
    for (let i = 200; i < 212; i++){
        const option = document.createElement('option')
        option.value = "11-" + i
        option.textContent = "11-" + i
        select.append(option)
    }
}
function lessons() {
    const select = document.getElementById('number-group')
    const block = document.querySelectorAll('.item-block-schedule')
    select.addEventListener('input', () => {
        switch (select.value) {
            case '11-205':
                for (let i = 0; i < 7; i++) {
                    for (let j = 0; j < 7; j++) {
                        const schedule = document.createElement('div')
                        schedule.classList.add('item-schedule')
                        schedule.textContent = getLessonsByDay205(i + 1)[j]
                        block[i].append(schedule)
                    }
                }
        }
    })
}
