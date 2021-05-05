

var contractInfo = [
					{id: "contract-menu", displayName: "contract details", name: "contract", target:"#contract-dropdown"},
					{id:"0", name:"complete contract", url:"https://nebula.wsimg.com/1a2d2559911a573cc691dd598e48a9b6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"1", name:"agreement", url:"https://nebula.wsimg.com/d565456ce7695707819b00d3dbebae80?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"2", name:"recognition", url:"https://nebula.wsimg.com/84aa06400ed95d6b44746ee9a0b4a43e?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"3", name:"non-discrimination", url:"https://nebula.wsimg.com/aff1b0adef6b246b95071487ff350a0b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"4", name:"district rights" , url:"https://nebula.wsimg.com/e6f0b68cfe98da99803b9a56ccf4eaba?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"5", name:"association rights" , url:"https://nebula.wsimg.com/7af1d0f1d42883b04a070b4a18360759?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"6", name:"organizational security" , url:"https://nebula.wsimg.com/d2b05819ca74dcdf6506781ca39a7f55?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"7", name:"no strike clause" , url:"https://nebula.wsimg.com/635639487001fe812eb39473a33aea6d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"8", name:"transfer" , url:"https://nebula.wsimg.com/a8bbf25578cc247565d8272cc08f7d38?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"9", name:"evaluations" , url:"https://nebula.wsimg.com/371dce984ea93e177ae6dcb323d7200a?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"10", name:"personnel files" , url:"https://nebula.wsimg.com/d045a3ec36934d9d90c40666da3355d7?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"11", name:"public charges" , url:"https://nebula.wsimg.com/30fa6cbeab2a13c860790b132072ef08?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"12", name:"leave of absence" , url:"https://nebula.wsimg.com/ef76ff06e3309a24425462c1ae433ae7?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"13", name:"retirement" , url:"https://nebula.wsimg.com/d354340181f8c3cb0b8c09cb89ce81ed?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"14", name:"work day/year" , url:"https://nebula.wsimg.com/4f58a3bd7a8d97764d4f11f76aa753c2?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"15", name:"class size" , url:"https://nebula.wsimg.com/decaa3d1d0d8dd9141ef7d6ef59f9528?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"16", name:"safety conditions" , url:"https://nebula.wsimg.com/56716b9fedb94695c4802cb61a093fe9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"17", name:"grievance procedure" , url:"https://nebula.wsimg.com/c060e52d0bc17e225f0edb8f37111566?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"18", name:"mileage" , url:"https://nebula.wsimg.com/735c7bb12e886911c2840f9d528f4ed4?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"19", name:"just cause" , url:"https://nebula.wsimg.com/697faa47988d46b728d423b9f4f98f1a?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"20", name:"peer assistance(PAR)" , url:"https://nebula.wsimg.com/874a232117629faf400aa40fd6a8f884?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"21", name:"adult education" , url:"https://nebula.wsimg.com/5b81d4d2b351d88427d64c6ffe7d7456?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"22", name:"summer school" , url:"https://nebula.wsimg.com/0ab58106a711473512315f74ea4c5fe9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"23", name:"shared contract" , url:"https://nebula.wsimg.com/ab0a34e742c90d5f1a3cdd10f9dcb3e0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"24", name:"academic freedom" , url:"https://nebula.wsimg.com/a0b2952590691cd06a13108633337a2b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"25", name:"salaries/benefits" , url:"https://nebula.wsimg.com/fd784c3bbb67cbc64b49bdc16f2c3f54?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"26", name:"statutory/judicial charges" , url:"https://nebula.wsimg.com/cf03317335b7861afb33e7d49057c660?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"27", name:"miscellaneous" , url:"https://nebula.wsimg.com/88c29a37bc0490b4ddda726f9ceca29b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"28", name:"complete meet & negotiate" , url:"https://nebula.wsimg.com/62d3acca92f07037a3c98f7c91351b20?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"29", name:"duration" , url:"https://nebula.wsimg.com/2ca6944cc2e5a0c2ee4d1b77d6b691c0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"a", name:"bargaining unit member salary placement" , url:"https://nebula.wsimg.com/c38bd133810a4c07869f22d96251df84?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"b-1", name:"certificated salary schedule" , url:"https://nebula.wsimg.com/68fa6af8919cf1a784405f92d3037048?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"b-2", name:"development center salary schedule" , url:"https://nebula.wsimg.com/4e16a324b1f2a95716f9a17ecc27a186?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"b-3", name:"child development teacher salary schedule" , url:"https://nebula.wsimg.com/438e8d4a50513d99070cb3ae481390d2?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"b-4", name:"professional growth" , url:"https://nebula.wsimg.com/be13ef37d3586150787b00839ffecdd8?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"c", name:"supplemental salary schedule" , url:"https://nebula.wsimg.com/f53deb909ffc23fb49b286ab4d51cf5a?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"d", name:"observation form" , url:"https://nebula.wsimg.com/effc5cd82fbe37a90c936d30cd036148?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-1", name:"certificated personnel eval non permanent" , url:"https://nebula.wsimg.com/19f3aa25187bd9f41b81bb4d771506b1?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-2", name:"certificated personnel eval permanent" , url:"https://nebula.wsimg.com/ec73b94442c4a7ce6783f174a0bc73d1?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-3", name:"certificated (non-teaching evaluation)" , url:"https://nebula.wsimg.com/f62f70353276d90e3290fa9d027ee949?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-4", name:"school counselor personnel eval non perm" , url:"https://nebula.wsimg.com/d895b0efa7f39d0f56d6b0671f8e788d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-5", name:"school counselor personnel eval perm" , url:"https://nebula.wsimg.com/5572816f87f53d741ce954f23feb612c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-6", name:"nurse personnel eval non perm" , url:"https://nebula.wsimg.com/4d4ebc936961984ba783aa690987fc77?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-7", name:"nurse personnel eval perm" , url:"https://nebula.wsimg.com/f714c0e7e9b719905d4cee494de2d0c9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"e-8", name:"assistance plan document" , url:"https://nebula.wsimg.com/898d1277e15d74a9ee748c902656cdf0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"f", name:"agreement" , url:"https://nebula.wsimg.com/f5cfec16aa4ff988f34c21c2396058d3?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"g", name:"leadership team's policy" , url:"https://nebula.wsimg.com/7e3219e1d401553cff84a144db7631ff?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"h", name:"family leave act" , url:"https://nebula.wsimg.com/095c242fcf6d718d30fedb21c7ae1fe7?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
					{id:"i", name:"peer assistance self referral" , url:"https://nebula.wsimg.com/b6f1727bfc702b762e014ccbc677d52d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"}
						]

var fontananArchives = [
					{id: "archive-menu", displayName: "Fontanan Archives", name: "archive", target: "#archive-dropdown"},
					{month: 'february', year: '2021', url: 'https://indd.adobe.com/view/4d6b96c2-b6d8-48cd-82e4-0633e70f4891'},
					{month: 'january', year: '2021', url: 'https://indd.adobe.com/view/0aa6a0d9-c785-4292-b38c-7aa040ffc3aa'},
					{month: 'october', year: '2020', url: 'https://indd.adobe.com/view/dddf931b-b6c7-4c0a-abc3-385c6cdbed7b', transition: true},
					{month: 'may', year: '2020', url: 'https://indd.adobe.com/view/857e6b03-17e7-478a-8fce-79ab101ec22c'},
					{month: 'march', year: '2020', url: 'https://indd.adobe.com/view/bf7ed062-7dcf-463a-8167-b7a7979a800e'},
					{month: 'february', year: '2020', url: 'https://indd.adobe.com/view/622d08c6-b074-4c5c-a0d6-97652d4a2d0c'},
					{month: 'january', year: '2020', url: 'https://indd.adobe.com/view/6d79fb44-b2b2-4a06-ae54-fcb02789b472'},
					{month: 'december', year: '2019', url: 'https://indd.adobe.com/view/4c944582-2a03-41d7-9593-948e0bd8cf9f'},
					{month: 'november', year: '2019', url: 'https://indd.adobe.com/view/85e99633-7963-45ba-924a-153a59b91bd1'},
					{month: 'october', year: '2019', url: 'https://indd.adobe.com/view/afe819ab-5969-4f73-916b-ff2b3422ce5b'},
					{month: 'september', year: '2019', url: 'https://indd.adobe.com/view/0b54e73d-bbc0-4a46-acb8-b0ac37ffdcde'},
					{month: 'august', year: '2019', url: 'https://indd.adobe.com/view/0f1c570c-acce-475c-8554-80bca2169974', transition: true},
					{month: 'may', year: '2019', url: 'https://nebula.wsimg.com/b317f23b161eb9964a72c1dd4f65888f?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'april', year: '2019', url: 'https://nebula.wsimg.com/8fa2738cfa25354ac0755e5224ae9740?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'march', year: '2019', url: 'https://nebula.wsimg.com/8fe142927e895ec721e0646e29a767f6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'february', year: '2019', url: 'https://nebula.wsimg.com/5f218c13abb6c200459ab53c111b3849?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'january', year: '2019', url: 'https://nebula.wsimg.com/efef0a3b852e647972127e44d03585cf?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'december', year: '2018', url: 'https://nebula.wsimg.com/c0a5fd5ef0f6c19c6804dbbe6569cccb?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'november', year: '2018', url: 'https://nebula.wsimg.com/f70ec633350ccca043b0479189f473b9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'october', year: '2018', url: 'https://nebula.wsimg.com/2b917417f44e6f67a71dfba53cc7f796?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'september', year: '2018', url: 'https://nebula.wsimg.com/49c2516dd69cf2943e571a7d489724a6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'},
					{month: 'august', year: '2018', url: 'https://nebula.wsimg.com/26bff84150a886ea333e5bb37a91a895?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1'}

]

var calendarUrl = [
				"https://nebula.wsimg.com/518cd4c2d9ee267321dcc5dfb1792e4c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", 
				"https://nebula.wsimg.com/a02a54c6c369bc19837afb7b379b4000?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/3d7c983534c782a82991b2ff70ac8d86?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/930b0761fea79f6e4647875b5041d1d0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/b61f0e9acbf9d0bfe9eef9ead4854431?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"
				]

var answerInfo = [
					'https://nebula.wsimg.com/63cc26c968abe9135b977f2f41faa845?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					null, 
					'https://nebula.wsimg.com/c386cf0a2282a78f269108e8fe78fa90?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					'https://nebula.wsimg.com/42de1c962e5c94209c040119d6406887?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					null
					 ]


var overageLink = [
					{url: 'https://nebula.wsimg.com/8d1ae8b9171cdcebfccfad4a4c903cc9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Instructions and Worksheet, Middle - High School'},
					{url: 'https://nebula.wsimg.com/5a8e5c179bdf256ac570cefeadf74b63?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Instructions and Worksheet, Elementary'},
					{url: 'https://nebula.wsimg.com/e417811b42b83f3add8d26f2c22170d5?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Timesheet'}
					]
					

var board = [
			 {name:"Connie Verhulst", occupation:"president", fta_leadership: true},
			 {name:"Robert Basset", occupation:"vice president", fta_leadership: true},
			 {name:"Robb Lash", occupation:"secretary", fta_leadership: true},
			 {name:"Troy Liggins", occupation:"treasurer", fta_leadership: true},
			 {name:"Deborah Garland", occupation:"elementary director", fta_leadership: false},
			 {name:"Margie Brynda", occupation:"elementary director", fta_leadership: false},
			 {name:"Collen Gerke", occupation:"elementary director", fta_leadership: false},
			 {name:"Barbi Maddox", occupation:"elementary director", fta_leadership: false},
			 {name:"Amy Aydin", occupation:"middle school director", fta_leadership: false},
			 {name:"Jodi Dominguez", occupation:"middle school director", fta_leadership: false},
			 {name:"Glennon Poirier", occupation:"high school director", fta_leadership: false},
			 {name:"Mark Schulte", occupation:"high school director", fta_leadership: false}]

var snippet = [
			{id: 0, url: "snippets/home-snippet.html", title: "Home"},
			{id: 1, url: "snippets/about-snippet.html", title: "About Us"},
			{id: 2, url: null, title: "Executive Board"},
			{id: 3, url: "snippets/payroll-snippet.html", title: "FUSD Payroll"},
			{id: 4, url: "snippets/faq-snippet.html", title: "Frequently Asked Questions"},
			{id: 5, url: "snippets/calendar-snippet.html", title: "Calendars"},
			{id: 6, url: "snippets/covid-snippet.html", title: "Covid-19 Information"},
			{id: 7, url: "snippets/benefits-snippet.html", title: "Member Benefits"},
			{id: 8, url: "snippets/eval-snippet.html", title: "Evaluations"},
			{id: 9, url: "snippets/dev-snippet.html", title: "Professional Development" },
			{id: 10, url: "snippets/neg-snippet.html", title: "Negotiations"},
			{id: 11, url: "snippets/grievance-snippet.html", title: "Grievance"}

]

var fttNeg = [
			{id:"ftt-menu", displayName:"From The Table", name: "ftt", target: "#ftt-dropdown"},
			{day: '18', month: "february", url: "https://nebula.wsimg.com/14c506b8e097ef4750489bfc9023032c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false},
			{day: '25', month: "january", url: "https://nebula.wsimg.com/22513d04d47a65fb73d555b5fa342b9d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false, newYear: true},
			{day: '21', month: "october", url: "https://nebula.wsimg.com/4fcc1f2b84899ccc89da5aeb7ccace43?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false},
			{day: '14', month: "october", url: "https://nebula.wsimg.com/79eee5e5715e17df72d253f11cb50604?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false},
			{day: '7', month: "august", url: "https://nebula.wsimg.com/9aad28f88755fcae85606febc65f2ab6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false},
			{day: '17', month: "july", url: "https://nebula.wsimg.com/f88988b5aa35bc0e439067f4372bb9ed?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: false},
			{day: '8', month: "july", url: "https://nebula.wsimg.com/51da2d3123ab4ee44929a6b6528ad22c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: true},
			{day: '26', month:"june", url:"https://nebula.wsimg.com/60271754d9565c7e4adb2470e83688ab?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '27', month:"may", url:"https://nebula.wsimg.com/7fb0190736353550e6251384d056555d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '12', month:"may", url:"https://nebula.wsimg.com/4618c3577caf57315c0fa613278b8714?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '24', month:"april", url:"https://nebula.wsimg.com/9778bb4cf176896dc6ee5e6c1957c784?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false, newYear: true},
			{day: '18', month:"february", url:"https://nebula.wsimg.com/aa408503cbe3a53b2f6d6783d9a61f31?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '1', month:"november", url:"https://nebula.wsimg.com/5599089184266014a276d67f4db0ff2a?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '23', month:"october", url:"https://nebula.wsimg.com/61e00e58cb3230c075174f49e1ca64e6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '27', month:"september", url:"https://nebula.wsimg.com/b98b4e92e06e66a99d7b9d6586facfaf?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '16', month:"september", url:"https://nebula.wsimg.com/d90ca1a8f94d8155069fe492625b727f?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '9', month:"september", url:"https://nebula.wsimg.com/d90396928dc06c4b5ad273194cb55f2b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: true},
			{day: '7', month:"may", url:"https://nebula.wsimg.com/f49c2133044f23ba76dbff7b2ab12ba7?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '26', month:"april", url:"https://nebula.wsimg.com/8a7abef7ceb8efafd04ddd0e5f109b77?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '22', month:"april", url:"https://nebula.wsimg.com/2f8225e6b5ac40962d1312500d78d568?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '18', month:"april", url:"https://nebula.wsimg.com/06c65ca1291284adeb3b5b5547857735?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '22', month:"february", url:"https://nebula.wsimg.com/ad14f3acdf1ad8f3068868499e44eec6?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '4', month:"february", url:"https://nebula.wsimg.com/2a3e52ecb3878bd1d224af07d6c9cf3d?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false},
			{day: '16', month:"january", url:"https://nebula.wsimg.com/5206cbd32c6e5c7aabeea40ee102335b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false, newYear: true},
			{day: '13', month:"december", url:"https://nebula.wsimg.com/751994cbc25be34adce728fc5942b035?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1" , transition: false}
]

var mouNeg = [
			{id: "mou-menu", displayName: "MOU's", name: "mou", target: "#mou-dropdown"},
			{name: "Duration", url: "https://nebula.wsimg.com/c39c4a9ae6b32c05fa1faf8042478366?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "kinder combos", url: "https://nebula.wsimg.com/101992ac9ab6d1d198938d9bc5878b4e?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "elementary sdc", url: "https://nebula.wsimg.com/05cef757832406c393f255a946f4f1d7?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "slp salary schedule", url: "https://nebula.wsimg.com/6fdab35b9689348967e414c89679650c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "innovations", url: "https://nebula.wsimg.com/6a2ef525bbd8c2b0a38377e110d393a9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "special education definitions", url: "https://nebula.wsimg.com/e782ea442b9258da214a1c1a369a63b2?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "early childhood sdc", url: "https://nebula.wsimg.com/f706e59ec6a473f3b9f51807ed21c9dd?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "special education caseload", url: "https://nebula.wsimg.com/29b97e62c7f61acf5c5c2d01e8e13c61?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "unit members w/ spouse employees", url: "https://nebula.wsimg.com/95f2310baeaa6648ef40d6843e6ffcba?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "temp. reduction lifetime benefits", url: "https://nebula.wsimg.com/c14f75aa4ddcb54aa4b6cf8886ebc4e1?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "distance learning 2020", url: "https://nebula.wsimg.com/024101b4efbedb645dec008b954fc182?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "preschool conferences", url: "https://nebula.wsimg.com/8e72ce6745a988e82ef059cc81eb7ebc?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "extra period assignment", url: "https://nebula.wsimg.com/b6fda12146433f8c917cbbb4f259d238?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "early notification", url: "https://nebula.wsimg.com/1a1f7552abd259428f906e251f62dd94?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "student support time", url: "https://nebula.wsimg.com/cc331edadcd9d29c9a1bf624c3674687?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "preschool parent teacher conferences, spring", url: "https://nebula.wsimg.com/3c87a057fa83b8b5459b7d1ba18cc17b?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "elpac testing", url: "https://nebula.wsimg.com/8b88e8022040d81ac72a1e94f5f1b466?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", transition: true},
			{name: "k-6 enrichment", url: "https://nebula.wsimg.com/4abfd3f9391df9e909b63a064af17cc5?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "grade span adjustment", url: "https://nebula.wsimg.com/3b9a032c1b4642c82b71c1be9c2d59d8?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "kinder flex", url: "https://nebula.wsimg.com/6d2ee5556c1a257c266d33c8d6d74b8c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "early retirement", url: "https://nebula.wsimg.com/de721a4d09aec44d76cc9608bf8c1da2?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "k-3 prep", url: "https://nebula.wsimg.com/d43c3670cd52c5893ec3983e66d8c9bf?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "minimum day change", url: "https://nebula.wsimg.com/c0863e1bc8d3f46d3dcff6015172ab8f?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "slp salary schedule", url: "https://nebula.wsimg.com/44f7bd8782d7a64a13447a8933a2e958?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "code to the future", url: "https://nebula.wsimg.com/f00def42cab53e03a387317eea254d71?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "seqouia innovation", url: "https://nebula.wsimg.com/a6306f1c7eddf5c7e34fc4159ed07143?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "covid-19 march shutdown", url: null, transition: true },
			{name: "early notification", url: "https://nebula.wsimg.com/99cd3893c72e15c78e8ed9feee762909?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{name: "additional workdays", url: "https://nebula.wsimg.com/f4f54523b3014c67e9e8e24ea9db86eb?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"}
]

var salSched = [
			{id: "salary-menu", displayName: "Salary Schedule", name: "salary-schedule", target: "#sal-dropdown"},
			{id: 1, name: "186 Day", url: "https://nebula.wsimg.com/678dd054bfc5ea3810016361273e25ec?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{id: 2, name: "193 Day", url: "https://nebula.wsimg.com/3b67fbaf232325279417d12e9201d992?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{id: 3, name: "203 Day", url: "https://nebula.wsimg.com/2e76d8f780217382bc426f6f89d12f72?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{id: 4, name: "Preschool", url: "https://nebula.wsimg.com/92e2f4efdd12ea43e67f046cbbab91ba?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"},
			{id: 5, name: "SLP", url: "https://nebula.wsimg.com/ad334abfda9c95dbbf4cc6835f2ac863?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"}]

var helpInfo = {message: "IF YOU NEED HELP AND ARE NOT SURE WHERE TO START, PLEASE FEEL FREE TO CONTACT CONNIE VERHULST, YOUR UNION PRESIDENT.",
				phone:"(909) 251-5719",
				email:"FTAPRES@FONTANATEACHERS.ORG"}