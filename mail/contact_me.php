<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
require("../sendgrid-php/sendgrid-php.php");

$sendgrid = new SendGrid('stevetay', 'stay146081');
$email    = new SendGrid\Email();

$email->addTo("stevetay23@gmail.com")
      ->setFrom("newcontact@metapalex.com")
      ->setSubject("Website Contact Form:  $name")
      ->setHtml("You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message");

$sendgrid->send($email);

return true;			
?>