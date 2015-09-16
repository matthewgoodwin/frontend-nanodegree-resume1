var bio = {
	"name": "matthew goodwin",
	"role": "web developer",
	"currentLocation": "seoul, korea",
	"city": "palo alto, california",
	"state": "ca",
	"zip": "94306",
	"contacts": {
		"email": ["matthewjgoodwin@data.com", "matthewjgoodwin@data2.com"],
		"phone": "010.8232.7758 (south korea)",
		"gitHub": "matthewgoodwin",
		"location": "seoul, korea", //didnt realize location was to be placed here until i saw the helper.js locationFinder function.. very confusing :(
	},
	"welcomeMessage": "Hello, thanks for visiting!",
	"aboutMe": "My name is matthew and I am an aspiring web developer",
	"skills": [" front-end web development"," management"," marketing"," teaching"],
	"bioImg": "images/..."
};

var education = {
	"schools": [ 
	{
		"name": "san jose state university",
		"location": "san jose, california",
		"state": "ca",
		"major": "social science",
		"dates": "2011",
		"degree": "bachelors of science"
	} 
	],
	"onlineCourses": [
		{
		"name": "udacity",
		"school": "udacity",
		"city": "mountain view, california",
		"state": "ca",
		"title": "udacity: web development (front-end)",
		"dates": "2016",
		"degree": "nanodegree"
		}
	]
};

var work = {
	"jobs": [
	{
		"employer": "immi",
		"company": "immi",
		"title": "data entry",
		"location": "san mateo, california",
		"state": "california",
		"country": "united states of america",
		"phone": "",
		"dates": "2000 - 2002",
		"description": "used audacity and tone recognition software to determine the effectiveness of marketing."
	},
	{
		"employer": "icix",
		"company": "icix",
		"title": "quality assurance support",
		"location": "san mateo, california",
		"state": "california",
		"country": "united states of america",
		"phone": "",
		"dates": "2002 - 2004",
		"description": "supported the quality assurance of clients by ensuring that companies were in compliance with business standards."
	},
	{
		"employer": "chungdahm learning",
		"company": "chungdahm learning",
		"title": "team leader",
		"location": "seoul, korea",
		"country": "south korea",
		"dates": "2013 - present",
		"description": "managed a team of instructors and oversaw employee develpment and training procedures."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "project 1",
		"date": "2004",
		"describe": "this is a project, this is project 1",
		"image": ""
	},
	 {
		"title": "project 2",
		"date": "2005",
		"describe": "this is a project, this is project 2",
		"image": ""
	},
	{
		"title": "project 3",
		"date": "2006",
		"describe": "this is a project, this is project 3",
		"image": ""
	}
	]
};


bio.display = function() {
 var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(formatedRole);

 var formatedName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").prepend(formatedName);

 var formatedBioPic = HTMLbioPic.replace("%data%", "images/dog380by320.jpg");
 $("#header").append(formatedBioPic);

 var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
 $(".flex-box").append(formatedMobile);

 var formatedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"][0]);
 $(".flex-box").append(formatedEmail);

 var formatedGitHub = HTMLgithub.replace("%data%", bio["contacts"].gitHub);
 $("#topContacts").append(formatedGitHub);

 var formatedLocation = HTMLlocation.replace("%data%", bio["currentLocation"]);
 $(".flex-box").append(formatedLocation);

 var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);
 $("#header").append(formatedWelcomeMsg);

 var formatedSkillsStart = HTMLskillsStart.replace("Skills at a Glance:","skill overview");

 if (bio.skills.length > 0) { /*I know this can be written as (bio.skills.length), but .length>0 helps me visualize the process*/
 	$("#header").append(formatedSkillsStart);
 	for(skill in bio.skills) {
 	var formatedskills = HTMLskills.replace("%data%", bio.skills[skill]);
 	$("#skills:last").append(formatedskills);
 	};
 };
};
bio.display();

/* job is only the index*/
work.display = function() {
 for(job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);
 	var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);/*[job] is the index*/
 	var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formatedEmployerTitle = formatedEmployer + formatedTitle;
 	 $(".work-entry:last").append(formatedEmployerTitle);


	var formatedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	 $(".work-entry:last").append(formatedWorkDate);

	var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	 $(".work-entry:last").append(formatedWorkLocation);

 	var formatedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	 $(".work-entry:last").append(formatedWorkDesc);
	};
};
work.display();

projects.display = function() {
	for(pro in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formatedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
		$(".project-entry:last").append(formatedProjectTitle);

		var formatedProjDate = HTMLprojectDates.replace("%data%", projects.projects[pro].date);
		$(".project-entry:last").append(formatedProjDate);

		var formatedProjDescr = HTMLprojectDescription.replace("%data%", projects.projects[pro].describe);
		$(".project-entry:last").append(formatedProjDescr);
	};
};
projects.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formatedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formatedSchoolName);

		var formatedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formatedDegree);

		var formatedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formatedSchoolDates);

		var formatedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formatedSchoolLocation);

		var formatedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formatedSchoolMajor);
	};
	for(school in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formatedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		$(".education-entry:last").append(formatedOnlineTitle);

		var formatedOnlineDates = HTMLschoolDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formatedOnlineDates);

		var formatedOnlineDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[school].degree);
		$(".education-entry:last").append(formatedOnlineDegree);
	};
};
education.display();


function inName(intName) {
	var NewintName = intName;
	var NewintName = formatedName.replace("matthew goodwin","GOODWIN Matthew");
	return NewintName;
};
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);