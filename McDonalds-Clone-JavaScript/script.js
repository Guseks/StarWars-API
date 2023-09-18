// Creating array to store elements I want a listener for. 
const hoverObjects = [];
  

// --------- Run Section --------------


//Styling the body element
styleBody();

 //Function calls to design each section of the page             
 headerSection();
 mainContentSection();
 footerSection();
 
 
 
 //-----------------------------------------


//Adding Eventlisteners to implement hover functionality

  for(element of hoverObjects){
    element.addEventListener (
      'mouseover', (event)=> {
        event.target.style.cursor = 'pointer';
      });
    }



// --------------- Design Functions for sections -------------------

function headerSection (){

  function designHeader(){
    const header = document.createElement('div');
    header.id ='header';
  
    //Styles for the header element
    let styles = [
      {id: 'height', value: '140px'},
      {id: 'margin', value: '-10px'},
      {id: 'display', value: 'flex'},
      {id: 'position', value: 'relative'},
      {id: 'boxShadow', value: 'rgba(0, 0, 0, 0.04) 0px 1px 8px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px'}
      
    ];
    applyStyles(styles, header);
    return header
  }

  function designNavContainerSection(){

    function designNavContainer(){
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
      return navContainer;
    }
    function designMcDonaldsLogo(){
      const mcDonaldsLogo = document.createElement('img');
      mcDonaldsLogo.id = 'mcdonalds-logo';
    
      styles = [
        {id: 'height', value: '105px'},
        {id: 'margin-left', value: '-45px'}
      ];
      applyStyles(styles, mcDonaldsLogo);
      mcDonaldsLogo.src = 'Images/mcdonalds-logo.jpg';
      return mcDonaldsLogo;
    }
    
    function designTopLeftSection(){
      const childElements = [];
    
      const topLeft = designTopLeft();
      childElements.push(...designButtons());
    
      childElements.forEach(element =>{
        addChildElement(topLeft, element);
        hoverObjects.push(element);
      });
      
      function designTopLeft(){
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
        return topLeft;
      }
      
      function designButtons(){
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
    
        addChildElement(button1, designDownArrow());
        return [button1, button2, button3];
      }
      
      function designDownArrow (){
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
        return downArrow;
      }
      
      return topLeft;
    
    }
    
    function designTopRightSection(){
      function designTopRight(){
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
        return topRight;
      }
    
      function designSearchSection(){
    
        const search = designSearch();
        const childElements = [];
        childElements.push(designSearchIcon()),
        childElements.push(designSearchText());
    
    
        childElements.forEach(element => {
          addChildElement(search, element);
          hoverObjects.push(element);
        });
    
        function designSearch(){
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
          return search;
        }
        
        
        function designSearchIcon(){
          const searchIcon = document.createElement('img');
          searchIcon.src = 'Images/search-icon.png';
          applyStyles([{id: 'margin-right', value: '5px'}], searchIcon);
          return searchIcon;
        }
    
        function designSearchText(){
          const searchText = document.createElement('span');
          searchText.textContent = 'Search';
          applyStyles([{id: 'font-size', value: '14px'}], searchText);
          return searchText;
        }
        
        //addChildElement(search, searchIcon);
        return search;
      }
      
      function designLocationSection(){
        
        function designLocation(){
          const location = document.createElement('div');  
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
          return location;
        }
        function designLocationText(){
          const locationText = document.createElement('span');
          locationText.textContent = 'Change your Location';
          applyStyles([{id: 'margin-left', value: '3px'}], locationText);
          return locationText;
        }
        function designGpsIcon(){
          const gpsIcon = document.createElement('img');
        
          gpsIcon.src = 'Images/gps-icon.png';
          return gpsIcon;
        }
  
        const location = designLocation();
        const childElements = [];
        childElements.push(designGpsIcon());
        childElements.push(designLocationText());
        childElements.forEach(element => {
          addChildElement(location, element);
          hoverObjects.push(element);
        });
  
        return location;
      }
  
      function designOrderButton(){
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
        hoverObjects.push(orderButton);
        return orderButton;
      }
  
      const topRight = designTopRight();
    
      const childElements = [];
    
      childElements.push(designSearchSection());
      childElements.push(designLocationSection());
      childElements.push(designOrderButton());
      childElements.forEach(element =>{
        addChildElement(topRight, element);
      });
    
    
    
      
      return topRight;
    }
  
  
    const navContainer = designNavContainer();
    
  
    //Creating collection of Child Elements
    const childElements = [];
  
    childElements.push(designMcDonaldsLogo());
    childElements.push(designTopLeftSection());
    childElements.push(designTopRightSection());
    console.log(childElements);
    
    childElements.forEach(element =>{
      addChildElement(navContainer, element);
    });
    
    return navContainer;
  }
  
  function designNavElementsSection(){
  
    function designNavbar(){
      const navbar = document.createElement('nav');
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
      return navbar;
    }
  
    function designNavElements(){
      const navElements = [];
      const navElementsText = ['Our Menu', 'Download App', `MyMcDonald's Rewards`, 'Exclusive Deals', 'About Our Food', 'Locate', 'Gift Cards'];
      function createNavElements(navElementsText){
        for(element of navElementsText){
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
          navElements.push(navElement);
        }
      }
      
      createNavElements(navElementsText);
      return navElements
      
    }
  
    const navbar = designNavbar();
  
    const childElements = [];
    childElements.push(...designNavElements());
    childElements.forEach(element =>{
      addChildElement(navbar, element);
      hoverObjects.push(element);
    });
  
    for(element of navbar.children){
      applyStyles([{id: 'padding', value: '5px'}, {id: 'margin-right', value: '20px'}, {id: 'font-size', value: '15px'}], element);
    }  
    
    return navbar;
  }



  const childElements = []; 

  const header = designHeader();
  childElements.push(designNavContainerSection());
  
  
  childElements.push(designNavElementsSection());

  childElements.forEach(element =>{
    addChildElement(header, element);
  });

    document.body.appendChild(header);

 
  
}

