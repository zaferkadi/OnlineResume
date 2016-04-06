var contactInfo = {"id":554615,"user_id":467694,"full_name":"Zafer Qadi","email":"zafer.qadi@gmail.com","headline":"Front End Developer","telephone":"2176719799","mobile":null,"country_code":"AE","region":"il","municipality":"Chicago","address_line_1":null,"address_line_2":null,"postal_code":null,"websites":["http://"],"created_at":"2016-01-28T14:30:15.885-11:00","updated_at":"2016-03-13T17:55:12.756-11:00","hide_thumb":true};
var workHistory = [{}];

//restful services
/*
CV_id: 949106

API 1
api/cv/{id}
{
  "cv": {
    "meta": {
      "summary": "summary",
      "positions": "Work History ",
      "degrees": "Education",
      "certifications": "Certifications"
    },
    "sort_order": {
      "main": {
        "cvs": {
          "949106": 1
        },
        "positions": 2,
        "degrees": 3,
        "competencies": 4,
        "certifications": 5
      },
      "sidebar": {}
    }
  }
}

{"cv":{}}

API 2
api/cv/{id}/Skills/{id}
{"id":1185820,"user_id":467694,"name":"HTML5, templating","description":"\u003cp\u003e\u0026nbsp;\u003c/p\u003e","level":"senior","years":null,"created_at":"2016-02-16T04:54:30.673-11:00","updated_at":"2016-03-18T20:48:41.972-11:00"}

API 3
api/cv/{id}/Certificates/{id}
{"id":203594,"user_id":467694,"name":"Hybris","issuing_authority":" ","description":"\u003cp\u003e\u003cstrong\u003e\u003c/strong\u003e\u003cspan\u003eAn in-house hybris Accelerated Bootcamp training provided by CrossView with the following subjects:\u003c/span\u003e\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cspan\u003eBusiness User Tooling\u003c/span\u003e\u003c/li\u003e\u003cli\u003e\u003cspan\u003ehybris Core Developer\u003c/span\u003e\u003c/li\u003e\u003cli\u003e\u003cspan\u003eB2C Accelerator / B2B Concepts\u003c/span\u003e\u003c/li\u003e\u003cli\u003e\u003cspan\u003ehybris Core+, Backoffice and OMS\u003c/span\u003e\u003c/li\u003e\u003c/ul\u003e","start_date":null,"start_date_precision":0,"end_date":null,"end_date_precision":0,"created_at":"2016-01-28T14:29:19.303-11:00","updated_at":"2016-03-18T20:39:00.525-11:00","authority_url":null}

API 4
api/cv/{id}/degrees/{id}
{"id":978611,"user_id":467694,"name":"BSc Computer Science.","type":null,"major":"COMPUTER SCIENCE","description":"\u003cp\u003e\u003cspan\u003eAdvanced Topics in Computer Science\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eDatabase Theory and Practice\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eOperating Systems\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eCompilers\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eNetworking\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eArtificial Intelligence\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eData Structures and Algorithms\u003c/span\u003e\u003c/p\u003e","school_name":"An-Najah National University","school_country_code":null,"school_region":null,"school_municipality":null,"school_url":null,"start_date":"2006-01-01","start_date_precision":0,"end_date":"2010-01-01","end_date_precision":0,"created_at":"2016-01-28T14:19:33.491-11:00","updated_at":"2016-01-28T14:28:57.469-11:00"}
api/cv/{id}/contact_info/

API 5
api/cv/{id}/positions/{id}
{"id":1848249,
"user_id":467694,
"company_url":null,
"title":"Front End Developer",
"description":"\u003cul\u003e\u003cli\u003e\u003cstrong\u003eHanes\u003c/strong\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAnalyzed UI/UX design for responsive layout for improved usability.\u003c/p\u003e\u003cp\u003e\u003cspan\u003eRequrie.js and AMD Javascript Software Architecture.\u003c/span\u003e\u003c/p\u003e\u003cp\u003eStrong experience in configuring and running many build tools using Ant, Grunt and Gulp.\u003c/p\u003e\u003cp\u003eExperience in Client Side Web Designing and Validations using HTML, CSS, JavaScript, JSP and Struts Tag Library.\u003c/p\u003e\u003cp\u003eInvolved in user interface development using JSTL.\u003c/p\u003e\u003cp\u003eRefactoring templates.\u003c/p\u003e\u003cp\u003eAbility to predict future usability problems.\u003c/p\u003e\u003cp\u003eWorking on Susy grid system. Used to update User Interface based on changing needs and requirements.\u003c/p\u003e\u003cp\u003eWorking on fabric.js framework.\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e",
"employer_org_name":"Elevate Studios ",
"organization_name":"Elevate Studios",
"country_code":null,
"region":null,
"municipality":null,
"start_date":"2015-10-01",
"start_date_precision":1,
"end_date":null,
"end_date_precision":0,
"created_at":"2016-01-28T14:19:33.369-11:00",
"updated_at":"2016-03-18T15:29:22.145-11:00"
}

API 6 
api/cv/{id}/contactinfo/{id}



cv {
  id:123,
  user_id:111,
  positions:[{},{}],
  
}

*/
