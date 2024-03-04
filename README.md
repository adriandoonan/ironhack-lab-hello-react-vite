![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Hello React

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Set up a new React app and run it in development mode.
  - Create and render React function component.
  - Use JSX to render content within a React component.
  - Import and render images in a React component.

  <br>
  <hr> 

</details>

## Introduction

We just learned the basics of React and JSX. We saw how to create a new React app using Vite. In this exercise, we will practice what we just learned by creating a simple landing page (hopefully with some styles :blossom:).

<!--  ![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3e87cc1f09c32a09911a65d94c1bd4f0.png) -->

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

## Instructions

### Iteration 1 | Create a New React App

Let's get this party started! First, you will need to create a new React app.

Navigate to the root folder of the LAB. When you're in the root folder, use Vite (`vite`) to create a new React project. 

Once you have created the app, navigate to the root folder of the app. From here, run the app in development mode and open it in the browser.



if you need help recalling which command to run, you can refer to the previous lesson or consult the Vite Documentation here: [Vite - Getting Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

<br>

### Iteration 2 | Prepare the app

Now that you have created the app let's update the `App.jsx` to remove the content generated by Vite. Update the `App` component to get the following structure:

```jsx
// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
```

<br>

### Iteration 3 | Download the assets

To create the landing page we will need a few images.

Download the following images and save them in the `src/assets/` folder:

<details>
  <summary>Click here for the URLs</summary>

  <hr>

<img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs-dark.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png
```

<br>

<img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs-dark.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png
```

<hr>

</details>

<br>

### Iteration 4 | Landing Page

Finally, let's create our landing page. Using the assets that you downloaded in the previous iteration recreate the following landing page:

<!-- ![home](https://user-images.githubusercontent.com/23629340/43718926-863a3c7a-998c-11e8-803b-7c9bc87425bb.png) -->

<details>
  <summary>Click here to see the image</summary>

  <hr>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_2c5c24ee05aa5fa68a76eee564ad44ee.png)

</details>

For now, don't worry about creating more than one component, we will cover that in the following lessons!

**Happy Coding!** :heart:

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module 'Node.js'". How can I resolve it?</summary>

  <br>

  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

  There are a few things you can try to resolve the issue:

  1. **Dependencies are not installed**: Make sure that all dependencies are installed.
   
   To do this, run the command `npm install` in the root folder of your project.

   This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.

  2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.

   To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.

   This will add the package to the list of dependencies in the `package.json` file, and install it in the project.

  3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `import` statement is spelled correctly and available in the correct place in your code.

  4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to *import* is located in the correct folder and that you are using the correct file path.

  5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the message: "Something is already running at ... Would you like to run the app at another port instead? [Y/n]". What should I do?</summary>

  <br>

  This message means that another process is already using the specified port. This could be another instance of your React app, or it could be another application that is using that port.
  To resolve this, you can change the port your React app is running on by typing Y when prompted. This will kill the process and automatically start the server on another port.
  Another approach is to manually terminate the process using the port in question and then try running the app again.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I display an <em>image</em> in a React component?</summary>

  <br>

  To display an image in a React component, you should first `import` the image in the component and then render it. Here is an example of how to do this:

  ```jsx
  import example from "./example.png"; // Import the image file

  function App() {
    return (
      <img src={example} alt="example" /> // Display the image
    )
  }

  export default App;
  ```

  In the above example, the `example` variable is assigned the value of the imported image file. The image is then displayed using the `<img>` element, with the `src` attribute set to the `example` variable.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>Where should images for a React project be stored?</summary>

  <br>

  The images for your React project should be stored inside the `src/` folder. To keep things organized you should create a separate `assets/` or `images/` directory inside of the `src/` folder.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning in my React app:" 'variable' is assigned a value but never used: no-unused-vars". What should I do?</summary>

  <br>
  
  This warning is a linting error thrown by a linting tool in your React project, and it is warning you that the variable is created, but that it is never being used in your code.

  To resolve this issue, you can either use the variable in your code, or you can simply remove the variable if you don't need it.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

   2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>