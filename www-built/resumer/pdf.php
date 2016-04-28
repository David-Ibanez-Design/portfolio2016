<?php
 include_once '../lang/common.php';

$file = 'cv-'.$current_lang.'.pdf';

$resigter_name = ($current_lang == 'en') ? 'David_Ibanez_resume' : 'デイビッド-イバネズ-履歴書';

header('Content-disposition: attachment; filename='.$resigter_name.'.pdf');
header('Content-type: application/pdf');
readfile($file);


?>