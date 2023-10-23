const schedule = [
    {
        monday:
            {
                one: "Иностранный язык: Марико М. в 1301, Булина Е.Н. в 1302, Кузьмина Н.Г. в 1303, Мухтарова Р.Й.в 1304, Мусина А.Ф. в 1305",
                two: " ",
                three: "Иностранный язык: Марико М. в 1301, Булина Е.Н. в 1302, Кузьмина Н.Г. в 1303, Мухтарова Р.Й.в 1304, Мусина А.Ф. в 1305",
                four: "  Элективные курсы по физической культуре и спорту  УНИКС   14:00 - 15:30",
                five: " ",
                six: " ",
                seven: " ",
                eight: " "
            }
    },
    {
        tuesday:
            {
                one: " ",
                two: " ",
                three: " ",
                four: " ",
                five: "\"Дисциплина по выбору: \n" +
                    "Введение в разработку мобильных приложений (Android). Фасхетдинов Р.Р. в 1412\n" +
                    "Введение в программирование на  С++(Интернет вещей). Чупин М.М.в 1309\n" +
                    "Введение в  веб-программирование Django. Атнагулов А. (онлайн) \n" +
                    "Введение в  веб-программирования (Fullstack Web Development), Кошарский И.Е.в 1508\n" +
                    "Введение в разработку приложений в Unity, Хафизов М.Р. в 1408\n" +
                    "Введение в программирование на  С++, Аббясов Б.Р. в 1310\n" +
                    "Введение в  веб-программирование (Fullstack-разработка приложений на Rails и React), Вафин Т.А.в 1304\n" +
                    "Введение в разработку мобильных приложений (IOS) Залялов И. (онлайн) \"\t\t\t\t\t\t\t\t\t ",
                six: "\"Дисциплина по выбору: \n" +
                    "Введение в  веб-программирования (Frontend). Валиуллин К.И.в 1509 \n" +
                    "Введение в разработку мобильных приложений (Android). Фасхетдинов Р.Р. в 1412\n" +
                    "Введение в программирование на  С++(Интернет вещей). Чупин М.М.в 1309\n" +
                    "Введение в  веб-программирование Django. Атнагулов А. (онлайн) \n" +
                    "Введение в  веб-программирования (Fullstack Web Development), Кошарский И.Е.в, 1508  \n" +
                    "Введение в разработку приложений в Unity, Хафизов М.Р.в 1408 \n" +
                    "Введение в программирование на  С++, Аббясов Б.Р. в 1310\n" +
                    "Введение в разработку корпор.приложений (Backend-разработка на Java). Яковлев А.А.в 1409\n" +
                    "Введение в  веб-программирование (Fullstack-разработка приложений на Rails и React), Вафин Т.А.в 1304\n" +
                    "Введение в разработку мобильных приложений (IOS) Залялов И. (онлайн) \"\t\t\t\t\t\t\t\t\t",
                eight: "\"Дисциплина по выбору: \n" +
                    "Введение в разработку корпор.приложений (Backend-разработка на Java). Яковлев А.А.в 1409\"\t\t\t\t\t\t\t\t\t "
            }
    },
];




export class Group205{
    getLessonsByDay(day) {
        switch (day.toLowerCase()) {
            case "monday":
                return schedule[0];
            case "tuesday":
                return schedule[1];
            case "wednesday":
                return schedule[2];
            case "thursday":
                return schedule[3];
            case "friday":
                return schedule[4];
            case "saturday":
                return schedule[5];
            case "sunday":
                return schedule[6];
            default:
                return [];
        }
    }

}
