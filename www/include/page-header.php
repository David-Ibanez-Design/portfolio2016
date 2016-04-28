<?php
  include_once 'lang/common.php';
  include_once("include/analyticstracking.php");
  $currentPage = str_ireplace(array('-', '.php'), array(' ', ''), basename($_SERVER['PHP_SELF']) );
?>

      <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $lang["GLOBAL_PAGE_TITLE"] ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="src/img/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="src/css/style.css">
         <script src="src/js/libs/require.js" data-main="src/js/<?php echo $currentPage; ?>.js"></script>
        <noscript><link href="src/img/svg/fallbacks/icons.fallback.css" rel="stylesheet"></noscript>
      </head>


