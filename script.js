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
          
        document.addEventListener("DOMContentLoaded", function() {
            // Отримуємо всі радіо-кнопки
            const radios = document.querySelectorAll('input[type="radio"]');
            console.log(radios)
        
            // Додаємо слухача подій на зміну значення для кожної радіо-кнопки
            radios.forEach(function(radio) {
                radio.addEventListener("change", function(event) {
                    // Отримуємо обрану радіо-кнопку
                    const selectedRadio = event.target;
        
         // Отримуємо ID пов'язаних клітинок з data-атрибуту радіо-кнопки
         const cellId = selectedRadio.getAttribute('data-cell-id');
        //  console.log(cellId)

         // Шукаємо всі клітинки з таким же data-cell-id
         const cells = document.querySelectorAll(`.cell_name[data-cell-id="${cellId}"], .underline[data-cell-id="${cellId}"]`);
         console.log(cells)
         
         
         // Якщо знайдені клітинки, змінюємо їхній колір
         if (cells.length > 0) {
             cells.forEach(function(cell) {
                 if (selectedRadio.value === "yes","no") {
                     cell.style.backgroundColor = "lightgreen";
                 };
             });
         } else {
             console.log("Клітинки з таким ID не знайдено");
         }
         });
    });
});

            // Якщо жодна радіокнопка з таким value не вибрана, скидаємо колір
            const elementsToReset = document.querySelectorAll(`.cell_name, .underline`);
            elementsToReset.forEach(element => {
              element.style.backgroundColor = 'lightcoral';
            });



