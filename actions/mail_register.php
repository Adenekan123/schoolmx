<?php 
   
    
    
    
    function sendMail($mailTo, $userFirstname, $subject, $mailContent, $replyTo = null, $copyMail = null, $copyBMail = null){
          
          try {                
            
            $dataObject = array("smtpname" =>"SCHOOLMX", "recipient" =>$mailTo, "subject" => $subject, "body" =>$mailContent);
        
            if(isset($_GET['debug'])) {
                echo "<br>============================<br>";
                print_r($dataObject);
                echo "<br>============================<br>";
            }
            
            $mailAPIUrl = 'https://majadtek.com/connect/api/mail/send/?send=1';
            if(isset($_REQUEST['debug'])) $mailAPIUrl .= "&debug=1";
            
            $curl = curl_init($mailAPIUrl);
            
            // curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-type: application/json", "Accept: application/json"));
            // curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $dataObject);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
            
    
            $response = curl_exec($curl);
            if(isset($_GET['debug'])) echo "<br>Response:<br>".$response."<br>Response End";
            $responseObj = json_decode($response,true);
            if(isset($responseObj['sent'])) return ($responseObj['sent'] == 1);
            
            return false;
            
          } catch (\Throwable $th) {
              // file_put_contents('check.txt', $mail->ErrorInfo);
              // echo "Error in sending email. Mailer Error: {$th->getMessage()}";
              return false;
          } 
        }