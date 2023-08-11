let deadline = '2023.07.26 00:00:00' // входные данные дедлайна

        const days = document.querySelector("#days");
        const hours = document.querySelector("#hours");
        const minutes = document.querySelector("#minutes");

        // Устанавливаем дату и время, до которого хотим посчитать разницу
        let countDownDate = new Date(deadline).getTime();

        let updateTimer = setInterval(function () {
            // Получаем текущее дату и время
            let now = new Date().getTime();
            // Находим разницу между текущим временем и заданным
            let difference = countDownDate - now;

            // Рассчитываем дни, часы, минуты и секунды
            let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hoursDif = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

            // Вставляем значения в таймер
            days.innerHTML = daysDif;
            hours.innerHTML = hoursDif;
            minutes.innerHTML = minutesDif;
            seconds.innerHTML = secondsDif;

            // Когда таймер дойдет до заданной даты и времени
            if (difference < 0) {
                clearInterval(updateTimer);
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
            }
            // Обновляем функцию с интервалом 1 секунда
        }, 1000);
