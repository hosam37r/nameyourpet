<!DOCTYPE html>
<html>
<head>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@300&display=swap" rel="stylesheet">

<style>
#main  {
    background-image: url("images/dogBackground.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width:100%;height:100%;
    position:absolute;
    top:15.5%;
}

#lowerNav{
    width:100%;
    position:absolute;
    top:8%;
    height:15%;
    background-color:rgb(29, 29, 29);
    border:dashed blue;
    opacity:80%;
}

.contactBox{
    width:12%;
    height:21%;
    top:30%;
    position:relative;
    float:left;
    background-color:rgb(0, 14, 206);
    margin:1%;
    left:22%;
}
#rightSideBar{
    position:absolute;
    width:20%;
    left:100%;
    height:100%;
    background-color:rgb(162, 162, 162);
}
#leftSideBar{
    position:absolute;
    width:20%;
    right:100%;
    height:100%;
    background-color:rgb(162, 162, 162);
}

</style>
</head>
<body>
<?php
    include_once 'header.php';
?>

<?php
    //include_once 'footer.php';
?>


<div id = "main">

    <div id = "lowerNav">
    </div>
    <h3 style = "color:white;font-size:2.5em;font-family: 'Balsamiq Sans', cursive;position:absolute;left:38%;top:10%;">Don't be shy, ask Nameurpet!</h3>
    <img src = "images/line.jpg" style = "width:15%;height:0.5%;position:absolute;left:45%;top:16%;">
    <h3 style = "color:white;font-size:1.6em;font-family: 'Balsamiq Sans', cursive;position:absolute;left:40%;top:18%;">Monday & Wednesday: 10:00 - 11:50 CST</h3>

    <div class = "contactBox">
        <h2 style = "font-family: 'Pacifico', cursive;position:relative;left:19%;top:8%;font-size:1.5em;color:white;">Start a Chat</h2>
        <img src = "images/bLine.jpg" style = "width:55%;height:0.5%;position:absolute;left:30%;top:20%;">

        <img src = "images/chat.png" style = "width:55%;height:30%;position:absolute;left:25%;top:30%;">

        <button id = "rightSideBut" onclick = "revealRightTab()" style = "position:absolute;left:15%;top:80%;width:60%;height:10%;background-color:rgb(248, 248, 248);color:black"><p id = "rightPTag" onclick = "revealRightTab()" style="position:absolute;top:15%;left:35%;font-size:1.5em;">Start</p></button>
    
    </div>
    
    <div class = "contactBox">
        <h2 style = "font-family: 'Pacifico', cursive;position:relative;left:30%;top:8%;font-size:1.5em;color:white;">Share Us</h2>
        <img src = "images/bLine.jpg" style = "width:39%;height:0.5%;position:absolute;left:40%;top:20%;">

        <img src = "images/thumbsUp.png" style = "width:55%;height:30%;position:absolute;left:25%;top:30%;">
        
        <a href="https://www.facebook.com" style = "position:absolute;left:17%;top:82%;width:60%;height:10%;background-color:rgb(248, 248, 248);color:black"><p style="position:absolute;top:15%;left:30%;font-size:1.3em;">Share</p></a>
    </div>

    <div class = "contactBox">
    <h2 style = "font-family: 'Pacifico', cursive;position:relative;left:23%;top:8%;font-size:1.5em;color:white;">Email Us</h2>
        <img src = "images/bLine.jpg" style = "width:45%;height:0.5%;position:absolute;left:27%;top:20%;">

        <img src = "images/emailUs.png" style = "width:55%;height:30%;position:absolute;left:25%;top:30%;">

        <button id = "leftSideBut" onclick = "revealLeftTab()" style = "position:absolute;left:15%;top:80%;width:60%;height:10%;background-color:rgb(248, 248, 248);color:black"><p id = "leftPTag" onclick = "revealLeftTab()" style="position:absolute;top:15%;left:35%;font-size:1.5em;">Send</p></button>
    </div>

    <div class = "contactBox">
    <h2 style = "font-family: 'Pacifico', cursive;position:relative;left:23%;top:8%;font-size:1.5em;color:white;">Call Us</h2>
        <img src = "images/bLine.jpg" style = "width:45%;height:0.5%;position:absolute;left:27%;top:20%;">

        <img src = "images/phone.png" style = "width:55%;height:30%;position:absolute;left:25%;top:30%;">

        <p style="font-family: 'Fraunces', serif;position:absolute;top:80%;left:20%;font-size:1.5em;color:white;"><b>608.663.8353</b></p>
    
    </div>

    </div>


    <div id = "rightSideBar">
        <p id = "convo" style = "background-color:white;border:1px solid grey;position:absolute;top:2%;left:10%;width:80%;height:50%;overflow:scroll;"> AI: What can I help you with today? <br>
        </p>
        <input type="text" style = "position:absolute;top:55%;left:10%;width:80%;height:20%;" id = "talkToAi">
        <button id = "userInForTalk" onclick = "talk()" style = "position:absolute;left:58%;top:75%;background-color:rgb(248, 248, 248);width:25%;color:black">Enter</button>
    </div>

    <div id = "leftSideBar">
        
        <!--<form action="mailto:jakethorson09@yahoo.com" method="post" enctype="text/plain">-->

        <input type = "text" value = "full name"  style = "position:absolute;top:3%;" name="name" class = "ins" id = "fName">
        <input type = "text" value = "email" style = "position:absolute;top:10%;" name="mail" class = "ins" id = "email">
        <input type = "text" value = "phone number" style = "position:absolute;top:17%;" name = "phone" class = "ins" id = "phone">
        <input type = "text" value = "country" style = "position:absolute;top:24%;" name = "country" class = "ins" id = "country">
        <input type = "text" value = "your message" style = "position:absolute;top:31%;height:18%;" name = "message" class = "ins" id = "message">

        <input type="submit" style = "position:absolute;top:52%;background-color:black;width:25%;left:65%;" value="Send">
        <input type="reset" value="Reset">
        </form>

    </div>

    <p id = "aiResponse" style = "display:none">5</p>


