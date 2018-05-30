<link rel="stylesheet" href="style.css">
<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');

// --- SERVER SETTINGS --- 
$mail = new PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

// --- RECIPIENTS --- 
$mail->smtpConnect($options);
$mail->From = $_POST['email'];  // sender's email address (shows in "From" field)
$mail->FromName = $_POST['name'];   // sender's name (shows in "From" field)
$mail->addAddress('codebloodedkilla@gmail.com', 'Francesca Sinocruz');  // Add a recipient
//$mail->addAddress('Name');                        // Name is optional
$mail->addReplyTo($_POST['email']);                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

// --- CONTENT --- 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $_POST['subject'];
$title = '<h2>Contact Form Submission</h2>';
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$mail->Body = $title . 'Subject: ' . $subject . '<br>From: ' . $name . '<br>Message: <br><br>' . $message;
                
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                // htmlentities()$_POST['body'];
// $output = [];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    // echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo '<span class=\"name\">Message has been sent</span>';
}
?>
