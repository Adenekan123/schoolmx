<?php 

    require('../actions/mail_register.php');

    if(isset($_POST) && !empty($_POST) && isset($_POST['email'])){
        $email = $_POST['email'];
        $mailContent = "$email Subscribed for SchoolMX Newsletters";
        $senderName = 'Anonymous';
        $subject = 'NEWS LETTER SUBCRIPTION';

        $response = sendMail($email, $senderName, $subject, $mailContent,null,"info@majadtek.com",null);
        echo json_encode(['response'=>$response]);
        
    }else{
        echo json_encode(['response'=>0]);
    }