
  

# luvvWorx

react component framework made with luvv

  

## Examples:

  

### Navbar Generation:

Import the CSS file:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/exampleuser/my-repo@main/styles.css">  
```

  

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