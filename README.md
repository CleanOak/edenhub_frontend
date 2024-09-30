# **EDENHUB SOCIAL MEDIA FRONTEND**

EdenHub is a social media platform which brings nature lovers to oone place. This app is designed tourists and explorers to share the beautiful environment we enjoy. The web application has been built with technologies such as React, Bootstrap, and Django to build the Backend. The repository for the Backend can be found below, which has its own README document. 

![Eden Hub Page](https://github.com/CleanOak/edenhub_frontend/blob/main/src/assets/docs/mockup.png) 

**LIVE SITE**

[You can go share your exploration by clicking on this link](https://edenhub-060ed3b8a582.herokuapp.com/)

## Table of Contents

* [CityXP](#cityxp)
* [UX](#ux)
  * [User Goals](#user-goals)
  * [Site owner Goals](#site-owner-goals)
  * [Agile and planning](#agile-and-planning)
  * [User stories](#user-stories)
  * [Wireframes](#wireframes)
  * [Design choices](#design-choices)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Imagery](#imagery)
  * [Future Features](#future-features)
* [Website layout](#website-layout)
  * [Navbar](#navbar)
  * [Home page](#home-page)
  * [Feed page](#feed-page)
  * [Contact page](#contact-page)
  * [Sign in page](#sign-in-page)
  * [Sign up page](#sign-up-page)
  * [Profile page](#profile-page)
  * [Create post](#create-post)
  * [Post page](#post-page)
* [Reusability](#reusability)
  * [Component Reusability](#component-reusability)
  * [Packages and Tools](#packages-and-tools)
* [Testing](#testing)
* [Known Bugs](#known-bugs)
* [Deployment](#deployment)
  * [Heroku](#heroku)
    *[Initial Setup](#initial-setup)
    *[Preparing the Application](#preparing-the-application)
    *[Deployment](#deployment)
    *[Final steps](#final-steps)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
* [Acknowledgements](#acknowledgements)

# User Experience (UX)

# Client Goals

- For users to visit the site and be inspired by others home improvements and design.
- Build a community of like-minded home lovers who enjoy engaging on the platform.
- To encourage visitors not to just scroll through the posts but to add their own as well.
- Thus, being able to easily create a new profile and add posts.
- For visitors to comment on individual posts and start a discussion.
- To be able to 'like' a post and have them saved in their profile.

## First Time Visitor Goals

- Visit the site and immediately know the purpose and navigate easily.
- View a constant feed of posts without having to create an account. 
- Have the ability to search for posts by category to tailor my search.
- Be able to create an account quickly and without too much information required.
- Be able to easily add my own photos and stories.
- Feel welcomed by other users of the site and have the desire to return.

## Returning Visitor Goals

- To be able to come back to the site and not have to log back in, but still have the option to log out if I want to.
- Return to posts I've liked to continue engaging with any comments made.
- Find new ideas from fresh content.
- Follow favourite user profiles so I can personalise my feed.
- Be notified if I have received any interaction with my own posts.
- Add more of my own posts and stories.

## Frequent Visitor Goals

- Be able to continue communicating with other users by way of comments and likes.
- Be able to add or remove likes and follows of posts and profiles to personalise my feed.
- To be able to update or delete my profile.

## Agile Methodology

Before work started on the build of the website, I created a Board of User Stories to determine exactly what was needed. Using the MoSCoW method, it was much easier to implement each issue based on their priority rather than trying to get everything completed. Separate user stories were created for the Frontend from those created for the API, however they were all added to the same project board and separated using a different Epic called Backend. That way the whole development process was visible on the same board. 
[You can view the user stories on this project board](https://github.com/users/CleanOak/projects/7), however they are also listed below.

### User Stories

| EPIC                                     | USER STORY                                                                                                                            | ACCEPTANCE CRITERIA                                                                                                                                                                                                                                                                                                                                                                   | MoSCoW      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Basic Setup & General UX                 | As a Site Admin I can ensure the site has an appealing style so that it enhances the user experience.                                 | • Website design adheres to established branding guidelines and style preferences.<br>• Visual elements (e.g., colours, typography, imagery) are consistent and aesthetically pleasing.<br>• Layout and spacing are well-organized and visually balanced for readability and engagement.<br>• Website is responsive and displays correctly on various devices and screen resolutions. | MUST HAVE   |
|                                          | As a Site User I can view a navigation bar on every page so that I can access all pages easily.                                       | • All content is fully visible to both logged in and non registered users.<br>• Users who are not logged in can view content without restrictions.<br>• Users who are not logged in can see comments and likes on posts, but cannot like or comment unless logged in.                                                                                                                 | MUST HAVE   |
|                                          | As a Site User I can read all content whether I'm logged in or not so I can decide to register.                                       | • A navigation bar is displayed prominently on the website's homepage and all other pages.<br>• Navigation bar includes clear and intuitive links to essential pages.<br>• Navigation links are visually distinguishable and responsive across different screen sizes.<br>• Clicking on navigation links redirects the user to the corresponding pages without errors.                | MUST HAVE   |
| User Authentication                      | As a Site User I can create an account so that I can access all features for a signed in user.                                        | • User registration form includes appropriate fields for creating a new account.<br>• Registered users can log in to access all features.                                                                                                                                                                                                                                             | MUST HAVE   |
|                                          | As a Site User I can log in and log out so that I can access my profile and post content securely.                                    | • Users can login using a valid username and password, which then directs them to their profile page.<br>• Logged in users can see a log out button which when clicked, securely logs them out.<br>• Once logged out, users are unable to post content, like posts or perform any other actions that require authentication.                                                          | MUST HAVE   |
|                                          | As a Site User I can see easily if I am logged in or not.                                                                             | • Logged in users can see their username or a logged in status clearly in the navigation bar or header.<br>• Logged out user can see a login or register link in the navigation bar, indicating they need to login.                                                                                                                                                                   | SHOULD HAVE |
|                                          | As a Site User I can stay logged in until I have manually logged out to improve my user experience.                                   | • Logged in users remain logged in across sessions until they manually log out, even after closing and reopening the browser.                                                                                                                                                                                                                                                         | SHOULD HAVE |
| User Profile Management                  | As a Site User I can view and edit my profile so that I can see and update my personal information.                                   | • A logged in user can view their profile page which will detail their personal information and a list of their posts.<br>• Logged in users can access their profile page via a clearly visible link.                                                                                                                                                                                 | MUST HAVE   |
|                                          | As a Site User I can delete my profile if I no longer want to have an account on the site.                                            | • A logged in user can click on a delete profile within their profile page.<br>• Confirmation is required before the profile is permanently deleted, warning the user of the loss of data.                                                                                                                                                                                            | SHOULD HAVE |
|                                          | As a Site User I can view other profiles to see their content and interact with them.                                                 | • When logged in, users can view other users profiles, displaying their account information and posts.<br>• Logged in user can comment and like on other users content.                                                                                                                                                                                                               | SHOULD HAVE |
|                                          | As a Site User I want to follow other profiles so that I can personalise my feed.                                                     | • When logged in, users can follow or unfollow other users profiles by clicking on a button on their profile page.<br>• Content from a followed profile will appear in the logged in user's feed prioritised accordingly.                                                                                                                                                             | SHOULD HAVE |
|                                          | As a Site User I can update my username and password.                                                                                 | • Forgot password link is provided on the login page.<br>• Users can enter their email address to receive a password reset link.<br>• Password reset link is valid for a limited time and expires after use or after a set period.<br>• Users can create a new password using the reset link and successfully log in.<br>• Users can update their username on their profile page.     | COULD HAVE  |
|                                          | As a Site User I want to receive notifications so that I know when others have interacted with my posts, comments and profile.        | • A list of notifications will be displayed for a logged in order, with the most recent first.<br>• A detailed view of a notification will be displayed including sender, recipient, message, related post or comment and read status.<br>• Notifications can be marked as read.<br>• Notifications will be updated in real-time.                                                     | COULD HAVE  |
| Posting Content                          | As a Site User I can create a new post with photos and descriptions so that I can share my home projects.                             | • Logged in users can click on a 'Create Post' option that will allow them to upload photos and descriptions of their post.<br>• Once submitted, the post will be displayed on the users profile and feed.                                                                                                                                                                            | MUST HAVE   |
|                                          | As a Site User I can modify or delete my posts so that I can update or remove my content.                                             | • Once logged in, users can edit or delete their own posts.<br>• Editing a post replaces the existing content with the updated version.<br>• Deleting a post removes it from the feed.                                                                                                                                                                                                | SHOULD HAVE |
| Commenting & Liking                      | As a Site User I can comment on posts so that I can engage with other users content.                                                  | • Once logged in, users can comment on a post and submit it.<br>• Submitted comments are displayed below the post for other users to view.                                                                                                                                                                                                                                            | SHOULD HAVE |
|                                          | As a Site User I can like other users posts so that I can show support for their content.                                             | • Once logged in, users can 'like' posts using a visible button on each post.<br>• The number of likes is updated and displayed on the post.                                                                                                                                                                                                                                          | COULD HAVE  |
|                                          | As a Site User I can modify or delete my comments on a post so that I can update or remove my comment.                                | • Once logged in, users can edit or delete their own comments.<br>• Editing a comment replaces the existing comment text with the updated version.<br>• Deleting a comment removes it from the comment section.                                                                                                                                                                       | SHOULD HAVE |
| Content Search, Filtering & Categorising | As a Site User I can search for posts by title and content keywords so that I can find specific posts.                                | • Users can type in keywords in a search bar and posts containing those keywords in the title or content will be displayed in the search results.                                                                                                                                                                                                                                     | COULD HAVE  |
|                                          | As a Site User I can filter search results by username, most liked, date created and categories so that I can narrow down my results. | • Users can filter the search results by username, most liked, date created and categories using a drop down or list filter.                                                                                                                                                                                                                                                          | COULD HAVE  |
|                                          | As a Site User I can filter the posts into various categories so that I can quickly find content that matches my preferences.         | • Post filtering options are prominently displayed from a category list or menu.<br>• Applying filters updates the feed to display only posts matching the selected category.                                                                                                                                                                                                         | COULD HAVE  |
| Fine Tuning                              | As a Site User I can click a back to top button so that the page scrolls to the top of the page.                                      | • A 'back to top' button is visible on long-scrolling pages of the website.<br>• Clicking the back to top button smoothly scrolls the page to the top.                                                                                                                                                                                                                                | COULD HAVE  |
|                                          | As a Site User I can see confirmation that a comment / form has been posted so that I know it has been sent.                          | • After submitting a comment or form, a confirmation message is displayed on the screen.<br>• The confirmation message indicates that the comment or form submission was successful.                                                                                                                                                                                                  | COULD HAVE  |
| Deployment                               | As a Site User I can view the website in a public domain so that I can view the website                                               | • The website is accessible via a public domain URL.<br>• Users can type the domain URL into a web browser to access the website.                                                                                                                                                                                                                                                     | MUST HAVE   |
| Testing & Documentation                  | As a Site Admin I can complete manual testing so that I know the blog works correctly.                                                | • Site Admin conducts manual testing of key features and functionalities of the blog.<br>• Testing includes navigating through different pages, interacting with forms and buttons, and verifying expected behaviour.<br>• Site Admin ensures that all links, images, and content display correctly and that there are no obvious errors or issues.                                   | SHOULD HAVE |
|                                          | As a Site Admin I can complete validator testing so that I know all the source code doesn't have any bugs.                            | • Site Admin runs automated validation tools or scripts to check the source code for errors, syntax issues, or non-compliance with coding standards.<br>• Validator testing covers HTML, CSS, and JavaScript code to ensure compliance with web standards and best practices.<br>• Site Admin resolves any identified issues or bugs and retests to ensure successful validation.     | MUST HAVE   |
|                                          | As a Site Owner I can access a README file so that all information regarding the project is available once complete.                  | • A README file is included in the project repository.<br>• A README file provides comprehensive information about the project, including its purpose, features, and all testing completed.                                                                                                                                                                                           | MUST HAVE   |

# Design

## Colour Scheme

The colours chosen for the website were based on nature inspired colours.

## Typography

Simple and elegant fonts were chosen from Google Fonts, that complimented each other without being too distracting.

## Wireframes

Before implementing the website, I created [Wireframes for each page using Balsamiq.

### Home Page - not logged 

# Backend Planing

## Data Models & Relationsips

# Features

## General features 

- The site is fresh and not too busy, making it easy to navigate.
- A navigation bar is situated at the top of every page and gives you extra pages once you are logged in.
- You can view posts on the home page straight away meaning the user doesn't have to find them.
- The posts have an infinite scroll which means they auto load, not having to view more pages.
- Users are able to Create, Read, Update and Delete (CRUD) their posts and comments.
- All pages show the site branding with a logo and styling to match. The site is responsive across different devices.

## Landing Page

All posts are immediately able to be seen for ease of viewing and to give a better user experience. The navbar sticks to the top of the page, so users are able to choose the option to sign up or sign in at all times. In desktop view they are also able to see a list of other registered users, and they can click on the icons to see their profile page, but they are unable to interact until they have signed in. On the landing page, other user profiles are hidden to give a better experience on a smaller screen.

## Sign Up & Sign In

A quick and simple sign up form so that users can get posting straight away. Once they have created their account they get directed to the sign in page to login, where they then get directed to the home page.

## Create a Post

By clicking on the New Post button users get taken to a simple upload page. They will get error messages if they miss out adding an image or a title, but content and category are optional fields. They will also get error messages if the image is too large. Once they click 'Post', they get directed to the posts detail where they have the option to edit, delete or comment on it.

## Edit a Post

On the Posts detail page a user can click on the three dots to bring up a menu to edit or delete their post. On a mobile they can also see a few other users to select and view their Profiles if they wish. To edit their post, just can just update any information and click 'Save'. If they want to delete a post, when they select delete on the drop down they will get a pop up asking to confirm before it gets deleted.


## Profile Page

A Profile is automatically created for the user once they sign up, and can be accessed by clicking on their username in the navbar. Profile pages can be viewed by anyone on the site, but only the owner of a profile can edit it. Users are able to edit their profile once signed in by clicking on the three dots. It will give them the option to edit profile or change their username or password. 

## Edit Profile Page

Clicking on edit profile will take the user to a page where they can upload their own profile picture (the green avatar is the default picture) and include a bit about themselves. If the About Me is left blank nothing appears on their profile page, but that is optional. They are also given the option to update their username or password.

## Comments 

Users can read comments on posts at any time, but are only able to post comments when they are signed in. They will also have the option to edit or delete their comments while signed in. There is also a comment count on each post, so users can easily see when scrolling the feed whether comments have been made or not.

## Deleting a Post or Comment

As part of a defensive design component, users will be asked to confirm they want to delete a post or comment, on the off chance they hit delete by mistake. If they do want to continue with deletion they can confirm and will be redirected back to the previously visied page.

## Likes 

All users can see that a post has been liked by a heart icon at the bottom of the post, with a number count next to it, however only those who are logged in are able to leave a like. Users can also click the heart again to unlike a post.

## Follows 

Users can follow and unfollow other users by clicking on the button next to their profile on the home page, or by navigating to their profile page and selecting follow from there. Another click of the button will unfollow them.

## Search Bar & Category Filter 

When viewing all posts on the home, viewers are able to search for posts by keyword in the search bar, or select the drop down menu to filter the posts by a category. 

## Empty Results

If a user visits the 'Friends' or 'Liked' pages but hasn't followed any profiles or liked any posts, then these will give an empty feed.

## 404 Page Not Found

If a user tries to access a page that isn't valid, they will get a 404 Page Not Found error.


# Future Implementations


# **Technologies & Frameworks**

## Main Technologies

- HTML & CSS - to create the structure and add styling of the site.
- JavaScript - for interaction with the site.
- React - A JavaScript library for user interface.

## Frameworks & Libraries

- [Balsamiq](https://balsamiq.com/) - to create Wireframes.
- [React Bootstrap](https://react-bootstrap.github.io/) - CSS framework to help build responsive websites.
- [ChatGPT](https://openai.com/chatgpt) - to create a JSON file of all the recipes.
- [Gitpod](https://www.gitpod.io/) - cross platform cloud IDE to deploy workspace environment to Github.
- [Cloudinary](https://cloudinary.com/) - cloud based storage for images.
- [Font Awesome](https://fontawesome.com/) - to use icons on the website.
- [Github](https://github.com/) - to store and display all files and assets for the website.
- [Google Fonts](https://fonts.google.com/) - to import the fonts used on the website.
- [Google Image Search](https://images.google.com/) - to find images to upload test posts.
- [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - to troubleshoot, test and solve issues with any styling.
- [Heroku](https://www.heroku.com/) - for hosting and deployment of the site.
- [JSHint](https://jshint.com/) - to check JavaScript files for bugs.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - to test the accessibility of the site.
- [Lucid](https://lucid.co/) - to create my Data Models.
- [Photoshop 2024](https://www.adobe.com/products/photoshop.html) - to optimise images for the website.
- [W3C Markup Validator](https://validator.w3.org/) - to check the source code of my HTML files for any bugs.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - to check the source code of my CSS file for any bugs.
- [Canva](https://www.canva.com/) - to help create the logo.
- [Coolor](https://coolors.co/) - to help create the colour palette.

# **Testing**

# **Deployment**

Both Environment & Settings and Deploying to Heroku have been set up [within the API](), however I shall list the full deployment details here for ease of reference.

## **Environment & Settings**

- In your IDE open your env.py file or create one in the main directory if it hasn't been created for you.
- Having created your cloud-based database, add the DATABASE_URL value and a SECRET_KEY value to the env.py file.
- Open the settings.py file and import the env.py file and the DATABASE_URL and SECRETKEY file paths.
- Install Django and add to requirements.txt.
- Create your project.
- Add the STATIC files settings.
- Create a file called Procfile (with a capital P) in the main directory,
- For cloud-based image storage, add Cloudinary URL to env.py
- Add Cloudinary libraries to INSTALLED APPS.
- Add your IDE workspace and Heroku to ALLOWED_HOSTS.
- Make migrations and migrate.
- Create new Django project - *django-admin startproject <home_api>*.
- Create Superuser (email can be left blank) - *python manage.py createsuperuser (username>email>password1>password2)*.
- Create your apps - *python manage.py startapp <nameofapp>*.
- Before you add, commit & push your files to GitHub, ensure DEBUG is set to False in your settings.py file.


## **Deploying to Heroku**

- Login or create an account on Heroku.com. Click 'New' and then 'Create New App'.
- Give your project a unique name and select a region, then click 'Create App'.
- Connect your Heroku project to your GitHub repository. Under deployment you can choose GitHub, find the relevant one and click 'Connect.
- Once connected, go to the Settings tab and click on 'Reveal Config Vars'. Add the environment key & value variables used above in your env.py file (CLOUDINARY_URL, DATABASE_URL & SECRET_KEY).
- Next add DISABLE_COLLECTSTATIC and add 1 if this is to be disabled to prevent errors, or 0 if the app is in a state where errors will not be generated.
- Click on Buildpack further down and click Add Buildpack to confirm Heroku buildpack is present.
- Navigate to the Deploy section, click on Github for the deployment method and confirm.
- Search for your repository name and click connect.
- At the bottom of the deploy section, make sure you are connected to the main branch and then click Deploy Branch.
- You can then view your live site.

## **Connecting the Frontend to the API**

### **Add Client Origin URLs**
- In Heroku, go to your API app’s 'Settings'.
- Add Config Vars for frontend URLs:
    - **Key:** 'CLIENT_ORIGIN'
    - **Value:** Your deployed React app URL, in this instance https://from-house-to-home-b7afcfcc32e9.herokuapp.com/.
    - **Key:** 'CLIENT_ORIGIN_DEV'.
    - **Value:** Your Gitpod preview link, without the the trailing slash.

### **Frontend Setup in Gitpod**
- In your Frontend Gitpod workspace:
  - Install Axios:
    - Run 'npm install axios' in the terminal.
  - Create a folder called 'api' create a file named 'axiosDefaults.js' inside.

### **Configure Axios**
- Import Axios in 'axiosDefaults.js':
    ```javascript
    import axios from 'axios';
    ```
- Set up Axios:
    ```javascript
    axios.defaults.baseURL = 'https://edenhub-060ed3b8a582.herokuapp.com/';
    axios.defaults.headers['Content-Type'] = 'multipart/form-data';
    axios.defaults.withCredentials = true;
    ```
### **Use Axios in Your App**
- Import 'axiosDefaults.js' into your 'App.js'.

## **Handle Changes**

### **Redeploy After Changes**
- If you update any files, push changes to GitHub.
- Manually redeploy on Heroku if automatic deploys are not enabled.

### **Static Files**
- After changing static files, make sure to 'collectstatic' them and push to GitHub for updates.

# **Credits**

## **Help Resources**


