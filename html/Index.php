<?php
    include_once 'header.php';
?>
<div class="petDiv">
<div class="movingTextContainer" id=petcontainer><h1 style="text-align:center">WHAT TYPE OF PET DO YOU HAVE?</h1>
                </div>
   
    <div align="center">
    <div>
        <div class="containerD">
            <img class="pet" alt="Dog Icon" src="https://image.flaticon.com/icons/png/512/91/91544.png">
        <div class="overlay overlayLeft">
            <div class="textD"><a href="dogquiz.php">I have a dog</a></div>
        </div>
    </div>
    <div class="containerD">
            <img class="pet" alt="Cat Icon" src="https://static.thenounproject.com/png/6725-200.png">
        <div class="overlay overlayLeft">
            <div class="textD"><a href="catquiz.php">I have a cat</a></div>
        </div>
    </div>
        <div class="containerD">
            <img class="pet" alt="Other Icon" src="https://static.thenounproject.com/png/26623-200.png">
        <div class="overlay overlayLeft">
            <div class="textD"><a href="otherquiz.php">I have something else...</a></div>
        </div>
    </div>
       
    </div>
   
    </div>

<?php
    include_once 'footer.php';
?>