function mainContentSection(){

  const mainContent = designMainContent();
  const childElements = [];
  
  childElements.push(designHeadline());
  childElements.push(designFoodImage());
  childElements.push(designDescription());
  childElements.push(designBottomSection())
  
  childElements.forEach(element =>{
    addChildElement(mainContent, element);
  });
  
  
  

  function designMainContent (){
    const mainContent = document.createElement('div');
     //Styling mainContent
    styles = [
      {id: 'padding-top', value: '100px'},
      {id: 'display', value: 'flex'},
      {id: 'flex-direction', value: 'column'},
      {id: 'align-items', value: 'center'}
    ];
    applyStyles(styles, mainContent);
    return mainContent;
 
  }

  function designHeadline(){
    const h1 = document.createElement('h1');
    h1.textContent = 'Meet Our Food Experts';
    let styles = [
      {id: 'font-weight', value: 'bold'},
      {id: 'font-size', value: '54px'},
      {id: 'padding', value: '0px'},
      {id: 'margin', value: '0px'},
      {id: 'margin-bottom', value: '20px'}
    ];
    applyStyles(styles, h1);
    return h1;
  }

  function designFoodImage(){
    const foodImage = document.createElement('img');
    foodImage.src = 'Images/food-image.jpg';
    return foodImage;
  }

  function designDescription(){
    const description = designDesc();
    const childElements = [];

    childElements.push(designDescText());
    childElements.forEach(element =>{
      addChildElement(description, element);
    });



    function designDesc(){
      const descElement = document.createElement('div');
      styles = [
        {id: 'font-size', value: '21px'},
        {id: 'width', value: '1170px'},
        {id: 'height', value: '100px'},
        {id: 'padding', value: '0px 12px'},
        {id: 'padding-top', value: '80px'},
        {id: 'display', value: 'flex'},
        {id: 'align-items', value: 'center'},
        {id: 'line-height', value: '22px'}
      ];
      applyStyles(styles, descElement);
      return descElement;
    }
    

    function designDescText(){
      const descText = document.createElement('span');
      descText.textContent = 
      "Our food experts are more than just pros at their craft." + 
      "They are people who care about the food you eat and bring innovation into our kitchens";
      return descText;
    }
    
    return description;

  }

  function designBottomSection(){
    //bottom part of mainContent
    const bottomContainer = createBottomContainer();
    const childElements = [];

    childElements.push(...designCards());
    /*
    childElements.forEach(element =>{
      console.log(element.children)
    });
    */
    childElements.forEach(element =>{
      addChildElement(bottomContainer, element);
    });

    //console.log(bottomContainer);
    function createBottomContainer(){
      const bottomContainer = document.createElement('div');
      styles = [
        {id: 'height', value: '550px'},
        {id: 'width', value: '1170px'},
        {id: 'padding', value: '0px 12px'},
        {id: 'padding-bottom', value: '70px'},
        {id: 'padding-top', value: '50px'},
        {id: 'display', value: 'flex'},
        {id: 'flex-direction', value: 'row'},
        {id: 'column-gap', value: '20px'},
        {id: 'justify-content', value: 'center'},
        {id: 'align-items', value: 'center'}
      ];
      applyStyles(styles, bottomContainer);
      return bottomContainer;
    }
    


    function designCards(){
      const numberOfCards = 3;
      const cards = [];
      const cardTexts = ['Everyday, culinary masters are cooking up new tastes in our kitchens.', 
                        'Get to know our Registered Dietitian Nutritionists who add a different type of value to your meal.',
                        'Meet some of the people who provide the ingredients for your favorite menu items.'];
      const imagePaths = ['chef.jpg', 'cynthia.jpg', 'supplierLetuce.jpg'];
      const headlines = ['Our Chefs', 'Our Dietitians', 'Supplier Stories'];

      const buttonLabels = ['Meet Our Chefs', 'Meet Our Dietitians', 'See Supplier Stories'];

      
      
      //Assumes all cards have a unique image and text. 
      for (let i = 0; i < numberOfCards; i++){
        cards.push(designCard(cardTexts[i], imagePaths[i], headlines[i], buttonLabels[i]));
      }
      

      function designCard(text, path, headline, buttonLabel){
        const card = createCard();
        
        const childElements = [];

        childElements.push(designImage(path));
        childElements.push(designCardHeadline(headline));
        childElements.push(designCardText(text));
        childElements.push(designCardButton(buttonLabel));
        

        childElements.forEach(element =>{
          addChildElement(card, element);
        });

        function createCard(){
          const card = document.createElement('div');
          styles = [
            {id: 'width', value: '380px'},
            {id: 'height', value: '500px'},
            {id: 'display', value: 'flex'},
            {id: 'flex-direction', value: 'column'},
            {id: 'text-align', value: 'left'}
          ];
          applyStyles(styles, card);
          return card;
        }

        function designCardText(text){
          const cardText = document.createElement('span');
          cardText.textContent = text;
          applyStyles([{id: 'font-size', value: '17px'},
          {id: 'margin-top', value: '20px'}], cardText);
          return cardText;
        }

        function designImage(finalPath){
          const image = document.createElement('img');
          console.log(finalPath);
          image.src = `Images/${finalPath}`;
          applyStyles([{id: 'width', value: '100%'}], image);
          
          return image
          
        }

        function designCardHeadline(headlineText){
          const headline = document.createElement('h2');
          headline.textContent = headlineText;
          applyStyles([{id: 'font-size', value: '32px'},
                {id: 'font-weight', value: '700'},
                {id: 'margin-top', value: '30px'},
                {id: 'margin-bottom', value: '0px'}], headline);
          return headline;
        }

        function designCardButton(label){
          const button = document.createElement('button');
          button.textContent = label;
          styles = [
            {id: 'width', value: '140px'},
            {id: 'height', value: '50px'},
            {id: 'border', value: 'none'},
            {id: 'border-radius', value: '3px'},
            {id: 'background-color', value: 'rgb(255, 188, 13)'},
            {id: 'margin-top', value: '40px'},
            {id: 'font-size', value: '15px'}
          ];
          if(label === "Meet Our Dietitians" || "See Supplier Stories")
            styles.push({id: 'width', value: '170px'});
          applyStyles(styles, button);
          
          //Implement Hover functionality on button
          hoverObjects.push(button);
          
          return button;
        }

        return card;
      }
      return cards;
    }
    return bottomContainer;
  }

  addChildElement(document.body, mainContent);
  
}

