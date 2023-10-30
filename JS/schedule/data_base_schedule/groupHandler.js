import {schedule200} from "./groups/group200.js";
import {schedule201} from "./groups/group201.js";
import {schedule202} from "./groups/group202.js";
import {schedule203} from "./groups/group203.js";
import {schedule204} from "./groups/group204.js";
import {schedule205} from "./groups/group205.js";
import {schedule206} from "./groups/group206.js";
import {schedule207} from "./groups/group207.js";
import {schedule208} from "./groups/group208.js";
import {schedule209} from "./groups/group209.js";
function getSchedule(group){
    switch (group) {
        case "11-200":
            return schedule200
        case "11-201":
            return schedule201
        case "11-202":
            return schedule202
        case "11-203":
            return schedule203
        case "11-204":
            return schedule204
        case "11-205":
            return schedule205
        case "11-206":
            return schedule206
        case "11-207":
            return schedule207
        case "11-208":
            return schedule208
        case "11-209":
            return schedule209
    }
}
export function getLessonsByDay(group, day) {
        let schedule = getSchedule(group)
        switch (day) {
            case 1:
                return [schedule[0].day1.lesson1, schedule[0].day1.lesson2, schedule[0].day1.lesson3,
                    schedule[0].day1.lesson4, schedule[0].day1.lesson5, schedule[0].day1.lesson6, schedule[0].day1.lesson7]
            case 2:
                return [schedule[1].day2.lesson1, schedule[1].day2.lesson2, schedule[1].day2.lesson3,
                    schedule[1].day2.lesson4, schedule[1].day2.lesson5, schedule[1].day2.lesson6, schedule[1].day2.lesson7]
            case 3:
                return [schedule[2].day3.lesson1, schedule[2].day3.lesson2, schedule[2].day3.lesson3,
                    schedule[2].day3.lesson4, schedule[2].day3.lesson5, schedule[2].day3.lesson6, schedule[2].day3.lesson7]
            case 4:
                return [schedule[3].day4.lesson1, schedule[3].day4.lesson2, schedule[3].day4.lesson3,
                    schedule[3].day4.lesson4, schedule[3].day4.lesson5, schedule[3].day4.lesson6, schedule[3].day4.lesson7]
            case 5:
                return [schedule[4].day5.lesson1, schedule[4].day5.lesson2, schedule[4].day5.lesson3,
                    schedule[4].day5.lesson4, schedule[4].day5.lesson5, schedule[4].day5.lesson6, schedule[4].day5.lesson7]
            case 6:
                return [schedule[5].day6.lesson1, schedule[5].day6.lesson2, schedule[5].day6.lesson3,
                schedule[5].day6.lesson4, schedule[5].day6.lesson5, schedule[5].day6.lesson6, schedule[5].day6.lesson7]
            default:
                return [];
        }

}
