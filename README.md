# Danone Hackathon Mexico | Frontend Challenge

## BACKGROUND

This project was created for my participation at the Danone Hackathon Mexico, this app has two different purposes

1. To show my front-end skills for the development team of Danone, whom I feel grateful for the chance to participate in this contest

2. To create an app for tracking daily calories that a person can consume, on this app the user can set the calories consumed in their breakfast, lunch, dinner or snacks. Users can also choose from a list of Danone products where it will show the kcal of the product, as well as important information related to the product.

## USAGE

This website is constituted by five pages, all of them are fully responsive

- **/** (home): View showing an introduction to the application

- **/daily-calorie-settings**: View where users can set their maximum daily calorie limit. This includes a form with range for set the daily amount of calories they wish to
  consume as a maximum in a day. The data will be saved in your LocalStorage which we will use as a Database

- **/products**: Catalogue listing Danone's products.

- **/products/id**: View showing details about the product. Like energy value, fat
  and carbohydrates. Also this view indicates if it comes from organic farming and its ingredients.

* **/profile** : View where users can access their profile and see their maximum
  daily calorie limit, as well as their interest in products, they also have the option to modify these parameters if they wish

## INSTALLATION

You can install this app following the next steps:

1. Clone the project from GitHub

```bash
git clone https://github.com/JosueCuevas/danone-hackathon-mexico.git
```

2. Once the project has downloaded in your local, install the dependencies

```bash
npm install
```

3. This project consumes an API from Contenful which is a Headless CMS so you will need some credentials in order to make this app working well. Create a `.env` at the root of the project and write this environment variables

```.env
ACCESS_TOKEN = 6AMdBfTgeoPYuFZkykQ2bVFAJENm8twVlGnkw1IYCyQ
SPACE_ID = sbt660ufyk41
```

4. Once the dependencies have installed and the environment variables have set, you can run the app in your local running the next command:

```bash
npm run dev
```

5. Visit the `http://localhost:3000` in your browser to see the project working

## STACK USED

This project was built using **Next.js**, **Typescript** and **GraphQL**, which is the stack proposed for this challenge

## DECISION MAKING

Originally the project was designed for using the Local Storage as a Database Simulation, but since I started using Server Side Rendering with Next.js I realized that it would probably be better to use a real database and consume it using an API for rendering the views from the server instead of waiting for rendering in the client.

I prioritized the responsive design and the web layout over the functionality, because I consider that is a great workflow in order to debug the functionality at the end once the app looks good.

There are some issues with the app because I ran out of time.

1. On the `/products` and `products/id` views I wanted to also save the products chosen by the user in the database and to disable the `Add` button if the product is already in the Local Storage.

2. On `/products` view the **Search Bar** does not work. I intended to create a graphQL query using the string entered and only get the products if the title matches with the string, and change the products cards based on the response

3. On `/profile` view, the products shown came from Contentful. Originally it was planned to get them from the Local Storage once the user added them to their daily track of calories. So the `delete` button does not work well
