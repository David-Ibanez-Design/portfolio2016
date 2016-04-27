<?php  include_once 'lang/common.php';
$addressURL = 'http://' . $_SERVER['HTTP_HOST'];

if(  basename($_SERVER["PHP_SELF"]) == '')
{


	header("Location: "+$addressURL+"portfolio/index.php"); /* Redirect browser */
	exit();
}

?>
<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>David Ibanez web design & web development</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="src/img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="src/css/style.css">
	<link rel="stylesheet" href="src/css/libs/atelier-cave-light.css" />
	<link rel="stylesheet" href="src/css/libs/jquery.mCustomScrollbar.min.css" />
	<script src="src/js/libs/highlight.pack.js" ></script>
	<script>hljs.initHighlightingOnLoad();</script>
	<script>var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -4);var require = {paths: {page: currentPage}};</script>
	<script src="src/js/libs/require.js" data-main="src/js/".currentPage ></script>
	<noscript><link href="src/img/svg/fallbacks/icons.fallback.css" rel="stylesheet"></noscript>
</head>