function footerSection(){
  const childElements = [];
  const footer = createFooter();

  childElements.push(designFooterTop());
  childElements.forEach(element =>{
    addChildElement(footer, element);
  });


  function createFooter(){
    const footerElement = document.createElement('footer');
    //Styling footer element
    let styles = [
      {id: 'height', value: '700px'},
      {id: 'width', value: '1130px'},
      {id: 'margin', value: 'auto'},
      {id: 'padding', value: '30px'},
      {id: 'display', value: 'flex'},
      {id: 'flex-direction', value: 'column'},
      {id: 'padding-bottom', value: '100px'}
    ];
    applyStyles(styles, footerElement);
    return footerElement;
  }

  function designFooterTop (){
    const footerCardContainer = createFooterCardContainer();
    const childElements = [];

    childElements.push(...designFooterCards());
    
    childElements.forEach(element =>{
      addChildElement(footerCardContainer, element);
    });

    function createFooterCardContainer(){
      const footerCardContainer = document.createElement('div');  
      // ---- Styling footerCardContainer
      let styles = [
        {id: 'display', value: 'flex'},
        {id: 'column-gap', value: '80px'},
        {id: 'justify-content', value: 'center'},
        {id: 'padding-bottom', value: '80px'}
      ];
      applyStyles(styles, footerCardContainer);
      return footerCardContainer;
    }
    
    function designFooterCards(){
      const cards = [];
      const textArrayForCards = createTextArrayForCards();

      textArrayForCards.forEach(textArray =>{
        cards.push(footerCard(textArray));
      });

      

      function createTextArrayForCards(){
        const textArray = [];
        const text1 = 'About Us,About Us Overview,Leadership Team,Values In Action,Franchise Info,Recalls & Alerts,Real Estate,Accessibility,Investor Relations,News & Notifications';
        textArray.push(text1.split(','));
        
        const text2 = `Services,Services Overview,Wi-Fi,PlayPlaces & Parties,McDelivery®,Mobile Order & Pay,Trending Now,McDonald’s Merchandise,Family Fun Hub,MyMcDonald's Rewards,McCafé®`
        textArray.push(text2.split(','));

        const text3 = `Community,Community Overview,Meet the 1 in 8,HACER® Scholarships for Hispanic Students,Ronald McDonald House Charities,McDonald’s Asian Pacific American,McDonald’s International,`
                      + `Black and Positively Golden,McDonald’s LGBTQ+`;
        textArray.push(text3.split(','));

        const text4 = 'Contact Us,Contact Us Overview,Gift Card FAQs,Donations,Employment,Customer Feedback,Frequently Asked Questions';
        textArray.push(text4.split(','));

        return textArray;
      }

      function footerCard(textArray){
        const card = createCard();
        const childElements = [];

        childElements.push(...designFooterCardElements(textArray));
        
        childElements.forEach(element =>{
          addChildElement(card, element);
        });

        function createCard(){
          const footerCard = document.createElement('div'); 
          let styles = [
            {id: 'height', value: '450px;'},
            {id: 'width', value: '300px'},
            {id: 'display', value: 'flex'},
            {id: 'flex-direction', value: 'column'},
            {id: 'row-gap', value: '15px'}
          ];
          applyStyles(styles, footerCard);
          return footerCard; 
        }

        function designFooterCardElements(textArray){
          const cardElements = createElements(textArray);
          console.log(cardElements);
          //const headline = cardElements[0];
          //const linkElements = cardElements.splice(1);
          //styleElements(linkElements);
          //styleHeadline(headline);

          function createElements(textArray){
            const cardElements = textArray.map((text, index) =>{
              //First element in each array is the headline for that card
              
              if(isHeadline(index)) {
                const headline = createHeadline(text);
                styleHeadline(headline);                               
                return headline;
              }
              else {
                const element = createElement(text);
                styleElement(element);
                return element;
              }
              
            });
            
            
            
            function isHeadline(index){
              return index === 0;
            }

            function createHeadline(text){
              const h2 = document.createElement('h2');
              h2.textContent = text;
              return h2;
            }

            function  createElement(text){
              const spanElement = document.createElement('span');
              spanElement.textContent = text;
              return spanElement;
            }
            return cardElements;
          }
          function styleElement(element){
            applyStyles([{id: 'font-size', value: '16px'}], element);
            hoverObjects.push(element);
            
          }
          function styleHeadline(headline){
            applyStyles([{id: 'font-size', value: '18px'}], headline);
          }
          return cardElements;
        }
        return card;
       
      }
      return cards;
    }
    return footerCardContainer;
  }

  


  
//TODO ----------- Implement footerBottom --------------------
 
  
  const footerBottom = designFooterBottom();
  //addChildElement(footer, footerCards[1]);

  //Two containers in the bottom part
  addChildElement(footer, footerBottom[1]);
  addChildElement(footer, footerBottom[2]);

  // ---------------------------------------------------------------

  addChildElement(document.body, footer);
   
}


