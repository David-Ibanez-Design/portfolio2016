<?php
/*
------------------
Language: English
------------------
*/
$current_lang = $lang;
$lang = array();

 // gobale

$lang['GLOBAL_PAGE_TITLE'] = 'David Ibanez web design & web development';

$lang['GLOBAL_WORKS_LIST'] = array('osis','elsa','film' ,'isucare','lsp','lsa-portail','portfolio' );
$lang['GLOBAL_WORKS'] = array(

	'osis' => [
		'name' => 'Osis',
		'class' => 'osis',
		'menu_items' => ['Concept','Design', ''],
		'link' => '',
	],

	'elsa' => [
		'name' => 'ELSA',
		'class' => 'elsa',
		'menu_items' => ['','', ''],
		'skills' => ['HTML 5','CSS 3/Sass', 'jQuery', 'Odoo'],
		'link' => 'http://eti38.mypsx.net:22869/fr_FR/',
	],

	'film' => [
		'name' => 'Ciné chez soi',
		'class' => 'film',
		'menu_items' => ['Concept','', 'Code'],
		'skills' => ['HTML 5','CSS 3/Sass', 'Susy'],
		'link' => 'http://davidibanez.com/projects/films/',
	],

	'isucare' => [
		'name' => 'Isucare',
		'class' => 'isucare',
		'menu_items' => ['Concept','Design', 'Code'],
		'skills' => ['HTML 5','CSS 3/Sass', 'jQuery', 'PHP'],
		'link' => 'http://isucare.com/',
	],

	'lsp' => [
		'name' => 'Labosalem production',
		'class' => 'lsp',
		'menu_items' => ['Concept','Design', 'Code'],
		'skills' => ['HTML 5','CSS 3/Sass', 'AngularJS', 'NodeJS', 'Express', 'MongoDB'],
		'link' => 'http://lsa-prproduction.herokuapp.com/login',
	],

	'lsa-portail' => [
		'name' => 'Labosalem portail',
		'class' => 'lsa-portail',
		'menu_items' => ['','', ''],
		'skills' => ['HTML 5','CSS 3/Sass', 'jQuery'],
		'link' => 'http://davidibanez.com/projects/lsa-portail/',
	],

	'portfolio' => [
		'name' => 'Portfolio',
		'class' => 'portfolio',
		'menu_items' => ['Concept','Design', 'Code'],
		'skills' => ['HTML 5','CSS 3/Sass', 'jQuery', 'PHP'],
		'link' => '',
	],
);

$lang['GLOBAL_SKILLS'] = [

	'HTML 5' => 'html',
	'CSS 3/Sass' => 'scss',
	'jQuery' => 'jquery',
	'PHP' => 'php',
	'Odoo' => 'php',
	'AngularJS' => 'javascript',
	'NodeJS' => 'javascript',
	'Express' => 'javascript',
	'MongoDB' => 'javascript',
	'Susy' => 'scss',
];

// Menu
$lang['MENU_LABEL'] = 'Menu';
$lang['MENU_HOME'] = 'Home';
$lang['MENU_PROJECTS'] = 'Work';
$lang['MENU_CONTACT'] = 'Contact';

// lang

$lang['LANG_EN'] = 'en';
$lang['LANG_JA'] = 'ja';

// HomePage

$lang['HOMEPAGE_TITLE'] = 'Hello !';
$lang['HOMEPAGE_SUBTITLE'] = '3+ years experience in <span class="text-red">Web design & Front-end development</span>';
$lang['HOMEPAGE_TEXT'] = ' I love to design and build clean and elegant websites. You can check out my <a href="works.php?link=osis" class="underline"><span></span>design</a> workflow, see how I build <a href="works.php?link=film" class="underline"><span></span>responsive</a>
			            website using Susy for LibSass, my latest <a href="works.php?link=lsp" class="underline"><span></span>AngularJS</a> project or
			            know more about my modular approach to styling using  <a href="works.php?link=portfolio" class="underline"><span></span>Sass</a>.';
