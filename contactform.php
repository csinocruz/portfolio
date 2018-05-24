<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = "Contact Submission Form";
        $emailFrom = $_POST['email'];
        $message = $_POST['message'];

        $emailTo = "csinocruz@gmail.com";
        $headers = "From: " . $emailFrom;
        $txt = "You have received an email from " . $name . ".\n\n" . $message;


        mail($emailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");

    }

?>