# Integrated-Project
Hurry is a project developed by Cheang Wei Cheng (me) and Htet Paing Oo. This app is a transportation service that allows you to book taxis, bikes and other vehicles faster, cheaper and more reliably. You can create an account or log into a pre-existing one, select your desired destination and ride, and leave reviews about your trip and driver upon arrival.

The vehicles you can select in our app are Carbon Dioxide reduced certified taxis. After every complete booking, the page shows how much CO2 emission the user had reduced. This was done so that the users who care about environment would prefer to use our app over others.


Design Process
Target Audience: The target users of this website are achievers who wish to book rides cheaper, quicker and easier, philanthropists who care about environment, consumers who wish to receive monetary benefits for taking rides, and self-seekers who wish to show off their achievements.

What Users Want to Achieve:

Users want to see their CO2 emission reduction percentage to see that they are making a difference.
Users want to receive rewards for taking rides, including badges they can show off.
Users expect a straightforward, user-friendly experience while navigating the app and booking rides.

How This Project Helps Users Achieve These Goals:

Achievers can view how much they save per ride on each ride, so they know how much they accomplished saving for this ride compared toothers. After every complete booking, the page shows how much CO2 emission the user had reduced. Philanthropists would appreciate this, and thus would like to choose us over others. For consumers, after every booking, user get 5 coins, and they can exchange coins with coupons like free drink and apple tv subscription etc. Self-seekers can share their Badge that shows how much Co2 reduction percentage they save on social media like Facebook, Instagram etc.

User Stories:
As a rider, I want to book a ride quickly by entering my pick-up and drop-off locations, so I can get to my destination without delays.
As a rider, I want to see the estimated fare and time of arrival before confirming the booking, so I can decide if it suits my budget and schedule.
As a rider, I want to create an account easily, so I can save my preferences, payment details, and ride history.
As a driver, I want to receive ride requests with pick-up and drop-off locations, so I can decide whether to accept the job.
As a rider, I want to track the driver's location in real-time, so I know exactly when they will arrive.
As a rider, I want to book a ride quickly by entering my pick-up and drop-off locations, so I can get to my destination without delays.
As a rider, I want to rate and review my driver after each trip, so I can share my experience and help improve the service.
As a rider, I want multiple payment options like credit cards, e-wallets, or cash, so I can pay conveniently.
As a user, I want to navigate to the rider’s location using an in-app map, so I can calculate the timing correctly.
As a user, I want to get more discount after each booking.
As a user, I want to review my trip and driver for their service.
As a user, I want to decline if I don't like driver info as soon as after checking.
As a user, I want to navigate to the rider’s location using an in-app map, so I can calculate the timing correctly.
As a user, I want to check my booking history and want to rebook frequent trip easily.

Wireframes and Mockups
https://www.figma.com/design/UkU9urbZv4WFSyGPglLAO2/HURRY-App?node-id=46-2&p=f&t=SEz28o8D3G2NO76B-0

Features
Existing Features:

Login and Sign Up Pages: Users can either create a new account or sign into an existing account.
Choose Ride Page: Users can select between five ride options.
Rating System: Users canrate their ride and driver and give comments about their driver.

Features Left to Implement:

Payment Gateway Integration: Securely integrate payment methods such as credit cards or PayPal.
Complete Rating System: Allow users to view ratings and reviews they and other users have left.
Live Location System: Provide a fully functional map that allow users to view how far away their ride is in real time and choose their desired destination.
Integrated Communication System: Allow users to text and call their driver.
User Profile Page: View information about your account, including your favourite locations, payment method and ride history.
Rewards System: Allow the user to earn in-app coins, vouchers and badges for taking rides

Technologies Used
HTML & CSS

Used for the basic structure and styling of the website. HTML5 and CSS3 ensure responsive layouts across all devices.

JavaScript

JavaScript allows the preview page to navigate to the welcome page after 5 seconds, stores and displays information about the rides to be selected, allows account information to be posted and received from the API and allows the user to rate their trip and driver.

RestDB

RestDB is used to create a custom API to save the user's username, password and phone number so that the user may use them to log into their account later.

Figma

Used for wireframing and creating visual prototypes of the website before development.

Maya

Used to create the 3D car models seen in the homepage.

Assistive AI:

The implementation of my custom API for the sign up and login functions was aided by ChatGPT.
(screenshot here)

Testing
Testing Scenarios:

Preview page functionality:

Go to the previe page and check that the lottie animation is displayed correctly.
Check that after 5 seconds, it navigates to welcome.html

Creating a new account:

Go to the sign up page and input a username, password and phone number (with area code).
For area code, input one without a '+' at the beginning or not containing 1-4 digits and check if the error message is displayed correctly.
Test that clicking "Sign up" displays the success message and navigates to index.html.
Check that the inputted information was uploaded correctly to the API.

Logging into a pre-existing account:

Go to the login page and input a username and password that exists in the API.
Test that clicking "Login" displays the success message and navigates to index.html.

Choose Ride page functionality:

Go to the choose ride page and check that all 5 items are displayed correctly (icon on left, price on right, etc.).
Test that clicking one of the items causes an outline to appear and the icon moves to the top
Test that clicking "continue" without an item selected does not allow to to proceed to the next page

Responsive Testing:

Ensure the website displays correctly across all device sizes, from desktops to mobile devices.

Known Bugs/Issues:

Missing payment process: Currently, choosing a ride does not lead to a payment gateway.
Incomplete rating system: Currently, ratings and reviews are not stored anywhere, and the user cannot view other people's ratings and reviews.

Credits

Content:
The design and layout of the pages were done by Htet Paing Oo.

Media:
All images of the 3D car models were edited by Htet Paing Oo.

Acknowledgements:
We take reference from ecommerce website like Shopee and Lazada that offers a lot of discount coupons and free shipping coupons etc. They gave mostly after purchase, and it depends on the amount users spend. We also take reference of UI design from transportation service apps like Uber, Grab and Bolt They feature discount area on the main page to persuade user to use their app more.