$lang['HOMEPAGE_BTN'] = 'see my resume';

// Contact

$lang['CONTACT_TITLE'] = 'Contact me';
$lang['CONTACT_SUBTITLE'] = 'Send me an email at <span class="resultSubmail text-red" >dibanez@rocketmail.com</span>';
$lang['CONTACT_BTN'] = 'send';

$lang['CONTACT_FORM'] = [

	'labels' => [
		'Name' => ['Name',  'A valid name is required.'],
		'Company' => 'Company',
		'Email' => ['Email',  'A valid Email is required.'],
		'Website'  => 'Website',
		'Message' => ['Message',  'A valid Message is required.'],
	],

	'error_message' => [
		'title' => 'Error !',
		'message' => 'Your message has not been sent',

	],

	'success_message' => [
		'title' => 'Tank you!',
		'message' => 'Your message has been sent successfully',

	],
];

// works

$lang['WORKS_BTN_ONLINE'] = 'see online';
$lang['WORKS_BTN_NEXT'] = 'next project';
$lang['WORKS_BTN_READ'] = 'read more';
$lang['WORKS_BTN_VIEW'] = 'View Work';
$lang['WORKS_LOGO_BACK'] = 'Back to Homepage';
$lang['WORKS_NAV'] = ['Concept', 'Design', 'Code'];

