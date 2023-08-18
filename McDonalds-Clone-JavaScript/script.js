//Function to apply styles, input element to style and array of style objects
//object Format: {id: 'property', value: 'desired value'}
function applyStyles(array, element){
  array.forEach(styleObj => {
    element.style[styleObj.id] = styleObj.value;
  });
}

function addChildElement(parentElement, element){
  parentElement.appendChild(element);
}
  
//Putting code to make each segment of the page into a function to increase readability

function designHeader (){
  
  const header = document.createElement('div');
  header.id ='header';

  //Styles for the header element
  let styles = [
    {id: 'height', value: '140px'},
    {id: 'margin', value: '-10px'},
    {id: 'display', value: 'flex'},
    {id: 'position', value: 'relative'},
    {id: 'boxShadow', value: 'rgba(0, 0, 0, 0.04) 0px 1px 8px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px'},
    {id: 'font-family', value: 'Speedee, Roboto, Arial'}
  ];
  applyStyles(styles, header);
 /* 
  header.style.height = '140px';
  header.style.margin = '-10px';
  header.style.display = 'flex';
  header.style.position = 'relative';
  header.style.boxShadow = 'rgba(0, 0, 0, 0.04) 0px 1px 8px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px';
  */

  const navContainer = document.createElement('div');
  navContainer.id = 'nav-container';

//Styles for navContainer

  styles = [
    {id: 'width:', value: '65%'},
    {id: 'padding-right', value: '50px'},
    {id: 'display', value: 'flex'},
    {id: 'margin', value: 'auto'},
    {id: 'height', value: '100px'}
  ];

  applyStyles(styles, navContainer);

  //Adding all the elements to the navContainer
  //Starting with the Logo

  const mcDonaldsLogo = document.createElement('img');
  mcDonaldsLogo.id = 'mcdonalds-logo';

  styles = [
    {id: 'height', value: '105px'},
    {id: 'margin-left', value: '-45px'}
  ];
  applyStyles(styles, mcDonaldsLogo);
  mcDonaldsLogo.src = 'Images/mcdonalds-logo.jpg';

  addChildElement(navContainer, mcDonaldsLogo);

  //Adding the top left section of elements
  const topLeft = document.createElement('div');
  topLeft.id ='top-left-section';
  styles = [
    {id: 'width', value: '400px'},
    {id: 'height', value: '40px'},
    {id: 'margin-left', value: '50px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ];

  applyStyles(styles, topLeft);
  
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');
  button1.textContent = 'Language';
  button2.textContent = 'Sign up for Email';
  button3.textContent = 'Careers';
  
  
  styles = [
    {id: 'font-size', value: '13px'},
    {id: 'text-align', value: 'center'},
    {id: 'padding', value: '5px 10px'},
    {id: 'margin-right', value: '15px'},
    {id: 'border', value: 'none'},
    {id: 'background-color', value: 'white'}
  ]
  applyStyles(styles, button1);
  applyStyles(styles, button2);
  applyStyles(styles, button3);

  const downArrow = document.createElement('i');
  styles = [
    {id: 'border',value: 'solid #292929'},
    {id: 'border-width', value: '0 1px 1px 0'},
    {id: 'display', value: 'inline-block'},
    {id: 'padding', value: '0.8mm'}, 
    {id: 'margin-bottom', value: '2px'},
    {id: 'margin-left', value: '8px'},
    {id: 'transform', value: 'rotate(45deg)'},
    {id: '-webkit-transform', value: 'rotate(45deg)'}
  ];
  applyStyles(styles, downArrow);
  addChildElement(button1, downArrow);


  addChildElement(topLeft, button1);
  addChildElement(topLeft, button2);
  addChildElement(topLeft, button3);
  
  //Top Right section
  const topRight = document.createElement('div');
  topRight.id = 'top-right-section';

  styles = [
    {id: 'width', value: '400px'},
    {id: 'height', value: '40px'},
    {id: 'margin-left', value: '130px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ]
  applyStyles(styles, topRight);

  //search button
  const search = document.createElement('div');
  styles = [
    {id: 'position', value: 'relative'},
    {id: 'height', value: '25px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'padding', value: '2px 5px'},
    {id: 'margin-right', value: '20px'},
    {id: 'font-size', value: '14px'}
  ];
  applyStyles(styles, search);
  
  const searchIcon = document.createElement('img');
  searchIcon.src = 'Images/search-icon.png';
  applyStyles([{id: 'margin-right', value: '5px'}], searchIcon);
  addChildElement(search, searchIcon);
  
  const searchText = document.createElement('span');
  searchText.textContent = 'Search';
  applyStyles([{id: 'font-size', value: '14px'}], searchText);
  addChildElement(search, searchText);
  addChildElement(topRight, search);
  
  //Change your Location
  const location = document.createElement('div');
  const gpsIcon = document.createElement('img');
  const locationText = document.createElement('span');
  
  
  gpsIcon.src = 'Images/gps-icon.png';
  addChildElement(location, gpsIcon);
  locationText.textContent = 'Change your Location';
  applyStyles([{id: 'margin-left', value: '3px'}], locationText);
  addChildElement(location, locationText);

  //styling location
  styles = [
    {id: 'height', value: '25px'},
    {id: 'text-align', value: 'center'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'text-decoration', value: 'underline'},
    {id: 'padding', value: '2px 5px'},
    {id: 'margin-right', value: '20px'},
    {id: 'font-size', value: '13px'},
    {id: 'color', value: 'rgb(0, 107, 174)'}
  ];

  applyStyles(styles, location);
  addChildElement(topRight, location);

  //Order button
  const orderButton = document.createElement('div');
  orderButton.textContent = 'Order now';
  styles = [
    {id: 'width', value: '120px'},
    {id: 'height', value: '40px'},
    {id: 'background-color', value: 'rgb(255, 188, 13)'},
    {id: 'font-size', value: '15px'},
    {id: 'border', value: 'none'},
    {id: 'border-radius', value: '4px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'},
    {id: 'justify-content', value: 'center'}
  ];

  applyStyles(styles, orderButton);
  addChildElement(topRight, orderButton);
  addChildElement(navContainer, topLeft);
  addChildElement(navContainer, topRight); 

  const navbar = document.createElement('nav');
  const navElements = ['Our Menu', 'Download App', `MyMcDonald's Rewards`, 'Exclusive Deals', 'About Our Food', 'Locate', 'Gift Cards'];

  function createNavElements(navElements, navbar){
    for(element of navElements){
      const navElement = document.createElement('a');
      navElement.textContent = element;
      if(element === 'Our Menu'){
        const arrow = document.createElement('i');
        styles = [
          {id: 'border',value: 'solid #292929'},
          {id: 'border-width', value: '0 1px 1px 0'},
          {id: 'display', value: 'inline-block'},
          {id: 'padding', value: '0.8mm'}, 
          {id: 'margin-bottom', value: '2px'},
          {id: 'margin-left', value: '8px'},
          {id: 'transform', value: 'rotate(45deg)'},
          {id: '-webkit-transform', value: 'rotate(45deg)'},
          {id: 'border-color', value: 'black'}
        ];
        applyStyles(styles, arrow);
        addChildElement(navElement, arrow);
      }
      addChildElement(navbar, navElement);
    }
  }
  createNavElements(navElements, navbar);
  //adding styles for the nav elements inside the navbar
  for(element of navbar.children){
    applyStyles([{id: 'padding', value: '5px'}, {id: 'margin-right', value: '20px'}, {id: 'font-size', value: '15px'}], element);
  }  
  //Applying styles to the navbar itself
  styles = [
    {id: 'width', value: '880px'},
    {id: 'position', value: 'absolute'},
    {id: 'bottom', value: '30px'},
    {id: 'left', value: '530px'},
    {id: 'display', value: 'flex'},
    {id: 'align-items', value: 'center'}
  ]
  applyStyles(styles, navbar);
  addChildElement(navContainer, navbar);
  addChildElement(header, navContainer);
  document.body.appendChild(header);

  // Creating array to store elements I want a listener for. 
  const objectsToLisen = [location, search, orderButton, mcDonaldsLogo, button1, button2, button3, ...navbar.children];
  
  return objectsToLisen;
  
}

function designMainContent (){
  const objectsToLisen = [];
  return objectsToLisen;
}

//Defining array of objects to implement Eventlistener for hover functionality
//Will add elements into this array from each section of the page.
 const hoverObjects = designHeader();
 
 hoverObjects.push(...designMainContent());
 
 

//Adding Eventlisteners to implement hover functionality

  for(element of hoverObjects){
    element.addEventListener (
      'mouseover', (event)=> {
        event.target.style.cursor = 'pointer';
      });
    }

  

  

  
    
  







