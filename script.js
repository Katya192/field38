document.getElementById('crop').addEventListener('change', function() {
    const crop = this.value;
    const normFromInput = document.getElementById('normFrom');
    const normToInput = document.getElementById('normTo');

    // Установка значений норм высева в зависимости от выбранной культуры
    switch (crop) {
        case 'пшеница':
            normFromInput.value = 7; 
            normToInput.value = 7.5; 
            break;
        case 'ячмень':
            normFromInput.value = 6; 
            normToInput.value = 6.5; 
            break;
        case 'рожь':
            normFromInput.value = 6.5; 
            normToInput.value = 7; 
            break;
        case 'овёс':
            normFromInput.value = 6; 
            normToInput.value = 6.5; 
            break;
        case 'другое':
            normFromInput.value = ''; 
            normToInput.value = ''; 
            break; 
        default:
            normFromInput.value = '';
            normToInput.value = '';
            break;
    }
});

function calculate() {
    const crop = document.getElementById('crop').value; // Получаем выбранную культуру
    const seedWeight = parseFloat(document.getElementById('seedWeight').value) || 0;
    const purity = parseFloat(document.getElementById('purity').value) || 0;
    const germination = parseFloat(document.getElementById('germination').value) || 0;
    const fieldArea = parseFloat(document.getElementById('fieldArea').value) || 0;
    const normFrom = parseFloat(document.getElementById('normFrom').value) || 0;
    const normTo = parseFloat(document.getElementById('normTo').value) || 0;

    // Расчет посевной годности
    const seedQuality = (purity * germination) / 100;

    // Весовая норма высева с учетом посевной годности (кг)
    const weightNormFrom = Math.floor(((normFrom * seedWeight) / seedQuality) * 100);
    const weightNormTo = Math.floor(((normTo * seedWeight) / seedQuality) * 100);

    const hudNormFrom = (weightNormFrom / 100).toFixed(2);
    const hudNormTo = (weightNormTo / 100).toFixed(2);

    // Общая весовая норма высева на поле (кг)
    const totalWeightNormFrom = Math.round(weightNormFrom * fieldArea);
    const totalWeightNormTo = Math.round(weightNormTo * fieldArea);

    // Вывод результатов
    document.getElementById('results').innerText = 
        'Выбранная культура: ' + crop + '\n' + // Добавлено отображение выбранной культуры
        'Посевная годность: ' + seedQuality.toFixed(2) + ' %\n' +
        'Весовая норма высева с учетом посевной годности:\n' + 
        'в киллограмах - ' + weightNormFrom + ' кг/га - ' + weightNormTo + ' кг/га\n' + 
        'в центнерах - ' + hudNormFrom + ' ц/га - ' + hudNormTo + ' ц/га\n' +
        'Весовая норма высева на поле: ' + totalWeightNormFrom + ' кг - ' + totalWeightNormTo + ' кг';
}

document.getElementById('calculateButton').addEventListener('click', calculate);
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('seedWeight').value = '';
    document.getElementById('purity').value = '';
    document.getElementById('germination').value = '';
    document.getElementById('fieldArea').value = '';
    document.getElementById('normFrom').value = '';
    document.getElementById('normTo').value = '';
    document.getElementById('results').innerText = ''; // Используем innerText для очистки
});
