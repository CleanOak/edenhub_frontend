# **TESTING**

[Back to the README document.](README.md)

# **CONTENTS**

<!-- TOC -->

- [**TESTING**](#testing)
- [**CONTENTS**](#contents)
- [**Manual Testing**](#manual-testing)
- [**Bugs and Fixes**](#bugs-and-fixes)
- [**Validators**](#validators)

<!-- /TOC -->

---

# **Manual Testing**

Extensive manual testing was carried out to ensure the Frontend features worked as expected. Each testcase is designed to validate the functionality and user experience across the whole website.

| Category                                | Testcase                                    | Expected Result                                                                                         | Test Result | Issue / Solution |
|-----------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------|------------------|
| **Navigation**                          | Links in navbar                            | The links on the landing page navigate to the correct page                                              | ✅ PASS      |                  |
|                                         | View Home page unauthenticated             | Home page loads and displays posts                                                                     | ✅ PASS      |                  |
|                                         | Sign Up page                               | Clicking on Sign Up takes user to a page to create an account                                           | ✅ PASS      |                  |
|                                         | Sign In page                                | Clicking on Sign In takes the user to a page to sign in                                                 | ✅ PASS      |                  |
|                                         | View 'Friends' (/feed) without following users | Page loads displaying a message suggesting to follow other profiles                                  | ✅ PASS      |                  |
|                                         | View 'Friends' (/feed) when following users | Page loads with posts from profiles they are following                                                 | ✅ PASS      |                  |
|                                         | View Liked page without liked posts         | Page loads displaying a message suggesting to like posts                                               | ✅ PASS      |                  |
|                                         | View Liked page with liked posts            | Page loads with posts they have liked                                                                   | ✅ PASS      |                  |
|                                         | Username links to Profile page              | Clicking on the username opens the profile page                                                         | ✅ PASS      |                  |
|                                         | Clicking the logo in navbar loads home page | Clicking the logo in the navbar sends the user to home page                                             | ✅ PASS      |                  |
|                                         | Sign out button logs user out               | Clicking on the sign out button logs the user out and they get directed to the home page                | ✅ PASS      |                  |
| **Sign Up and Sign In**                 | Create a new profile with valid data        | Filling in a username and a password with a confirmation password that matches registers a user and redirects them to sign in page. | ✅ PASS      |                  |
|                                         | Create a new profile with invalid data      | Filling in the fields but leaving one blank, having mismatched passwords or using an already registered username gives the user an error message. | ✅ PASS      |                  |
|                                         | Sign in with correct information            | Signing in with authenticated information logs the user in and redirects them to the home page.         | ✅ PASS      |                  |
|                                         | Sign in with incorrect information          | Signing in with unauthenticated information or leaving a field blank gives the user an error message.  | ✅ PASS      |                  |
| **Posts**                               | Create a Post with valid data               | Uploading an image and filling in the title field creates a post and the user is redirected to the post detail page. | ✅ PASS      |                  |
|                                         | Create a Post with invalid data             | Not uploading an image and filling in the title field gives the user an error message.                  | ✅ PASS      |                  |
|                                         | Edit a Post with valid data                 | Post is updated and user is redirected to post detail.                                                  | ✅ PASS      |                  |
|                                         | Edit a Post with invalid data               | Deleting the title field gives the user an error message.                                                | ✅ PASS      |                  |
|                                         | Delete a Post                               | User will get a confirmation message asking to confirm. If yes post is deleted and user is redirected to profile page. If no, user stays on post detail. | ✅ PASS      |                  |
|                                         | Open a post                                 | Post detail page loads with correct data                                                                 | ✅ PASS      |                  |
|                                         | Searching posts with valid data             | Page loads and displays posts with relevant search word                                                 | ✅ PASS      |                  |
|                                         | Searching posts with invalid data           | Page displays a suggestion to adjust search word                                                         | ✅ PASS      |                  |
| **Profiles**                            | Open users Profile page                     | Opens Profile Page with correct data                                                                    | ✅ PASS      |                  |
|                                         | Open other Profiles pages                   | Opens 'fellow home lovers' Profile page with correct data                                               | ✅ PASS      |                  |
|                                         | Edit Profile                                | Users can upload a new profile picture and fill in About Me details. User is redirected to Profile page where the updated information is displayed. Clicking cancel takes user back to Profile page. | ✅ PASS      |                  |
|                                         | Edit username                               | If data is valid the username is updated and the user is redirected to Profile page.                     | ✅ PASS      |                  |
|                                         | Change password                             | If data is valid the password is updated and the user is redirected to Profile page                      | ✅ PASS      |                  |
| **Comments**                            | Read comments unauthenticated               | A user who isn't signed in can read comments but can't post any.                                       | ✅ PASS      |                  |
|                                         | Read comments authenticated                  | A user who is signed in can read comments and write their own.                                          | ✅ PASS      |                  |
|                                         | Posting a comment                           | Comment is added underneath the post, with most recent at the top.                                     | ✅ PASS      |                  |
|                                         | Editing a comment                           | Comment content is updated. If cancelled the content remains the same.                                  | ✅ PASS      |                  |
|                                         | Deleting a comment                          | User will get a confirmation message asking to confirm. If yes comment is deleted, if no comment remains. | ✅ PASS      |                  |
|                                         | Comment count increases                     | New comments will increase the comment count.                                                          | ✅ PASS      |                  |
|                                         | Comment count decreases                     | Deleting comments will decrease the comment count.                                                      | ✅ PASS      |                  |
| **Likes**                               | Like count increases                        | Like count increases and like button changes                                                            | ✅ PASS      |                  |
|                                         | Like count decreases                        | Like count decreases and like button changes                                                            | ✅ PASS      |                  |
|                                         | New liked post is displayed in Liked page   | The liked post can be viewed on the Liked page.                                                         | ✅ PASS      |                  |
|                                         | Unliked post is removed from Liked page     | The unliked post can no longer be viewed in Liked page.                                                  | ✅ PASS      |                  |
| **Followers**                           | Follow Profile from profile page            | Clicking on the Follow button adds posts from that Profile to 'Friends' page and button changes.        | ✅ PASS      |                  |
|                                         | Unfollow Profile from profile page          | Clicking on the Unfollow button removes posts from that Profile from the 'Friends' page and button changes. | ✅ PASS      |                  |
|                                         | Follow Profile from sidebar when on desktop | Clicking on the Follow button adds posts from that Profile to 'Friends' page and button changes.        | ✅ PASS      |                  |
|                                         | Unfollow Profile from sidebar when on desktop | Clicking on the Unfollow button removes posts from that Profile from the 'Friends' page and button changes. | ✅ PASS      |                  |


---

# **Bugs and Fixes**

- Style Edit Profile form and fix upload issue - found a trailing / and also mismatched fields to api.
- findDOMNode is deprecated - amended index.js file, but after research think it must be to do with version of React and Bootstrap and the use of Overlay.
- I had an authentication error request from the backend due to CORS headers not properly configured. This was resolved when I added
  a new regex format from codeinstiture
- UX bug - changed the search term on ‘Friends’ page that if they are not following anyone, that the results come back as, 'no friends', rather than no homes.
- Search bar - seems to be skipping searching within the content, so not giving full search results. Updated the search_fields in the API>posts>serializers file to include 'content'.
- Likes on Liked page BUG: Works on all pages, however when on 'Friends' & 'Liked', get a 'NaN' appear next to the icon when liking or unliking. I believe this has something to do with trying to refresh the page whilst on the Liked page and not being able to autorefresh. I had a quick look in the backend but time hasn't allowed for this bug to be fixed. Just means that users need to refresh the page for it to take effect.
- Due to time constraints I had to give up on implementing forgotten password via email confirmation

---

# **Validator**

![css_validator]()
***upload image***
