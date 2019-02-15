<?php
    require("vendor/autoload.php");
    use \DrewM\MailChimp\MailChimp;
    $MailChimp = new MailChimp('d40cceb30e6506ee90c296db4b89d447-us5');
    $list_id = '09c50220d3';
    
    $result = $MailChimp->post("lists/$list_id/members", [
		'email_address' => $_POST["newsletter-email"],
		'status'        => 'subscribed',
	]);
    
   if ($MailChimp->success()) {
    	header("Location: https://www.astranno.com/thanks.php?type=news");	
    } else {
    	header("Location: https://www.astranno.com/thanks.php?type=error");;
    }
?>