<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Autoriser les requêtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    date_default_timezone_set('Etc/UTC');

    $isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
              strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

    $response = ['status' => false, 'message' => 'Une erreur est survenue.'];

    // Vérification des champs requis
    if (!isset($_POST['email'], $_POST['name'], $_POST['message'], $_POST['service'])) {
        $response['message'] = 'Veuillez remplir tous les champs obligatoires.';
        sendResponse($isAjax, $response);
    }

    $email    = htmlspecialchars($_POST['email']);
    $name     = htmlspecialchars($_POST['name']);
    $message  = nl2br(htmlspecialchars($_POST['message']));
    $service  = htmlspecialchars($_POST['service']);
    $phone    = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : 'Non précisé';

    $mail = new PHPMailer(true);

    try {
        // ✅ CONFIGURATION SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mamba.salama.s@gmail.com'; // 💡 Remplace par ton adresse Gmail
        $mail->Password   = 'xvpbgztsusrqseuf'; // 💡 Mot de passe d'application Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Expéditeur et destinataires
        $mail->setFrom('mamba.salama.s@gmail.com', 'Formulaire de contact');
        $mail->addAddress('mamba.salama.s@gmail.com');

        // Répondre à l'expéditeur
        if (!$mail->addReplyTo($email, $name)) {
            $response['message'] = 'Adresse email invalide.';
            sendResponse($isAjax, $response);
        }

        // ✉️ En copie (facultatif)
        $mail->addCC('gastondelimond@gmail.com', 'Service Client');
        $mail->addBCC('servicesoffice59@gmail.com', 'Service Client');

        // Sujet
        $mail->Subject = "Nouveau message de $name via le site";

        // 💡 Format HTML
        $mail->isHTML(true);

        $mail->Body = <<<HTML
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #0066cc;">Nouveau message depuis le formulaire de contact</h2>
            <p><strong>Nom :</strong> {$name}</p>
            <p><strong>Email :</strong> {$email}</p>
            <p><strong>Téléphone :</strong> {$phone}</p>
            <p><strong>Service demandé :</strong> {$service}</p>
            <hr>
            <p style="margin-top:10px;"><strong>Message :</strong></p>
            <div style="background:#f9f9f9; padding:10px; border:1px solid #ddd;">
                {$message}
            </div>
            <p style="font-size:12px; color:#999; margin-top:20px;">Ce message a été généré automatiquement depuis votre site.</p>
        </div>
        HTML;

        // ✅ Envoi
        $mail->send();

        $response = [
            'status' => true,
            'message' => 'Message envoyé avec succès ! Merci de nous avoir contactés.'
        ];
    } catch (Exception $e) {
        $response['message'] = 'Erreur lors de l\'envoi : ' . $mail->ErrorInfo;
    }

    sendResponse($isAjax, $response);
}

// 🔁 Fonction pour répondre proprement
function sendResponse($isAjax, $response) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($response);
    exit();
}
