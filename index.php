<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;

$mgClient = new Mailgun('key-cc5fd3a5eb1c683a0f0a0da5fbb19e23');
$domain = "sandboxf9e579ee514246be9f54763ff2bc5010.mailgun.org";

$error_codes = [];
$errors = ["Your name is required", "Your email address is required", "Subject is required", "Message is required"];

# Make the call to the client.
if(isset($_POST['submit'])){
  if(empty($_POST["name"])){
    array_push($error_codes, 0);
  }
  if(empty($_POST["email"])){
    array_push($error_codes, 1);
  }
  if(empty($_POST["subject"])){
    array_push($error_codes, 2);
  }
  if(empty($_POST["message"])){
    array_push($error_codes, 3);
  }
  if(empty($error_codes)){
  	$result = $mgClient->sendMessage($domain, array(
  	    'from'    => $_POST["name"] . '<' . $_POST["email"] . '>',
  	    'to'      => 'Cameron Ingham <cjingham@astranno.com>',
  	    'subject' => $_POST['subject'] . " - From Astranno.com",
  	    'text'    => $_POST["message"]
  	));
  	header("Location: https://www.astranno.com/thanks.html");
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Astranno - Software Development</title>
  <link rel="icon" type="image/png" href="assets/images/fav/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="assets/images/fav/favicon-16x16.png" sizes="16x16">
  <link rel="shortcut icon" href="assets/images/fav/favicon.ico">
  <script src="https://use.fontawesome.com/0906301e62.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300,700,900' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="assets/styles/reset.css">
  <link rel="stylesheet" href="assets/styles/grid.css">
  <link rel="stylesheet" href="assets/styles/main.css">
</head>
<body>
  <div class="header wrap wider">
    <div class="grid">
      <a href="https://www.astranno.com"><img src="assets/images/headLogo.png" class="headLogo"></a>
      <ul class="nav">
        <li><a href="#applications">Projects</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="grid">
      <p class="headerCalling">We are Astranno</p>
      <hr class="headDiv">
      <p class="subHeaderCalling">MAKING SOFTWARE IS KINDA OUR THING</p>
    </div>
  </div>
  <section id="applications">
    <div class="wrap">
      <h1 class="section-title">PROJECTS</h1>
      <div class="grid app">
        <h1 class="unit">First we reinveted treasure hunting with Atrapara...</h1>
        <img src="assets/images/apps/Atrapara.png" class="unit one-sixth"/>
        <span class="unit five-sixths app-text">
          <p class="unit">The worlds first digital treasure hunting app. Atrapara is a lot like geo-caching but completely digital. Go on a tour and see what people have said in drops around your city. Create, open, or edit drops around you to leave a special message for those whole come after you. View all the drops on a map to find your next adventure. Have fun!</p>
          <a href="https://atrapara.astranno.com" class="app-btn">Visit Website</a>
        </span>
      </div>
      <div class="grid app">
        <h1 class="unit">Then we did something a bit strange with IMIL...</h1>
        <img src="assets/images/apps/ismyinternetlive.png" class="unit one-sixth"/>
        <span class="unit five-sixths app-text">
          <p class="unit">Is My Internet Live is simple, yet brilliant and stupid all the same time. If your internet works then the site will tell you so. Otherwise your internet browser will give you a nasty error. Thought up in the shower by one of our own, Is My Internet Live begins a new category of projects being worked on here at Astranno.</p>
          <a href="https://ismyinternet.live" class="app-btn">Visit Website</a>
        </span>
      </div>
      <div class="grid app">
        <h1 class="unit">Now fixing Wi-Fi security with Wi-Fi Connect...</h1>
        <img src="assets/images/apps/WiFi-Connect.png" class="unit one-sixth"/>
        <span class="unit five-sixths app-text">
          <p class="unit">Forget typing in Wi-Fi passwords; they are insecure and inneficient. With Wi-Fi Connect you can connect to friends and business' Wi-Fi based on a simple friends list. No networking skills required, and setup is almost automatic within the app. Imaging never being asked what your Wi-Fi password is again. Rejoyce!</p>
          <a href="https://wificonnect.xyz" class="app-btn">Visit Website</a>
        </span>
      </div>
    </div>
    <div class="wrap newsletter">
      <div class="grid">
        <center>
          <h1>Find out what's next</h1>
          <p>Join our newsletter and get updates on what we are doing here at Astranno!</p>
          <form action="mailchimp.php" method="post">
            <input type="text" name="newsletter-email" placeholder="niceguy@coolsite.com" required="true">
            <button>Join the Fun</button>
          </form>
        </center>
      </div>
    </div>
  </section>
  <section id="team">
    <div class="wrap">
      <h1 class="section-title">THE TEAM</h1>
      <div class="grid">
        <div class="team-image unit one-third">
          <center>
            <div class="team-member">
              <span>Cameron Ingham</span>
              <img src="assets/images/team/cameron.jpg">
            </div>
          </center>
        </div>
        <div class="team-image unit one-third">
          <center>
            <div class="team-member">
              <span>Byron Liss</span>
              <img src="assets/images/team/byron.jpg">
            </div>
          </center>
        </div>
        <div class="team-image unit one-third">
          <center>
            <div class="team-member">
              <span>Chris Rempe</span>
              <img src="assets/images/team/chris.jpg">
            </div>
          </center>
        </div>
      </div>
    </div>
  </section>
  <!-- <section id="testimonials">
    <div class="wrap">
      <h1 class="section-title">TESTIMONIALS</h1>
      <div class="grid">
        <div class="unit half">
          <div class="testimonial">
            <center><h1>Ubiquitous Journey</h1></center>
            <p>&emsp;&emsp;&emsp;&emsp;"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h2>- Robyn Liss</h2>
          </div>
        </div>
        <div class="unit half">
          <div class="testimonial">
            <center><h1>West Consulting</h1></center>
            <p>&emsp;&emsp;&emsp;&emsp;"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h2>- Jason Westerbur</h2>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section id="contact">
    <div class="wrap">
      <h1 class="section-title">GET IN TOUCH</h1>
      <div class="grid">
        <form action="#contact" method="post">
          <?php if(in_array(0, $error_codes)){ ?>
            <p class="error"><?php echo $errors[0]; ?></p>
          <?php } ?>
          <input type="text" name="name" placeholder="Your name" value="<?php echo isset($_POST['name']) ? $_POST['name'] : '' ?>" required="true"/>
          <?php if(in_array(1, $error_codes)){ ?>
            <p class="error"><?php echo $errors[1]; ?></p>
          <?php } ?>
          <input type="email" name="email" placeholder="Email address" value="<?php echo isset($_POST['email']) ? $_POST['email'] : '' ?>" required="true"/>
          <?php if(in_array(2, $error_codes)){ ?>
            <p class="error"><?php echo $errors[2]; ?></p>
          <?php } ?>
          <input type="text" name="subject" placeholder="Subject" value="<?php echo isset($_POST['subject']) ? $_POST['subject'] : '' ?>" required="true"/>
          <?php if(in_array(3, $error_codes)){ ?>
            <p class="error"><?php echo $errors[3]; ?></p>
          <?php } ?>
          <textarea placeholder="Message" name="message" value="<?php echo isset($_POST['message']) ? $_POST['message'] : '' ?>" required="true"></textarea>
          <button name="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
  <!-- <div class="note">
    <p>Made with <i class="fa fa-heart" aria-hidden="true"></i> by <a id="astranno" href="https://www.astranno.com">Astranno</a></p>
  </div> -->
  <section id="footer">
    <div class="wrap">
      <div class="grid">
        <center><p>Copyright -- Astranno, LLC. 2015 - 2017</p></center>
      </div>
    </div>
  </section>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-61354204-1', 'auto');
    ga('send', 'pageview');
  
  </script>
</body>
</html>
