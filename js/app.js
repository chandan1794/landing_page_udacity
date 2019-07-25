/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// This variable contains data to load on the page
const page_content = [
    {
        header: "About",
        para1: "I am a keen observer of real world problems occurring in daily life and " +
               "then through the knowledge that I have and my skills I try to solve these " +
               "problems as much as possible.",
        para2:  "and also highlight the need for such kind of " +
                "thinking to others around me so as to motivate them to work for a better world.",
    },
    {
        header: "Education",
        para1: "Graduated from Indian Institute of Technology in June 2017, after completing " + 
                "a bachleors degree in Computer Scinece and Engineering. I have scored a CGPA of 7.5 (10 point system)",
        para2: "Done high schooling from Kendriya Vidyalaya Eklinggarh, Udaipur in 2012. Scored a CGPA of 8.8 (10 point system)"
    },
    {
        header: "Experience",
        para1: "Currently working as a Data Scientist and Engineer at GMO Research, Tokyo Office from past 3 months.",
        para2: "Before here I have worked in two startups Sigmoid Analytics (Data Engineer) " + 
               "and PalC Networks Pvt. Ltd. (Full Stack Developer)"
    },
    {
        header: "Hobbies",
        para1: "I love running (25K in 138 minutes), Reading books (Kite Runner <3), Anime (Grave of Fireflies <3), " + 
               "Photography (insta @chandan.purbia) and Photoshop.",
        para2: "I am big time Potterhead, Bojack Horseman and Rick and Morty fan."
    },
];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* @description Creates despaced-lowercased string
* @param {string} str
* @returns {string} Remove all Spaced and Lowercased String
*/
function getIdFromString(str){
    return str.split(" ").join("").toLowerCase();
}

/**
* @description Creates a Section to ingest in the html
* @param {string} header
* @param {string} para1
* @param {string} para2
* @returns {string} A block of HTML codes which when render, generates a section in the html.
*/
function createSection(header, para1, para2){
    return (
        "<section id="+ getIdFromString(header) +" data-nav=" + header + ">" +
        "<div class='landing__container'>" +
        "<h2>" + header + "</h2>" +
        "<p>" + para1 + "</p>" +
        "<p>" + para2 + "</p>" +
        "</div>" +
        "</section>"
    );
}

/**
* @description Creates an item in the navigation bar
* @param {string} header
* @returns {string} A list item which contains the header.
*/
function createNavBarListItem(header){
    return "<li><a class='menu__link' href=#" + getIdFromString(header) +">" + header + "</a></li>"
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Building the menu and Sections

// to store the navbar list, into which list items will be ingested
const navbar_list = document.getElementById("navbar__list");
// to store the container, into which sections with the data will be ingested
const main_container = document.querySelector("main#container");

/**
 * Inserting each data object from the page_content variable and building
 * navigation menu and sections dynamically. 
*/ 
page_content.forEach(function(content) {
    navbar_list.innerHTML += createNavBarListItem(content.header);
    main_container.innerHTML += createSection(content.header, content.para1, content.para2);
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// to store all the navigation items
const menu_links = document.querySelectorAll(".menu__link");
// to store all the sections
const sections = document.querySelectorAll('section');

/**
* @description Function to make the navigation item highlight which is currently in the viewport.
*/
function switchActiveNavItem() {
  // To get the total number of sections present
  let index = sections.length;

  // To find the index of which section the view port is on right now
  while(--index && window.scrollY + 52 < sections[index].offsetTop) {}
  
  // Removing active class from anywhere it was present before
  menu_links.forEach((link) => link.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('your-active-class'));
  // Adding active class to current navigation item
  menu_links[index].classList.add('active');
  sections[index].classList.add('your-active-class');
}

switchActiveNavItem();
window.addEventListener('scroll', switchActiveNavItem);