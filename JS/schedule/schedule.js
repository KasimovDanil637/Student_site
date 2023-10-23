// import {Group205} from "/JS/schedule-index/groups/group205";
schedule()
function schedule(){
    selectGroups()
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
// function lessons(){
//     const select = document.getElementById('number-group')
//     select.addEventListener('change', () => {
//         const lessons = new Group205()
//         lessons.getLessonsByDay('monday')
//     })
// }
