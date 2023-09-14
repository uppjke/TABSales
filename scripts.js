function buy(productName) {
    const amount = productName === 'Табулатура 1' ? 100 : 150; // Здесь упрощенное условие, в реальности следует использовать другой метод определения цены

    const billId = "UNIQUE_BILL_ID_" + Date.now(); // Уникальный ID счета

    const paymentURL = `https://oplata.qiwi.com/create?publicKey=YOUR_PUBLIC_KEY&amount=${amount}&billId=${billId}&comment=${productName}`;

    // Открываем URL для оплаты
    window.open(paymentURL, '_blank');
}