<script>

window.onclick = function(event) {
    if (!event.target.matches('#rightSideBar')) {
        if (!event.target.matches('#rightSideBut')) {
            if (!event.target.matches('#talkToAi')) {
                if (!event.target.matches('#userInForTalk')) {
                    if (!event.target.matches('#rightPTag')) {
                        document.getElementById("rightSideBar").style.left = "100%";
                    }
                }
            }
        }
    }
    if (!event.target.matches('#leftSideBut')) {
        if (!event.target.matches('#leftSideBar')) {
            if (!event.target.matches('.ins')) {
                if (!event.target.matches('#leftPTag')) {
                    document.getElementById("leftSideBar").style.right = "100%";
                }
            }
        }
    }

}

function revealLeftTab(){
    document.getElementById("leftSideBar").style.right = "80%";
}

function revealRightTab(){
    document.getElementById("rightSideBar").style.left = "80%";
}

function talk(){
    var whatUserSaid = document.getElementById("talkToAi").value;
    var convo = document.getElementById("convo").innerHTML;
    convo = convo + "<br>" + "You: " + whatUserSaid + "<br><br>";

    var lastResponse = document.getElementById("aiResponse").innerHTML;
    var out = lastResponse;
    while (out == lastResponse){
        out = Math.floor(Math.random() * 5) + 1;
        document.getElementById("aiResponse").innerHTML = out;
        if(out == 1){
            out = "I'm sorry, I do not understand.";
        }
        if(out == 2){
            out = "I need to check if your phone number is correct";
        }
        if(out == 3){
            out = "NameUrPet holds customer service as a high priority";
        }
        if(out == 4){
            out = "Can you expand on that?";
        }
        if(out == 5){
            out = "What can I help you with today?";
        }
    }

    document.getElementById("convo").innerHTML = (convo + "AI: " + out + "<br>") ;

}

function submitEmail(){

}
</script>
</body>
</html>
