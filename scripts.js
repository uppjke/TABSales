function showPaymentForm(productName, amount) {
    const modal = document.getElementById('myModal');
    
    modal.querySelector('input[name="productName"]').value = productName;
    modal.querySelector('input[name="amount"]').value = amount;
    
    modal.style.display = 'block';
    
    // Закрыть модальное окно при клике на кнопку "закрыть"
    modal.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    }
    
    // Закрыть модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
