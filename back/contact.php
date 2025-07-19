<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Assurez-vous que PHPMailer est installé via Composer

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $service = htmlspecialchars(trim($_POST['service']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo "Adresse email invalide.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuration SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'votre.email@gmail.com'; // <-- Remplacez par votre email
        $mail->Password   = 'votre_mdp_app';         // <-- Mot de passe d'application
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // De / Vers
        $mail->setFrom('votre.email@gmail.com', 'Formulaire de Contact');
        $mail->addAddress('destinataire@example.com'); // <-- Votre adresse de réception

        // Contenu
        $mail->Subject = "Message de $name - Service: $service";
        $mail->Body    = "Nom: $name\nEmail: $email\nService: $service\nMessage:\n$message";

        $mail->send();
        echo "Message envoyé avec succès.";
    } catch (Exception $e) {
        echo "Erreur: {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode non autorisée.";
}
