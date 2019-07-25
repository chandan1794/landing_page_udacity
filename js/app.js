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
        header: "Section 1",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        para2: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        header: "Section 2",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        para2: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        header: "Section 3",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        para2: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    },
    {
        header: "Section 4",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        para2: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
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
  // Adding active class to current navigation item
  menu_links[index].classList.add('active');
}

switchActiveNavItem();
window.addEventListener('scroll', switchActiveNavItem);