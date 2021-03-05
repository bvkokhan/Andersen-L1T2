let number1 = prompt('Введите первое число', 'Число 1'),
    pNumber1 = parseInt(number1, 10);
if (isNaN(pNumber1)) {
    console.log('Некорректный ввод!');
} else {
    let number2 = prompt('Введите второе число', 'Число 2'),
        pNumber2 = parseInt(number2, 10);
    if (isNaN(pNumber2)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(`Ответ: ${pNumber1+pNumber2}, ${pNumber1/pNumber2}`);
    }
}