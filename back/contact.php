<?php
session_start();


require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 🔐 Autoriser les requêtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Accept");
header("Access-Control-Max-Age: 86400"); // Cache pré-vol pendant 24h

// 🔁 Répondre aux requêtes OPTIONS (pré-vol)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 🎯 Traitement uniquement des requêtes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    date_default_timezone_set('Etc/UTC');

    // Préparer la réponse par défaut
    $response = ['status' => false, 'message' => 'Une erreur est survenue.'];

    // Champs requis
    if (!isset($_POST['email'], $_POST['name'], $_POST['message'], $_POST['service'])) {
        $response['message'] = 'Veuillez remplir tous les champs obligatoires.';
        sendJsonResponse($response);
    }

    // 🧼 Sécurisation
    $email   = htmlspecialchars(trim($_POST['email']));
    $name    = htmlspecialchars(trim($_POST['name']));
    $message = nl2br(htmlspecialchars(trim($_POST['message'])));
    $service = htmlspecialchars(trim($_POST['service']));
    $phone   = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'Non précisé';

    $mail = new PHPMailer(true);

    try {
        // ✅ Configuration SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'microsftsolutionbelgique@gmail.com';
        $mail->Password   = 'forhwpavfmpllgwv '; // mot de passe d'application Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // 📬 Expéditeur et destinataire
        $mail->setFrom('microsftsolutionbelgique@gmail.com', 'Formulaire de contact');
        $mail->addAddress('microsftsolutionbelgique@gmail.com');

        // Répondre à l'expéditeur
        if (!$mail->addReplyTo($email, $name)) {
            $response['message'] = 'Adresse email invalide.';
            sendJsonResponse($response);
        }

        // Copie carbone
        $mail->addCC('gastondelimond@gmail.com', 'Service Client');
        $mail->addBCC('servicesoffice59@gmail.com', 'Service Client');

        // Sujet
        $mail->Subject = "Nouveau message de $name via le site";

        // HTML
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
            <p style="font-size:12px; color:#999; margin-top:20px;">
                Ce message a été généré automatiquement depuis votre site.
            </p>
        </div>
        HTML;

        $mail->send();

        $response = [
            'status' => true,
            'message' => 'Message envoyé avec succès ! Merci de nous avoir contactés.'
        ];
        sendJsonResponse($response);
    } catch (Exception $e) {
        $response['message'] = 'Erreur lors de l\'envoi : ' . $mail->ErrorInfo;
        sendJsonResponse($response);
    }
} else {
    // Requête autre que POST
    http_response_code(405); // Method Not Allowed
    echo "Ce point de terminaison accepte uniquement les requêtes POST.";
    exit();
}

// 🔁 Fonction pour envoyer une réponse JSON proprement
function sendJsonResponse($response) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($response);
    exit();
}
