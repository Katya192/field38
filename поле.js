const inputFields = document.querySelectorAll('.hover-effect');
    const labels = document.querySelectorAll('.input-label');

    inputFields.forEach((inputField, index) => {
        inputField.addEventListener('input', function() {
            if (this.value) {
                labels[index].classList.add('active');
            } else {
                labels[index].classList.remove('active');
            }
        });
    });
    document.getElementById('calculateButton').addEventListener('click', function() {
        const purity = parseFloat(document.getElementById('purity').value);
        const germination = parseFloat(document.getElementById('germination').value);

        if (germination < purity) {
            alert("Лабораторная всхожесть не может быть меньше чистоты семян.");
            return;
        }

        // Здесь добавьте логику для расчета нормы высева
    });