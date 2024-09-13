        // Массив правильних відповідей (зразковий)
        const correctAnswers = [
            "yes", // для питання 1
            "no",  // для питання 2
            // Додайте правильні відповіді для всіх 48 питань
            "yes"  // для питання 48
        ];

        // Функція для перевірки відповідей
        function checkAnswers() {
            let score = 0;
            const totalQuestions = correctAnswers.length;

            for (let i = 1; i <= totalQuestions; i++) {
                // Отримуємо вибрану відповідь для кожного питання
                const userAnswer = document.querySelector(`input[name="question${i}"]:checked`);

                // Перевіряємо чи є вибрана відповідь і чи вона правильна
                if (userAnswer && userAnswer.value === correctAnswers[i - 1]) {
                    score++; // Збільшуємо рахунок за правильну відповідь
                }
            }

            // Виводимо результат
            const result = document.getElementById("result");
            result.textContent = `Ви відповіли правильно на ${score} із ${totalQuestions} питань.`;
        }