function designFooterBottom(){
  const objectsToLisen = [];


  //First section
  const buttonsIconsContainer = document.createElement('div');
  //styling Container
  let styles = [
    {id: 'height', value: '100px'},
    {id: 'width', value: '100%'},
    {id: 'display', value: 'flex'},
    {id: 'position', value: 'relative'},
    {id: 'border-bottom', value: '1px solid rgb(200, 200, 200)'}    
    //{id: 'padding-bottom', value: '0px'}
  ];
  applyStyles(styles, buttonsIconsContainer);
  const iconsContainer = document.createElement('div');
  const icons = ["Images/facebook.png", 'Images/twitter.png', 'Images/youtube.png', 'Images/instagram.png', 'Images/tumblr.png', 'Images/spotify.png'];

  //Creating and styling the icons. Finishing with adding them to container
  icons.forEach(element =>{
    const icon = document.createElement('img');
    icon.src = element;
    
    applyStyles([{id: 'height', value: '32px'},
                {id: 'width', value: '32px'},
                {id: 'margin-right', value: '16px'}], icon);
    addChildElement(iconsContainer, icon);
    objectsToLisen.push(icon);
                
  });

  

  //Styling the iconsContainer
  applyStyles([{id: 'width', value: '300px'}, {id: 'display', value: 'flex'}], iconsContainer);
  addChildElement(buttonsIconsContainer, iconsContainer);

  const buttonContainer = document.createElement('div');
  //Styling the buttonContainer
  styles = [
    {id: 'width', value: '330px'},
    {id: 'height', value: '42px'},
    {id: 'position', value: 'absolute'},
    {id: 'right', value: '0'},
    {id: 'display', value: 'flex'},
    {id: 'column-gap', value: '30px'}
  ];
  applyStyles(styles, buttonContainer);
  //styling for each image/button
  styles = [
    {id: 'width', value: '130px'},
    {id: 'border-radius', value: '6px'},
    {id: 'padding', value: '2px'},
    {id: 'background-color', value: 'black'}
  ];

  ['Images/appstore.png', 'Images/googleplay.png'].forEach(element =>{
    const image = document.createElement('img');
    image.src = element;
    applyStyles(styles, image);
    addChildElement(buttonContainer, image);
    objectsToLisen.push(image);
    

  });
  
  addChildElement(buttonsIconsContainer, buttonContainer);
  
  
  // ------------ Bottom Section --------------------


  const footerBottom = document.createElement('div');
  //Applying styles to footerBottom
  applyStyles([{id: 'margin-top', value: '60px'}, {id: 'display', value: 'flex'}, {id: 'position', value: 'relative'}], footerBottom);

  // ----- Link section

  const footerBottomLinks = document.createElement('div');
  // Styling for footerBottomLinks container
  styles = [
    {id: 'width', value: '620px'},
    {id: 'padding-right', value: '100px'},
    {id: 'height', value: '100px'},
    {id: 'display', value: 'flex'},
    {id: 'flex-wrap', value: 'wrap'},
    {id: 'column-gap', value: '40px'}
  ];
  applyStyles(styles, footerBottomLinks);
  const elementTexts = 'Privacy (Updated),California Privacy Notice,Terms & Conditions,Accessibility,Do Not Sell or Share My Personal Information,Cookies Settings';
  const elementTextsArray = elementTexts.split(',');

  elementTextsArray.forEach(element =>{
    const spanElement = document.createElement('span');
    spanElement.textContent = element;
    applyStyles([{id: 'font-size', value: '15px'}, {id: 'padding', value: '0'}], spanElement);
    addChildElement(footerBottomLinks, spanElement);
    objectsToLisen.push(spanElement);
  });
  
  addChildElement(footerBottom, footerBottomLinks);

  // -------------- Copyright Section -----------------
  const copyright = document.createElement('div');
  
  //Styling container
  styles = [
    {id: 'height', value: '100px'},
    {id: 'width', value: '315px'},
    {id: 'display', value: 'flex'},
    {id: 'font-size',value: '15px'},
    {id: 'position', value: 'absolute'},
    {id: 'right', value: '0'}
  ];
  applyStyles(styles, copyright);

  const copyrightLogo = document.createElement('img');
  copyrightLogo.src = 'Images/arches-logo_108x108.jpg';
  copyrightLogo.style.height = '30px';

  const copyrightText = document.createElement('span');
  
  
  copyrightText.innerHTML = `&copy; 2017 - 2023 McDonald's. All Rights <br>Reserved`;
  copyrightText.style.paddingLeft = '50px';

  
  

  addChildElement(copyright, copyrightLogo);
  addChildElement(copyright, copyrightText);

  addChildElement(footerBottom, copyright);
  

  return [objectsToLisen, buttonsIconsContainer, footerBottom];
}




// --------------- Help Functions -------------------

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

function styleBody(){
  applyStyles([{id: 'padding-bottom', value: '50px'},
            {id: 'padding', value: '0px'},
            {id: 'color', value: 'rgb(41, 41, 41)'}],document.body);
}


