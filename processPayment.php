<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $billId = $_POST['billId'];
    $email = $_POST['email'];

    // Проверьте статус оплаты с помощью API QIWI

    // Если оплата прошла успешно, отправьте почту
    $to = $email;
    $subject = "Подтверждение оплаты";
    $message = "Спасибо за покупку табулатуры. Ваш счет: " . $billId;

    mail($to, $subject, $message);
}

?>
