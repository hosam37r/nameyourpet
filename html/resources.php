<!DOCTYPE html>
<html>
<head>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

<!-- cssPage -->
<link rel="stylesheet" href="universalStyle.css">




<style>

    html{
        position:relative;
        min-height: 100%;
    }
    body{
        margin-bottom:180px;
    }

/****** BEGIN LISTED RESOURCES *******/
    .resourceContainer{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        min-width:480px;
        max-width: 70%;
        padding:1em;
        margin: auto;
        background-color: rgb(0, 17, 90);
        max-height: 200px;
        font-family: cursive;
        font-size: x-large;
    }
    .resourceName{
        background-color:lightgrey;
        border-right: solid;
        padding:5px;
        border-radius:8px;
        min-width: 15%;
    }
    .resourceSummary{
        background-color:lightgrey;
        border-right: solid;
        padding:5px;
        border-radius:8px;
        overflow-y:scroll;
    }
    .resourceSummary::-webkit-scrollbar{
        width:.8em;
    }
    .resourceSummary::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgb(61, 83, 182);
}
    .resourceSummary::-webkit-scrollbar-thumb{
        background-color:rgb(0, 17, 90);
        outline: 1px solid slategray;
    }
    .resourceLocation{
        background-color:lightgrey;
        border-right: solid;
        padding:5px;
        border-radius:8px;
        min-width:15%;
    }
    .resourceSite{
        background-color:lightgrey;
        padding:5px;
        border-right: solid;
        border-radius:8px;
        min-width: 15%;
    }
    .resourceSite a{
        text-decoration: none;
        color:black;
    }
    .resourceSite a:hover{
        background-color: rgb(0, 95, 150);
        color:white;
    }
/********* END LISTED RESOURCES *********/

/******** BEGIN FLEXBOX FOOTER *********/
    .footerMain{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        background-color:rgb(214, 214, 214);
        border:solid 1px blue;
        position:absolute;
        bottom:0;
        width: 100%;
    }
    .footerTop1{
        width: 33.33%;
        text-align: center;
    }
    .footerTop2{
        width: 33.33%;
        text-align: center;
    }
    .footerTop3{
        width: 33.33%;
        text-align: center;
    }
    .footerBottom1{
        width: 33.33%;
        text-align: center;
    }
    .footerBottom2{
        width: 33.33%;
        text-align: center;
    }
    .footerBottom3{
        width: 33.33%;
        text-align: center;
    }
/******** END FLEXBOX FOOTER ********/

/***** ADOPT A PET SEARCH BOX ********/
    .searchContainer{
        text-align: center;
        margin-top:3%;
        padding-bottom: 10%;
    }

/*********** BEGIN FLEXBOX NAVBAR *************/
    .navbarMain{
        display:flex;
        flex-flow: row wrap;
        justify-content:flex-start;
        background-color: rgb(214, 214, 214); 
        align-items:center;
        padding:.5em;
        margin-bottom: 20px;
    }
    .navbarDog{
        order:1;
        flex-grow:1;
    }
    .navbarIndex{
        order:2;
        flex-grow:1;
    }
    .navbarCat{
        order:3;
        flex-grow:1;
    }
    .navbarResources{
        order:4;
        flex-grow:1;
    }
    .navbarIguana{
        order:5;
        flex-grow:1;
    }
    .navbarTrending{
        order:6;
        flex-grow:1;
    }
    .navbarFish{
        order:7;
        flex-grow:1;
    }
    .navbarContact{
        order:8;
        flex-grow:1;
    }
    .navbarMain img{
        width:6vh;
        height: 5vh;
    }
    .navbarMain a{
        font-family: 'Pacifico', cursive;
        font-size:2em;
        text-decoration: none;
        color:black;
        display:block;
    }
    .navbarMain a:hover{
        background-color:rgb(0, 95, 150);
        color:white;
    }
/*********** END FLEXBOX NAVBAR ************/
</style>
</head>
<body>
    <div class="navbarMain">
        <div class="navbarDog"><img src = "images/doggoWEBKIT.png" ></div>
        <div class="navbarIndex"><a href = "index.php">Home</a> <!-- fill in your url to the page --></div>
        <div class="navbarCat"><img src = "images/kittyWEBKIT.jpg" ></div>
        <div class="navbarResources"><a href = "resources.html">Resources</a> <!-- fill in your url to the page --></div>
        <div class="navbarIguana"><img src = "images/iguanaWEBKIT.png"></div>
        <div class="navbarTrending"><a href = "TrendingPetNames.php">Trending</a> <!-- fill in your url to the page --></div>
        <div class="navbarFish"><img src = "images/fishWEBKIT.png" ></div>
        <div class="navbarContact"><a href = "ContactUs.php">Contact Us</a> <!-- fill in your url to the page --></div>

    </div>  


    
<div style=" text-align: center;">
    
    
<div class="resourceContainer">
    <div class="resourceName"><p>ASPCA</p></div>
    <div class="resourceSummary"><p>The American Society for the Prevention of Cruelty to Animals® (ASPCA®) was the first humane society to be established in North America and is, today, one of the largest in the world.

        Our organization was founded on the belief that animals are entitled to kind and respectful treatment at the hands of humans and must be protected under the law. Headquartered in New York City, the ASPCA maintains a strong local presence, and with programs that extend our anti-cruelty mission across the country, we are recognized as a national animal welfare organization. We are a privately funded 501(c)(3) not-for-profit corporation, and are proud to boast more than 2 million supporters across the country.
        The ASPCA’s mission, as stated by founder Henry Bergh in 1866, is “to provide effective means for the prevention of cruelty to animals throughout the United States.”</p></div>
    <div class="resourceLocation"><p>New York, NY</p></div>
    <div class="resourceSite"><p><a href="aspca.org">ASPCA Website</a></p></div>
