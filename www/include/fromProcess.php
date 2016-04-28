<?php
include_once '../lang/common.php';
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['name']) || strlen($_POST['name']) <= 3 || !preg_match('/^[a-z][a-z ]*$/i', $_POST['name']))
  $errors['name'] = $lang['CONTACT_FORM']['labels']['Name'][1];

if (empty($_POST['email']) || strlen($_POST['email']) <= 3 || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
  $errors['email'] = $lang['CONTACT_FORM']['labels']['Email'][1];

// if (empty($_POST['web']) || strlen($_POST['web']) <= 3 || !preg_match("/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/", $_POST['web']))
//   $errors['web'] = 'Une adresse web valide est requise.';

if (empty($_POST['message']) || strlen($_POST['message']) <= 3)
  $errors['message'] = $lang['CONTACT_FORM']['labels']['Message'][1];


// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['status'] = 'error';
  $data['errors']  = $errors;
  $data['validate'] = $lang['CONTACT_FORM']['error_message']['title'];
  $data['validationSubText'] = $lang['CONTACT_FORM']['error_message']['message'];
  $data['base_title'] = $lang['CONTACT_TITLE'];
  $data['base_text'] = $lang['CONTACT_SUBTITLE'];
  $data['resultMessagesubmail'] =' ';

  echo json_encode($data);

} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['status'] = 'success';
  $data['message'] = 'Success!';
  $data['validate'] = $lang['CONTACT_FORM']['success_message']['title'];
  $data['validationSubText'] = $lang['CONTACT_FORM']['success_message']['message'];
  $data['resultMessagesubmail'] =' ';


  // Send the email to my address


  // Test fonction mail();
  $Name = $_POST['name']; //senders name
  $email = $_POST['email']; //senders e-mail adress
  $recipient = "dibanez@rocketmail.com"; //recipient
  $mail_body = $_POST['message']; //mail body
  $subject = "Message from Portfolio"; //subject
  $header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields

  ini_set('sendmail_from', 'info@davidibanez.com'); //Suggested by "Some Guy"


  echo json_encode($data); // return all our data to an AJAX call

  mail($recipient, $subject, $mail_body, $header); //mail command

}




