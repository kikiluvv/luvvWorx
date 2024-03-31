
  

# luvvWorx

react component framework made with luvv

  

## Examples:

  

### Navbar Generation:

#### Import the CSS file:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kikiluvv/luvvWorx/lib/styles/navbar/navbar--main.css">  
```

#### Import Navbar and pass props:
```jsx

import React from  'react';
import  {  Navbar  }  from  'luvvworx';  // Import the Navbar Component
import  './styles/global/colors.css'; // Import the CSS file

function  App()  {

// Define your custom functions here

const  handleLoginClick  =  ()  =>  {
// Define the behavior for login button click
console.log("Login button clicked");
};

const  handleRegisterClick  =  ()  =>  {
// Define the behavior for register button click
console.log("Register button clicked");
};  

return (
 <>
  <Navbar
	// Pass Navbar Props
	menuItems={[
		{  label:  "Home",  href:  "#"  },
		{  label:  "About",  href:  "#"  },
		{  label:  "Services",  href:  "#"  },
		{  label:  "Contact",  href:  "#"  },
	]}
	enableDropdownMenu={true}
	enableNavList={true}
	enableBurgerMenu={true}
	enableRegister={true}
	onRegisterClick={handleRegisterClick}
	onLoginClick={handleLoginClick}
	textColor="text-pink"
	bgColor="bg-black"
	listStyle="circle"
	imgSrc="./path/to/img"
	imgAlt="Img Alt"
  />
 </>
);
}

export  default App;

```

#### Navbar Props:
 - **menuItems**
	 - **label**: Set the text value of the navbar menu/page item
	 - **href**: Set the href link of the navbar menu/page item
 - **enableDropdownMenu**: Boolean to toggle mobile view dropdown menu
 - **enableBurgerMenu**: Boolean to toggle mobile view burger menu
 - **enableRegister**: Boolean to toggle Login/Register buttons
 - **onRegisterClick**: Set custom function for register button click
 -  **onLoginClick**: Set custom function for login button click
 - **textColor**: Set text color from CSS variable
 - **bgColor**: Set background color from CSS variable
 - **listStyle**: Set navbar list style 
 - **imgSrc**: Set path of navbar logo image
 - **imgAlt**: Set alt text of navbar logo image
