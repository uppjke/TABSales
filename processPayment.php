<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $productName = $_POST['productName'];
    $amount = $_POST['amount'];
    $email = $_POST['email'];

    // Здесь нужно будет добавлять код для обработки платежа через платежный шлюз

    $to = $email;
    $subject = "Подтверждение оплаты";
    $message = "Спасибо за покупку " . $productName . ". Файл с табулатурой будет отправлен вам на почту.";

    mail($to, $subject, $message);
}

?>
