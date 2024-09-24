      // Блокуємо події копіювання, вирізання та вставки
     document.addEventListener('copy', function(e) {
         e.preventDefault();
         alert('Копіювання заборонене!');
     }) 
     document.addEventListener('cut', function(e) {
         e.preventDefault();
         alert('Вирізання заборонене!');
     }) 
     // Блокуємо контекстне меню (правий клік миші)
     document.addEventListener('contextmenu', function(e) {
         e.preventDefault();
         alert('Контекстне меню заборонене!');
     });

     // Блокування клавіші F5 та сполучень Ctrl+R / Cmd+R
     document.addEventListener('keydown', function(e) {
         // Якщо натискається F5 (код 116)
         if (e.key === 'F5' || e.keyCode === 116) {
             e.preventDefault();
             alert('Оновлення сторінки заборонено!');
         }
         // Якщо натискається Ctrl+R (Cmd+R на Mac)
         if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
             e.preventDefault();
             alert('Оновлення сторінки заборонено!');
         }
     });

     // Функція для відображення наступного блоку
     function showNextBlock(currentBlockNumber, event) {
     // Запобігаємо стандартній поведінці кнопки (якщо це кнопка submit)
     event.preventDefault();
         // Приховуємо поточний блок
         var currentBlock = document.getElementById('Block' + currentBlockNumber);
         currentBlock.classList.remove('visible');
         currentBlock.classList.add('hidden');
     
         // Визначаємо наступний блок
         var nextBlockNumber = currentBlockNumber + 1;
         var nextBlock = document.getElementById('Block' + nextBlockNumber);
     
         // Якщо є наступний блок, показуємо його
         if (nextBlock) {
             nextBlock.classList.remove('hidden');
             nextBlock.classList.add('visible');
                             // Прокручуємо сторінку до верху
        window.scrollTo({
         top: 0,
         behavior: 'smooth' // Додає плавний перехід при прокрутці
     });
         }
     }

     // Функція для відображення попереднього блоку
     function showBackBlock(currentBlockNumber, event) {
        // Запобігаємо стандартній поведінці кнопки (якщо це кнопка submit)
        event.preventDefault();
            // Приховуємо поточний блок
            var currentBlock = document.getElementById('Block' + currentBlockNumber);
            currentBlock.classList.remove('visible');
            currentBlock.classList.add('hidden');
        
            // Визначаємо попередній блок
            var backBlockNumber = currentBlockNumber - 1;
            var backBlock = document.getElementById('Block' + backBlockNumber);
        
            // Якщо є попередній блок, показуємо його
            if (backBlock) {
                backBlock.classList.remove('hidden');
                backBlock.classList.add('visible');
            // Прокручуємо сторінку до верху
            window.scrollTo({
            top: 0,
            behavior: 'smooth' // Додає плавний перехід при прокрутці
        });
            }
        };

        // function checkAndHighlightRadios(radioIds, classToColor) {
        //     // Знаходимо всі елементи з заданим класом
        //     const elementsToColor = document.querySelectorAll(`.${classToColor}`);
          
        //     if (!elementsToColor.length) {
        //       console.error(`Елементи з класом ${classToColor} не знайдені`);
        //       return;
        //     }
          
        //     // Проходимо по масиву радіокнопок
        //     for (let i = 0; i < radioIds.length; i++) {
        //       const radioButton = document.getElementById(radioIds[i]);
          
        //       // Перевіряємо, чи існує радіокнопка і чи вона вибрана
        //       if (radioButton && radioButton.type === 'radio' && radioButton.checked) {
        //         // Якщо радіокнопка вибрана, закрашуємо всі елементи з класом
        //         elementsToColor.forEach(element => {
        //           element.style.backgroundColor = 'green';
        //         });
        //         console.log(`Елементи з класом ${classToColor} зафарбовані через вибрану радіокнопку з id ${radioIds[i]}`);
        //         return; // Завершуємо виконання після знаходження вибраної радіокнопки
        //       }
        //     }
          
        //     // Якщо жодна радіокнопка не вибрана, прибираємо колір з елементів
        //     elementsToColor.forEach(element => {
        //       element.style.backgroundColor = 'red';
        //     });
        //     console.log(`Жодна радіокнопка не вибрана, елементи з класом ${classToColor} повернуті до початкового стану.`);
        //   }
          
        //   // Приклад використання
        //   // Масив радіокнопок
        //   const radioIds = ['radio1', 'radio2', 'radio3'];
        //   // Клас елементів для закрашування
        //   const classToColor = 'cell_name';
          
        //   // Викликаємо функцію
        //   checkAndHighlightRadios(radioIds, classToColor);
        function checkAndHighlightRadiosByValue(tagName, value, classToColor) {
            // Знаходимо всі елементи з певним тегом і значенням value
            const radioButtons = document.querySelectorAll(`${tagName}[value="${value}"]`);
          
            // Якщо радіокнопок з таким значенням value немає, виводимо повідомлення і виходимо
            if (!radioButtons.length) {
              console.error(`Елементи з value ${value} не знайдені`);
              return;
            }
          
            // Проходимо по всіх знайдених радіокнопках
            for (let i = 0; i < radioButtons.length; i++) {
              const radioButton = radioButtons[i];
              console.log(radioButton)
          
              // Перевіряємо, чи радіокнопка вибрана
              if (radioButton.checked) {
                // Якщо радіокнопка вибрана, зафарбовуємо всі елементи з класом
                const elementsToColor = document.querySelectorAll(`.${classToColor}`);
                
                if (elementsToColor.length) {
                  elementsToColor.forEach(element => {
                    element.style.backgroundColor = 'green';
                  });
                  console.log(`Елементи з класом ${classToColor} зафарбовані через вибрану радіокнопку з value ${value}`);
                }
                return; // Закінчуємо функцію після закрашування
              }
            }
          
            // Якщо жодна радіокнопка з таким value не вибрана, скидаємо колір
            const elementsToReset = document.querySelectorAll(`.${classToColor}`);
            elementsToReset.forEach(element => {
              element.style.backgroundColor = 'red';
            });
            console.log(`Жодна радіокнопка з value ${value} не вибрана, елементи з класом ${classToColor} повернуті до початкового стану.`);
            }

            // document.querySelectorAll('input[type="radio"]').forEach(radio => {
            //     radio.addEventListener('change', () => {
            //       checkAndHighlightRadiosByValue(radio.value, 'cell_name');
            //     });
            //   });
        
        let btnfin = document.querySelector('.finish');
        console.log(btnfin);  

        btnfin.addEventListener('click', (e)=>{
            checkAndHighlightRadiosByValue('input', valueToCheck, classToColor);
        });

          // Приклад використання
          // Масив радіокнопок з певним значенням value
          const valueToCheck = 'yes';
          // Клас елементів для закрашування
          const classToColor = 'cell_name';
          
          // Викликаємо функцію для радіокнопок з value "option1"
          //checkAndHighlightRadiosByValue('input', valueToCheck, classToColor);
          