$lang['WORKS'] = [


	'film' => [

		'nav_sunnary' => 'A responsive movie recommendation website build with Susy.',

		'task' => 'Brand & Website Design',

		'sunnary' => 'Ciné chez soi (or theater at home) is an ongoing personal project that combines two of my main passions; movies and web design/web development.
						<span class="para__space"></span>
						I designed the brand and developed the website using Sass and Susy for the responsive grid.',

		'design_sub' => 'Movie Recommendations',

		'design_part_1' => 'This website is a movie recommendation platform aimed at movie-lovers that will provide movie reviews, ratings, summaries, comments, and more. <br><br>
	                      	I wanted the website to be accessible on multiple devices, browsers, and screen sizes and have a clean, movie-poster-centric look. ',
		'design_legende_1' => 'There are desktop and mobile version of the website.',


		'code_sub' => 'Responsive Design with LibSass and Susy',

		'code_part_1' => 'The homepage was developed using <b>HTML</b> and <a>Sass</a>. Because my <a class="link" href="#">Sass workflow</a>includes multiple plug-ins like <a class="link" href="http://bourbon.io/">Bourbon</a>, <a class="link" href="https://github.com/neoeno/libSass-compass-vertical-rhythm">vertical rhythm</a> and Susy, I used <b>LibSass</b> rather than Ruby to compile
	                    Sass into CSS.
	                    LibSass is a c/c++ port of Sass that is up to <a class="link" href="https://www.solitr.com/blog/2014/01/css-preprocessor-benchmark/">4000 times faster than Ruby</a> and is easier to integrate into any project.<br><br>
	                    There are many tools available on the web that I have used in the past to quickly design grid for the web, from CSS framework like <b>Bootstrap</b>, <b>Foundation</b>, to sites like <b>responsive grid System</b>.
	                    The problem with these solutions is that they usually add a large number of classes to my mark-up that is already getting crowded because of my adoption of the <a class="link" href="http://localhost/portfolio/www/portfolio.php#code">BEM convention</a>BEM convention into my workflow which can sometimes produce a bloated codebase that can impact performance.<br><br>
	                    The solution to these problems for me was <a class="link" href="http://susy.oddbird.net/">Susy</a>: a <b>Sass based grid framework</b> that is fast, responsive, lightweight, and enables me to create an entirely customized grid without adding anything to the mark-up.',

		'code_small_sub_1' => 'Setting up the grid',

		'code_part_2' => 'First of all, I created default parameters for the grid in a map sorted in <span class="code">setting.scss</span> scss that contains all of the global settings of the website. Here is how the syntax look:' ,

		'code_part_3' => 'In this map, several global values are defined. The container is set to 100% so that the layout extends to the full width of the page, the number of columns is set to 12 and all the blocks in the website will be a subdivision of that number, gutters value is set to 0 and the box model used is set to border-box.<br><br>
						 Here is the layout that was implemented using the default Susy map value:',

		'code_legende_2' => 'There are desktop and mobile grid version of the website.',

		'code_part_4' => 'As stated previously, each main container is a subdivision of the grids total number of columns. Thanks to the default values set up in the <b>settings file</b>, the block size will be updated automatically if the container size or the number of columns change.',

		'code_small_sub_2' => 'Implementing the grid system',

		'code_part_5' => 'Susy depends entirely on Sass to customize the grid, so there is no need to add anything else to the HTML mark-up. The most important feature for creating grids in Susy is the <span class="code">span</span> mixin.<br><br>
							As you can see from the image above, the main blocks must occupy a specific space inside the 12 columns grid.<br>
							On mobile devices, all of the main blocks extend to the full width of the grid and the header is divided into 2 parts, the logo that takes 4 columns out of 12 and the menu that takes 8 columns.<br><br>
							Here is how the main level grid blocks were implemented with a mobile first method: ',

		'code_small_sub_3' => 'Making it responsive with breakpoint',

		'code_part_6' => 'Although the grid built with Susy is fluid at this stage, the website is still not responsive. To make the layout responsive, I used another mixin,  <span class="code">susy-breakpoint</span>. The Susy-breakpoint mixin makes it easier to handle media queries in the layouts. It does so by simplifying the language needed to create media query breakpoints.<br><br>
						In my <span class="code">settings.css</span> file, I defined a set of default breakpoints by devices:',

		'code_part_7' => 'Those variables are then used inside the <span class="code">susy-breakpoint</span> mixin when needed.<br>
						This is how the main blocks of the homepage layout were modified to include the breakpoints.',

		'code_small_sub_4' => 'Conclusion',

		'code_part_8' => 'Using Susy in this project made me realize how easy and fast it is to create simple or complex layouts with this grid framework without a huge amount of code. This framework will save me time in the future, especially when designing directly in the browser or prototyping a website layout.',
	],


	'lsp' => [

		'wide'	=> 'on',

		'nav_sunnary' => 'An AngularJS Web application.',

		'task' => 'Web Application Design and Development',

		'sunnary' => 'Labosalem production is an online web application for pharmaceutical wholesalers that helps them buy product and manage their orders.<span class="para__space"></span> I designed and built the application using <b>AngularJS</b> and the <b>MEAN stack</b>.',

		'concept_sub' => 'From Website to Web Application',

		'concept_part_1' => 'Laboratoires Salem Production is a website that allows registered wholesalers to buy products sold by Salem Laboratory and track their orders. A previous version of the website, called <b>VM Report</b>, was already in existence for several years, but was not used by the clients, who instead were making orders by phone.<br><br>
							In order to bring the user back to the platform, I was tasked with the <b>re-design and the development</b> of a new version of the current website.<br><br>
							My first step was to identify the major problems with the existing site. What I found was the old version was extremely slow, which meant the process of buying a product was taking too long and the user had to go through too many different steps.  In particular, the main menu itself had up to 10 sub-categories and even an extra level for some.  Further, the interface was too complicated and it was hard to find specific information, the website was not responsive and could not be used on a smaller screen, which left some clients with no choice but to use other means to place an order.<br><br>
							The website was not perceived as a tool that was helping them solve their problems, but as a complicated and slow system that was making the process of buying products and managing their orders tedious and uncertain.<br><br>
							The future website should provide simple, intuitive, and responsive user interfaces that lets users accomplish ordering with less effort and time. The user interaction should be fast, and the process of buying new products should be easy. Ultimately the website should feel more like a web application.',


		'design_sub' => 'Information on Demand',

		'design_part_1' => 'Simplicity is important in user interface (UI) design, the more controls that are displayed on a page, the more time the user will have to spend figuring out how to a complete a specific action. When there is less choice, the available functions become more apparent and are easier to scan.<br><br>
							To make the navigation less confusing, I chose to only display the main categories in the menu:
							',

		'design_list_1' => '<ul class="list_obj">
	        					<li>Dashboard (A collection of the main client information)</li>
	        					<li>Order (Where the user can order products)</li>
	        					<li>My page (Where the user sees all personal information and a collection of previous activities)</li>
	        					<li>Contact</li>
	        				</ul>',

		'design_part_2' => 'To conceal additional information available inside the page, I used a simple tab system. Additional information can then be retrieved by clicking on the action button which will open a new pop-up window. ' ,



		'design_part_3' => 'Using this method, information, while still visible, is only fully displayed when the user needs it, resulting in a more simplified and user-friendly experience.<br><br>
							To focus the visitor\'s attention, I used color contrast and proportion differences between elements. Orders or messages are in a small white box, and information with denser data are displayed in a larger, darker box.',

		'design_legende_2' => 'A zoning of the dashboard',

		'design_legende_3' => 'The final design',

		'code_sub' => 'Building a Fast and Responsive Front-End',

		'code_part_1' => 'I chose AngularJS as the front-end framework for its two-way data binding abilities. This way of handling data allows for an easier and faster UI interaction.<br><br>
						A good example of this principle is the order page.',

		'code_legende_1' => 'Thanks to the power of two-way data biding, information is updated in real-time giving instant feedback to the user.',

		'code_part_2' => 'For the server side, I used the three other parts of the four main components of the MEAN stack:',

		'code_list_1' => '<ul class="list_obj">
	        					<li>MongoDB as the database</li>
	        					<li>Express as the web framework</li>
	        					<li>AngularJS as the front-end framework</li>
	        					<li>NodeJS as the server platform</li>
	        				</ul>',

		'code_part_3' => 'In addition to providing all the advantages of a SPA, the MEAN stack offers other benefits. Whereas the <b>LAMP stack</b> is based on several different languages, the MEAN stack is a full JavaScript stack making programming MEAN-based applications significantly easier to use. NodeJS is also faster and more scalable than other server side technologies, including LAMP, due to its non-blocking architecture.',

		'code_small_sub_1' => 'MEAN stack example: The invoices',

		'code_part_4' => 'Invoices are created each time an order is made through the application, and they are stored in the MongoDB database so they can be reviewed later. Like any parts of the application, the invoice is a module with the following structure:<br><br>

                      				Invoices<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;view<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoices.html<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;controller.js<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;factory.js<br><br>

                      				The folder <span class="code">view</span> contains all the invoice HTML templates.<br><br>
                      				The <span class="code">controller.js</span>file is in charge of fetching data from the factory and sending it to the view via its scope.',

		'code_part_5' => ' The <span class="code">factory.js</span> file uses the <span class="code">$ressource</span> object to retrieve data from a specific URL.<br><br>',

		'code_part_6' => 'On the server side, data is requested to the MongoDB database by using Mongoose. Mongoose is an object modelling tool designed to help translate the database data into JavaScript objects, which can then be used in the application.',

		'code_part_7' => 'Using this method, each part of the application is divided into individual modules (orders, invoices, login, notifications, etc.) making the code more scalable and maintainable. Data and business logic that are shared across multiple modules are stored inside services.',

		'code_small_sub_2' => 'The tab module',

		'code_part_8' => 'One of the main ways to display data on the application (as seen in the design part of this post) is the tab system. Since it is used often throughout the application, and with a lot of different data, I wanted to build a modular tab system that can be added to, removed, modified, and displayed easily using a set of simple HTML attributes.<br><br>
						  Using Angular\'s custom directive, the HTML code below will display one block containing three tabs: orders, stocks and messages, along with their corresponding data.',

		'code_part_9' => 'This tab module is divided into two main parts, the structure of the tab itself and the tab and the data itself. The right structure is loaded using the  <span class="code">module</span> directive, based on the <span class="code">structure</span> argument value provided in the HTML mark-up (structure="tab"). The data that needs to be loaded inside each tab block is identified from the argument <span class="code">content</span> and stored inside an array called  <span class="code">TabsData</span>.',

		'code_part_10' => 'The template <span class="code">tab</span> displays the tab structure and names and then makes a call using <span class="code">ng-include</span> to the data template.',

		'code_part_11' => 'The front-end build process includes the use of Grunt for automated tasks, like process Sass files, runs a development server, and concatenate and minify files for better performance.',

	],


	'osis' => [

		'nav_sunnary' => 'Brand and website design for an IT company.',

		'task' => 'Brand & Website Design',

		'sunnary' => 'Osis is a French IT service company specializing in open sources technologies.<span class="para__space"></span> I designed their brand and website with the aim of promoting the company\'s work and helping them gain more exposure in the marketplace.',

		'concept_sub' => 'Define the Brief',

		'concept_part_1' => 'The first thing I did for this project was to determine what exactly the project goals were.<br><br>
							What is the purpose of the project? What problems am I trying to solve? I wrote this out in a document called <b>The Brief</b>. The goals of the project were to create an online profile to promote the company\'s work and obtain more exposure. It needed to show what type of services it offered, display past or ongoing work, and have a way for people to contact the company easily. At this point, I simply figured out the ultimate goal of the project. I recorded these and referred back to them in later stages of the project to ensure that it was on the right track.',

		'design_small_sub_1' => 'Research and idea generation',

		'concept_part_2' => 'After the project’s goals had been decided upon, and before beginning the design, I spent some time doing research.<br><br>
							I usually start by identifying the company\'s top five competitors. How do they emphasize their value proposition? How do their prices compare? Answering these questions helps in creating a brand that will have a better chance of being successful. Once I roughly establish a direction as to where the brand should go, I conducted more research, but this time aimed at generating creative ideas. Sometimes I might look at other sites for inspiration, but sometimes not looking at what other designers have done is best.<br><br>
							Instead, I like to brainstorm my own solutions to the problem at hand. All is needed at this stage is a pen, a sketchbook, and my thoughts.',


		'design_sub' => 'Designing the Brand',

		'design_part_1' => 'The brand of a company is basically the visual language that describes it and that determines how others see it. <br><br>
                        According to the brief, the brand image needed to convey a strong memorable look and feel.
                        The client wanted to use a white bear as the brand mascot for it strong and wild image, that was fitting a certain idea of Open source.
                        With that idea in mind I started by looking for all sorts of white bear images for inspiration and end up selecting a few as my guide. I them sketched some ideas and experimented with typography and letter arrangement before deciding on the final logo (which I drew in Adobe Illustrator).',

		'design_legende_1' => 'As part of the company\'s branding, I was also asked to design business cards and various corporate documents.',

		'design_small_sub_2' => 'Thinking about content',

		'design_part_2' => 'When designing a website, one of the first things that needs to be decided upon is the content, because for most projects this will determine the design.<br><br>
							What information needs to be conveyed to the visitors? Should a given point be written as simple text, or would it make more sense as an image or a diagram? At this point in the project, I needed to think about the message and how to convey it. Therefore, I asked the client to provide me with the content early on and wrote a draft, which I broke down into six main parts: home page introduction, services description, projects, a partners list, and the company\'s contact details.',

		'design_small_sub_3' => 'Wireframe',

		'design_part_3' => 'From the content gathered earlier, it was clear that the client wanted a brochure website that outlined their services and provided potential customers with an easy way to contact them.<br><br>
							I decided to go with a simple one-page website broken into five sections, as seen in the sitemap above. Clicking on a link in the top navigation bar would slide the user down to the appropriate section of the page. I sketched out wireframes for each section of the site to block out the basic elements and to give me some blueprints to work from.<br><br>
							The approach I take to wireframes is simple but effective, and all I need at this stage is a pen and sketchbook. I first list all of the elements to include on a web page. I then group related elements, before prioritizing these groups according to importance. Once the page\'s elements are grouped and prioritized, arranging them on the page is much easier. More important elements are placed towards the top of the page, and white space is used to create groupings.',

		'design_legende_1' => 'A sketch of the website\'s content hierarchy.',

		'design_legende_2' => 'A block out of the site\'s basic elements',

		'design_small_sub_4' => 'High quality mock-up in Photoshop',

		'design_part_4' => 'Once the desktop wireframes were sketched, I moved into Photoshop and started a mock-up of the website in more detail.<br><br>
							Because this project was a one-page website, I designed all of the five different sections using Photoshop, but usually I try to not spend much time in this program as it slows down the development process. Instead, I simply mock-up the main page templates, along with any other design elements and assets that will be needed. Similarly, I did not mock-up any mobile or tablet designs in Photoshop, because I find that simply coding these based on the wireframes to be quicker.',

	],

	'portfolio' => [

		'wide'	=> 'on',

		'nav_sunnary' => 'Responsive, cross-browser portfolio built with Sass.',

		'task' => 'Brand & Website Design / Development',

		'sunnary' => 'My portfolio was designed and built with an emphasis on content to showcase my past and current work.<span class="para__space"></span> The article below details the workflow I used to manage the website styles using <b>BEM, OOCSS and SMACSS for Sass</b>.',

		'concept_sub' => 'Making the Content Matter',

		'concept_part_1' => 'A professional portfolio is a necessity for anyone working in the creative industry. It is a good opportunity to show my work in a medium that actually showcases the work I really do: web design and web development. In building my portfolio, my main goal was to create a simple design that would facilitate the work of a potential employer who wishes to form a quick impression.<br><br>
							The portfolio site itself should fade into the background and act as a frame for the work I am presenting. Therefore, like for most websites in general, the <b>content should be king</b>, with beautiful images and texts that should be accessible regardless of the screen size, or browser it is viewed on.',

		'design_sub' => 'Visual Simplicity',

		'design_part_1' => 'I chose colors that will give the website a high contrast in order to bring focus to the content.',

		'design_legende_1' => 'Color palette of the website.',

		'design_part_2' => 'All of the pages of the website follow the same layout principle. They are divided into two sections; one side is shows additional information, the other, the main information of the page. This principle is then to decline on the different pages to avoid repetition.<br><br>
							For example, the Homepage is divided into two parts and the main content is emphasized using color contrast. On the contact page, a focal point is created by using proportion differences, the main content being larger than the additional information.<br><br>
							These design choices allow me to build simple, but well organized, pages that emphasize the content while also allowing for a more modular approach when developing the website.',

		'design_legende_2' => 'An example of user interaction: the contact form.',

		'cod_sub' => 'A Modular Approach',

		'code_part_1' => 'If content is king for a web designer\'s perspective, for a web developer, however, some may argue that <b>speed is king</b>. Unfortunately, CSS is often overlooked in this area while many front-end developers focus largely on JavaScript performances.<br><br>
						To help improve my CSS development process, for this project I decided to try a different approach to Styling using some of the most popular methods for writing <b>modular HTML and CSS</b> the <a href="http://getbem.com/naming/" class="link">BEM</a> method (Block, Element, Modifier), the <a href="https://github.com/stubbornella/oocss/wiki" class="link">OOCSS</a> method (Object oriented CSS) and the <a href="https://smacss.com/" class="link">SMACKS</a> method (Block, Element, Modifier). I used these methodologies along with SCSS.',

		'code_small_sub_1' => 'BEM',

		'code_part_2' => 'The BEM methodology is all about modularity, each element of the page that is used more than once can become a module. To become a module, an element needs to be structured and styled in a specific way:<br>',

		'code_list_1' => '<ul class="list_obj">
		                    <li> Containers need to be separated from the module itself, so that it can be moved anywhere on the page without breaking the layout.</li>
		                    <li> The classes name needs to reflect the function of the element and must follow the <a href="#" class="link">BEM</a> naming convention.</li>
		                  </ul>',

		'code_part_3' => 'The container <span class="code">wrapper__lang--left</span> position the module block <span class="code">Lang</span> in the page. It is styled separately from the module itself so it can be used in different contexts. The module lang elements are named according to their function and preceded by a double underscore <span class="code">__dropdown</span>. The modifier of an element is marked by a double dash followed by its name  <span class="code">--items</span>.<br><br>
						Using SCSS, the module styles are then stored in a SCSS file simply called lang that is organized according to the module HTML structure.',

		'code_part_4' => 'All of the JavaScript code that affects that element is also organized in a file called lang. The module is, therefore, self-contained and can be added, removed, or modified easily without breaking the layout or the code, allowing for a more flexible, scalable, and maintainable code.',

		'code_small_sub_2' => 'OOCSS',

		'code_part_5' => 'As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.<br><br>
						OOCSS is based on one main principle, the  <b>separation of skin and structure</b>. Almost every element on a styled web page has different visual features (“skins”) that are repeated in different contexts. For example, the color or the text styles. When these features are abstracted into class, they become reusable and can be applied to any element and have the same basic result. When developing my portfolio, I used this principle for many elements like the colors, the buttons, the headlines, etc<br><br>
						For example, here is how the paragraphs styles are defined:',

		'code_part_6' => 'All of the styles are contained inside a class "para", which is itself a module, all of the different font sizes are stored as an element of that module, and the color variations of a specific size are stored as a modifier. The common styles are combined into a reusable “skin” and nothing is unnecessarily repeated. I just need to apply the “skin”, for example the class <span class="code">para__large--dark</span> to all the elements and the result will be the same.',

		'code_small_sub_3' => 'SMACSS',

		'code_part_7' => 'At the very core of SMACSS is a way to categorize CSS rules. For this project I used six types of categories:',

		'code_list_2' => '<ul class="list_obj">
			                 <li><span class="code">Base</span></li>
			                 <li><span class="code">Layout</span></li>
			                 <li><span class="code">Elements</span></li>
			                 <li><span class="code">Module</span></li>
			                 <li><span class="code">Settings</span></li>
			                 <li><span class="code">State</span></li>
			                 <li><span class="code">Vendors</span></li>
			               </ul>',


		'code_part_8' => 'The purpose of this categorization is to identify patterns that repeat themselves within the design, therefore, limiting repetition resulting in less code, easier maintenance, and greater consistency in the user experience. My workflow was powered by Grunt.js to provide automated tasks such as SCSS preprocessing, image and SVG optimization. I also used <b>require.JS</b> to organize and optimize my JavaScript files.',

		'code_small_sub_4' => 'Conclusion',

		'code_part_9' => 'Thanks to this project, I was able to explore modularity using principles like <b>OOCSS, SMACSS and BEM</b> and take advantage of <b>SCSS</b> to create better organized stylesheets. This new approach to CSS styling will be particularly useful in future large-scale projects.',

	],


	'elsa' => [

		'nav_sunnary' => 'An E-Commerce website designed and built with Odoo ERP/CRM.',

		'task' => 'Website Design',

		'sunnary' => 'ELSA is an E-Commerce website that sells pharmaceutical products to professionals for Salem Laboratory.<span class="para__space"></span> I was in charge of designing and developing the website using Odoo EPR/CRM for the back-end.',

		'design_legende_1' => 'A sketch of the Homepage structure',

		'design_legende_2' => 'A sketch of the products list structure',

		'design_sub' => 'Website design',

		'design_part_1' => 'I worked with the client to decide upon the site structure and content. The sitemap was purposely kept small and shallow to ensure that the website was easy to navigate.<br><br>
						The project had two goals: allow the visitor to buy various products sold by Salem Laboratory and introduce the company to the users. After meeting with the client, I started looking for a different kind of structure than the traditional product list/Slider used in most E-Commerce website. Rather than showing a list of products right away, I was looking for a way to show only important information, like the latest promotions or the newest products so that there would be enough space left for a proper introduction of the company.<br><br>
						Once the client was happy with the initial direction, I moved into Photoshop to create the high fidelity mock-up.',

		'design_legende_2' => 'The Homepage mockup',

		'design_part_2' => 'On the product list page, additional space was reserved to promote specific products, show the latest product and promotions, and provide direct access to the shopping cart. Products can be accessed by categories and a search bar is present at the top of the product list allowing for a fast and easy search for a specific product.',

		'design_legende_3' => 'The products list mockup',

		'design_legende_4' => 'The shopping cart page mockup',

		'design_sub' => 'Development',

		'design_part_3' => 'The client was already using Odoo for other parts of its business and wanted the ELSA website to be integrated into that pre-existing infrastructure.<br><br>
						Therefore, the website was developed using <a class="link" href="https://www.odoo.com/">Odoo</a> for the back-end and HTML and CSS/Sass for the front-end. Odoo is an open source <b>ERP/CRM</b> with E-Commerce capabilities that is based on <b>Python, XML, javascript</b> and the Odoo\'s own templating engine language <b>Qweb</b>.',

	],

	'isucare' => [

		'nav_sunnary' => 'A product brochure website for Salem laboratory.',

		'task' => 'Website Design & Development',

		'sunnary' => 'Isucare is a high performance blood glucose monitoring device, sold by Salem laboratory.<span class="para__space"></span> In order to promote the product, I was tasked with the design and development of a brochure website.',

		'concept_legende_1' => 'A sketch of the website content hierarchy',

		'concept_legende_2' => 'A detail sketch of the website layout',

		'concept_sub' => 'Creating a template',

		'concept_part_1' => 'As part of the design and development team, my task was to help create the first product website of Salem Laboratory\'s product lineup: Isucare, a blood glucose monitoring device.<br>
						Since the website was to be one of a series of other product websites, we decided that in order to create a homogeneous visual identity and facilitate the development process, Isucare would serve as a template for all of the other product websites.',

		'design_sub' => 'Planning the Website',

		'design_part_2' => 'When designing the website, one of the first things we did was decide upon the content. What are we trying to say with the website? Once we established the purpose of the website, we set out to find the most effective way to deliver the message.<br><br>
						It was clear that the client wanted a brochure website that outlined the product’s benefits, line-up, and provided the potential customer with an easy way to contact them. We decided to go with a one-page website divided into three parts, as seen in the site map above. Clicking on one link will slide the user down to the right section of the page.',

		'code_sub' => 'Putting it all together',

		'code_part_1' => 'The website was developed using <b>HTML/CSS, JavaScript</b> for the front-end and <b>PHP</b> for the back-end. I used the jQuery plug-in <a class="link" href="http://alvarotrigo.com/fullPage/#secondPage">Fullpage.js</a> to create the full page scrolling effect.',

	],

	'lsa-portail' => [

		'nav_sunnary' => 'A corporate website for Salem laboratory.',

		'task' => 'Website Design & Development',

		'sunnary' => 'Labosalem Portail is Salem Laboratory\'s corporate website that helps inform and guide users to the company\'s other websites.<span class="para__space"></span> I designed and developed it using HTML, CSS/Sass and JavaScript.',

		'concept_sub' => 'The project',

		'concept_part_1' => 'I was tasked with the design of a portal website for Salem Laboratory which aimed to inform and direct users to other various websites of the group.<br><br>
						Customers could be basically divided into four groups; the doctors, the wholesalers, the pharmacist, and the clients. Professionals, like the pharmacists or the wholesalers, need to access the company\'s one-line retail platform, whereas clients and doctors should be directed to the corporate and products website.',

		'concept_part_2' => ' To achieve these goals, I opted for a one-page layout website divided into four sections. One of those sections allows users to choose a profession, they are then presented with specific content based on that choice.',

	],

];





?>