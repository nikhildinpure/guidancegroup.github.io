app.controller('dataCtrl',function($rootScope,$scope){

$rootScope.slogan="Only Guidance Prevails . . .";

//courses entries
$rootScope.courseData={
  "courses":[
    {
      "name":"MPSC",
      "text":"What is MPSC?",
      "url":"partials/courses.html"
    },
    {
      "name":"UPSC",
      "text":"What is UPSC?",
      "url":"partials/courses.html"
    },
    {
      "name":"What is IBPS?",
      "text":"About IBPS",
      "url":"partials/courses.html"
    }
    ]
}

//mentors entry
$rootScope.mentorData={
  "mentors":[
    { 
      "name":"Samir Inpure",
      "about":"say something",
      "degree":"add degrees",
	  "image":"samir.jpg",
      "url":"#"
    },
    {
      "name":"Akshay ",
      "about":"say something",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    },
    {
      "name":"Amit",
      "about":"say something dagwdga0dbad ahdagfawd awbuawfbauof awidoabfouauouafba afuafuavfiawvifuvafafi ab",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    },
    {
      "name":"Rupesh",
      "about":"say something",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    },
	{
      "name":"Rupesh1",
      "about":"say something",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    },
	{
      "name":"Rupesh2",
      "about":"say something",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    },
	{
      "name":"Rupesh3",
      "about":"say something",
      "degree":"add degrees",
	  "image":"profile.png",
      "url":"#"
    }
    
    ]
}

//wellWishers entries
$rootScope.wellWisherData={
  "wellWishers":[
    { 
      "name":"Nitin Kusalkar",
      "about":"Currently serving in Odisha cadre.",
      "post":"IPS",
      "slide":"1"
    },
    {
      "name":"Swapnil Meshram ",
      "about":"Currently serving in Odisha cadre.",
      "post":"Assistant BDO",
      "slide":"2"
    },
    {
      "name":"Rahul Nikam",
      "about":"B.E (PRODUCTION), has appeared UPSC-CSE Interview round.",
      "post":"Nayab Tahasildar",
      "slide":"3"
    },
    {
      "name":"Digvijay Patil",
      "about":"B.E, Author of a book specially designed for students focusing on Assistant Commadant position.",
      "post":"Assistant Commandant Officer",
      "slide":"4"
    }
    
    ]
}

//gallery  photo entries
$rootScope.galleryData={
  "gallery":[
    { 
      "name":"img1.jpg",
      "url":"#"
    },
    {
      "name":"img2.jpg",
      "url":"#"
    },
    {
      "name":"img3.jpg",
      "url":"#"
    },
    {
      "name":"img4.jpg",
      "url":"#"
    },
    {
      "name":"img5.jpg",
      "url":"#"
    },
    {
      "name":"img6.jpg",
      "url":"#"
    },
    {
      "name":"img7.jpg",
      "url":"#"
    },
    {
      "name":"img8.jpg",
      "url":"#"
    },
    {
      "name":"img9.jpg",
      "url":"#"
    }
    
    ]
}

$rootScope.youtubePlayerData={
	"players":[
	{ 
		"name":"player1" ,
		"player":"player1" 
	},
	{ 
		"name":"player2" ,
		"player":"player2"
	},
	{ 
		"name":"player3" ,
		"player":"player3"
	},
	{ 
		"name":"player4" ,
		"player":"player4"
	},
	{ 
		"name":"player5" ,
		"player":"player5"
	}
	]
}

//------------------------------------------------------------------------------------------

//add social media links 
$rootScope.facebookLink="";
$rootScope.instagram="";
$rootScope.linkedin="";
$rootScope.youtube="";
$rootScope.contactMe="";

//------------------------------------------------------------------------------------------
//Enter slide interval for main slideshow (1000=1 second)
$rootScope.carouselOneInterval="5000";
//Enter slide interval for Well-wishers slideshow
$rootScope.carouselTwoInterval="2000";

//Add slides for main slideshow here
$rootScope.carouselData={
	"slides":[
	{
		"name":"slide1.jpg",
		"slide":"1"
	},
	{
		"name":"slide2.jpg",
		"slide":"2"
	},
	{
		"name":"slide3.jpg",
		"slide":"3"
	}
	]
};






});
