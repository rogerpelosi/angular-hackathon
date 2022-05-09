# OrganicWorld

## Problem Statement

Organic World have started business in 2020 as a organic food store. It started in a 100 sqft store at Detroit. Because of high quality products, resonable price and steady supply the store became popular, currently operates with twenty stores in Detroit and planning to open multiple stores across the country.

Organic World wants to digitize their operation. The objective of Organic world is to create a brand of itself and increase their customer volume.

## Proposed Solution

In order to increase their product consumers Organic world needs a solution that will help to reach out to users over the Web for buying their products.

## The roles in this application are

- Customer: Request for a product available in store and buy directly through online transaction

## Process To be implemented in Phase 1


## Backend



 - create a server folder and keep Product.json inside it. 
 
 * run using json-server


 - Model of Product.json
	
      Id : number

      Productname :string

      Qty : number



## Front end

### Create the following Components

•	App

•	Home

•	Login

•	Dashboard

•	Header

•	Footer

#### App component should be the root component

#### Header and Footer to be displayed in all component

#### Build routing for login, dashboard, Home. Make Home as the Default Component



####  create the below Services

* 	Customerorder: Handle Product resource to and from server using HttpClient

      - fetchProduct()
      - addProduct(product : Product)
          

•	OrganicRoute  -- for navigating to components

      - openLogin()
      - openDashboard()
      - openHome()

#####  Protect dashboard with canactivate guard

#####  create a product class


## Detailed view of components

### Header component 

•	should consist of mat tool bar with heading to be “Organic World”

•	Should have router link for home, login



### Footer component 

* should have, Contact Address and phone number

### Home Component

* Should act as a landing page of the application that contains suitable description about the application.

### Login component

* Should have username and password text input along with sign in button, use Reactive Form


When you sign in , it needs to authenticated in canactivate guard, 

### canactivate guard

If username is admin and password in password123 then navigate to dashboard


### Dashboard component

*  Should have input text boxes for product and when the user  submit the data to be stored in product.json. Use matexpanision panel and Product Object two way binding


*  Fetch data from product.json and Display the  details using mat-card in dashboard 


##### Provide an option for logout in Header


##### 	Use HttpClient in  Customerorder  service
      
         
## NOte : Ensure that the entire application is functional and aligned properly
