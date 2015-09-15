/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var firstName = "Matthew Goodwin";
 var wowfirstName = firstName.replace("Goodwin","Goodwin");
 $("#main").append(wowfirstName);
 console.log(firstName);
 console.log(wowfirstName);

 var formattedName= HTMLheaderName.replace("%data%","Matthew Goodwin");
 var formattedRole= HTMLheaderRole.replace("%data%","Web Developer");
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 //$("#main").append(skills.length);
 var skills=["teaching","management","html"];
 var myBio = {
 	"firstName" : "Matthew",
 	"lastName" : "Goodwin",
 	"role" : "Web Developer",
 	"contactIn" : {
 		"email" : "matthewjgoodwin@yahoo.com",
 		"phone" : "010.8232.7758",
 	},
 	"welcomeMess" : "Hello, my name is Matthew!",
 	"skills" : skills,
 	"bioImage" : "images/fry.jpg"
};
 //$("#main").append(myBio.city); //cant come before the .notation/ must be in order
 //NOTE: below using dot notation and bracket notation to append objects to my bio
 myBio.city = "palo alto";
 myBio.education = {
 	"school" : "san jose state university",
 	"city" : "san jose",
 	"state" : "california",
 	"college" : "social science",
 	"degree" : "BS",
 	"gradyear" : "2010"
 };
  /*myBio.education = {
    "schools": [
        {
            "schoolname": "san jose state university",
            "city": "san jose",
            "state": "california",
            "major": "social science",
            "gradyear": "2010",
            "degree": "BS"
        },
        {
            "schoolname": "udacity",
            "city": "moutain view",
            "state": "california",
            "major": "udacity",
            "gradyear": "2016",
            "degree": "udacity nanodegree"
        }
    ]
}; NOTE: also validated by Jsonlint, does not contain fake degrees--this is the best set of EDU OBJECTS*/

  /*myBio.education = {
    "schools": [
        {
            "schoolname": "san jose state university",
            "city": "san jose",
            "state": "california",
            "college": "social science",
            "gradyear": "2010",
            "degree": [
                "BS",
                "BA"
            ]
        },
        {
            "schoolname": "udacity",
            "city": "moutain view",
            "state": "california",
            "college": "udacity",
            "gradyear": "2016",
            "degree": [
                "udacity nanodegree",
                "art"
            ]
        }
    ]
}; NOTE: above is a valid Json structure as demonstrated by udcity with FAKE DEGREE ARRAYS*/


 /*myBio.education = {
    "university": [
        {
            "schoolname": "san jose state university",
            "city": "san jose",
            "state": "california",
            "college": "social science",
            "gradyear": "2010",
            "degree": "BS"
        }
    ],
    "certificateprograms": [
        {
            "schoolname": "udacity",
            "city": "moutain view",
            "state": "california",
            "college": "front end development",
            "gradyear": "2016",
            "degree": "udacity nanodegree"
        }
    ]
};NOTE: above is CUSTOM valid json structure--perfect--, but I cant access the object property*/ 

 myBio["employ"] = {
 	"company" : "creme",
 	"position" : "web developer",
 	"years" : 5
 };
 $("#main").append(myBio.city);
 $("#main").append(myBio.education.school);
 $("#main").append(myBio.employ["position"]);