</div>

<div class="resourceContainer">
    <div class="resourceName"><p>The Shelter Pet Project</p></div>
    <div class="resourceSummary"><p>The Shelter Pet Project is the result of a collaborative effort between two leading animal welfare groups, the Humane Society of the United States and Maddie’s Fund, and the leading producer of public service advertising (PSA) campaigns, The Ad Council.
        Our goal is to make shelters the first place potential adopters turn when looking to get a new pet, ensuring that all healthy and treatable pets find loving homes. We do this by breaking down misconceptions surrounding shelter pets and celebrating the unique bond between every shelter pet and parent.</p></div>
    <div class="resourceLocation"><p>Online Presence Only</p></div>
    <div class="resourceSite"><p><a href="theshelterpetproject.org">The Shelter Pet Project</a></p></div>
</div>

<div class="resourceContainer">
    <div class="resourceName"><p>The Humane Society</p></div>
    <div class="resourceSummary"><p>We fight the big fights to end suffering for all animals.

        Together with millions of supporters, we take on puppy mills, factory farms, the fur trade, trophy hunting, animal cosmetics testing and other cruel industries. We rescue and care for thousands of animals every year through our Animal Rescue Team’s work and other hands-on animal care services. We fight all forms of animal cruelty to achieve the vision behind our name: A humane society. </p></div>
    <div class="resourceLocation"><p>Washington, DC</p></div>
    <div class="resourceSite"><p><a href="humanesociety.org">The Humane Society</a></p></div>
</div>

<div class="resourceContainer">
    <div class="resourceName"><p>Maddie's Fund</p></div>
    <div class="resourceSummary"><p>Maddie's Fund® is a family foundation established in 1994 by Dave and Cheryl Duffield and is the fulfillment of a promise to their inspirational dog, Maddie. She provided them much joy from 1987 – 1997 and continues to inspire them today.
        The Foundation has awarded nearly $250 million in grants toward increased community lifesaving, pioneering shelter medicine education and establishing foster care as a standard across the U.S.
        Maddie’s Fund proudly offers the industry a national voice, important funding opportunities for bold ideas, learning resources and access to collaborate and share lifesaving ideas. The Foundation invests its resources in a commitment to keeping pets and people together, creating a safety net of care for animals in need and operating within a culture of inclusiveness and humility.</p></div>
    <div class="resourceLocation"><p>Pleasonton, CA</p></div>
    <div class="resourceSite"><p><a href=""maddiesfund.org>Maddie's Fund</a></p></div>
</div>

<!--Template for Resource Page
<div class="resourceContainer">
    <div class="resourceName"><p>Name of Organization/Logo</p></div>
    <div class="resourceSummary"><p>Place summary, or mission statement here</p></div>
    <div class="resourceLocation"><p>Location</p></div>
    <div class="resourceSite"><p>Website Link</p></div>
</div>
-->


<div class="searchContainer">
    <iframe width="315" height="450" frameborder="0" marginwidth="0" marginheight="0" scrolling="0" margin="auto" src="https://searchtools.adoptapet.com/public/searchtools/display/inframe"></iframe>
    <div style="height: 29px; width: 278px; margin: auto; text-align:right;">
        <a href="https://www.adoptapet.com" title="Pet adoption and rescue powered by Adopt-a-Pet.com" style="color: #444444; text-decoration:none;">
            <img src="https://images.adoptapet.com/images/st-logo.gif" alt="Pet adoption and rescue powered by Adopt-a-Pet.com" width="121" height="29" />
            <span style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;text-shadow: 2px 2px black; color: white;">Pet adoption and<br />rescue powered by</span>
        </a>
    </div>
</div>

</div>

<!--Footer that is 3 boxes on top and 3 boxes on bottom in order 1, 2, 3. Some not used.-->
<div class="footerMain">
    <div class="footerTop1"><h3 >We are committed to naming pets</h3>
        <p >Feel free to take our quiz and use the results to name your awesome pet.  Leave us some feedback about how great our web site is!<p></p>
    </div>
    <div class="footerTop2">
        <a href = "https://www.facebook.com"> <img src = "images/fb.jpg" ></a>
    <a href = "https://www.instagram.com"> <img src = "images/ig.jpg"></a>
    <a href = "https://www.pinterest.com"> <img src = "images/pn.jpg" ></a>
    <a href = "https://www.reddit.com"> <img src = "images/rd.jpg" ></a>
    <a href = "https://www.tiktok.com"> <img src = "images/tt.jpg" ></a>
    <a href = "https://www.twitter.com"> <img src = "images/tw.jpg" ></a>
    </div>
    <div class="footerTop3"></div><!--Placeholder for top right side of footer-->
    <div class="footerBottom1"> </div><!--Placeholder for bottom left side of footer-->
    <div class="footerBottom2"><h3 >Share Us!</h3></div>
    <div class="footerBottom3"></div><!--Placeholder for bottom right side of footer-->

</div>

</body>
</html>