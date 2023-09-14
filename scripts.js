function showPaymentForm(productName, amount) {
    const form = document.getElementById('paymentForm');
    
    form.querySelector('input[name="productName"]').value = productName;
    form.querySelector('input[name="amount"]').value = amount;
    
    form.style.display = 'block';
}
