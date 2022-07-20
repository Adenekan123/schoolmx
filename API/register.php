<?php 

    require('../actions/mail_register.php');

    if(isset($_POST) && !empty($_POST) && isset($_POST['mailcontent'],$_POST['name'],$_POST['email'])){
        $mailContent = $_POST['mailcontent'];
        $email = $_POST['email'];
        $senderName = $_POST['name'];
        $subject = $_POST['subject'];

        $response = sendMail($email, $senderName, $subject, $mailContent,null,"info@majadtek.com",null);
        echo json_encode(['response'=>$response]);
        
    }else{
        echo json_encode(['response'=>0]);
    }