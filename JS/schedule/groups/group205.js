const schedule = [
    {
        day1:
            {
                lesson1: "Иностранный язык: Марико М. в 1301, Булина Е.Н. в 1302, Кузьмина Н.Г. в 1303, Мухтарова Р.Й.в 1304, Мусина А.Ф. в 1305",
                lesson2: " ",
                lesson3: "Иностранный язык: Марико М. в 1301, Булина Е.Н. в 1302, Кузьмина Н.Г. в 1303, Мухтарова Р.Й.в 1304, Мусина А.Ф. в 1305",
                lesson4: "  Элективные курсы по физической культуре и спорту  УНИКС   14:00 - 15:30",
                lesson5: " ",
                lesson6: " ",
                lesson7: " ",
            }
    },
    {
        day2:
            {
                lesson1: " ",
                lesson2: " ",
                lesson3: " ",
                lesson4: " ",
                lesson5: "Дисциплина по выбору: \n" +
                    "Введение в  веб-программирования (Fullstack Web Development), Кошарский И.Е.в 1508\n",
                lesson6: "Дисциплина по выбору: \n" +
                    "Введение в  веб-программирования (Fullstack Web Development), Кошарский И.Е.в 1508\n",
                lesson7: " "
            }
    },
    {
        day3:
            {
                lesson1:"Основы правоведения и противодействия коррупции (2-10нед.) списки студентов," +
                    "Экономическая культура (11-18нед.)",
                lesson2:"Основы правоведения и противодействия коррупции (2-10нед.) списки студентов," +
                    "Экономическая культура (11-18нед.)",
                lesson3:"Теория вероятностей и мат.статистика," +
                    "Мухамеджанова С.А. в 1311",
                lesson4:"",
                lesson5:"Базы данных. Якупов А.Ш. онлайн",
                lesson6: " ",
                lesson7: " ",
            }
    },
    {
        day4:
            {
                lesson1: "Базы данных," + "\n"+ "Еникеев К.Ш. в 1405",
                lesson2: "Иностранный язык в проф.сфере: Марико М. в 1301, Булина Е.Н. в 1302, Кузьмина Г.Н. в 1303," + "\n" +
                "Мухтарова Р.Й. в 1304, Мусина А.Ф. в 1305"	,
                lesson3: " ",
                lesson4: " Элективные курсы по физической культуре и спорту  УНИКС   14:00 - 15:30",
                lesson5: " ",
                lesson6: " ",
                lesson7: " ",
            }
    },
    {
        day5:
            {
                lesson1: "Основы разработки информационных систем  Java, Еникеев К.Ш." + "\n" + "в 1412 ",
                lesson2: "Основы разработки информационных систем  Java. лек.  со 2 по 10 недели Ференец А.А. 109",
                lesson3: " ",
                lesson4: " ",
                lesson5: " ",
                lesson6: " ",
                lesson7: " ",
            }
    },
    {
        day6:
            {
                lesson1: "Теория вероятностей и математическая статистика, Григорьева И.С. 108 ауд.                           ",
                lesson2: "Основы разработки информационных систем  Java, Еникеев К.Ш." + "\n" + "в 1412 ",
                lesson3: " ",
                lesson4: " ",
                lesson5: " ",
                lesson6: " ",
                lesson7: " ",
            }
    }
];




export function getLessonsByDay205(day) {
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
