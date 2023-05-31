// Получение значения параметра id из URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

window.addEventListener("DOMContentLoaded", (event) => {
    // Переход в выбор заказов
    const actualOrd = document.getElementById('actual-orders-button');
    actualOrd.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/courier_choose/?id=${id}`;
        window.location.href = redirectUrl;
    });

    // Переход в архив заказов
    const newOrd = document.getElementById('orders-archive-button');
    newOrd.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/courier_archive/?id=${id}`;
        window.location.href = redirectUrl;
    });

    // Переход в личный кабинет
    const lk = document.getElementById('lk');
    lk.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/courier_my/?id=${id}`;
        window.location.href = redirectUrl;
    });
});