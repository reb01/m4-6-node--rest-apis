# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                    | method   | Description                                                         |
| --------------------------- | -------- | ------------------------------------------------------------------- |
| `/openingDetails`           | `POST`   | CREATE NEW OPENING DOCUMENT.                                        |
| `/openingDetails`           | `GET`    | VIEW FORM TO READ.                                                  |
| `/openingDetails`           | `PATCH`  | CHANGE DETAILS.                                                     |
| `/openingDetails`           | `DELETE` | DELETE IT.                                                          |
| `/lease`                    | `POST`   | CREATE A DOCUMENT WITH LEASE DETAILS.                               |
| `/lease`                    | `GET`    | VIEW DOCUMENT WITH LEASE DETAILS.                                   |
| `/lease`                    | `PATCH`  | CHANGE DOCUMENT.                                                    |
| `/lease`                    | `DELETE` | DELETE IT.                                                          |
| `/locationDetails`          | `POST`   | CREATE NEW DOCUMENT ABOUT THE LOCATION.                             |
| `/locationDetails`          | `GET`    | VIEW THIS DOCUMENT.                                                 |
| `/locationDetails`          | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/locationDetails`          | `DELETE` | DELETE DOCUMENT.                                                    |
| `/openingHours`             | `POST`   | CREATE NEW DOCUMENT ABOUT THE OPENING HOURS.                        |
| `/openingHours`             | `GET`    | VIEW DOCUMENT                                                       |
| `/openingHours`             | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/openingHours`             | `DELETE` | DELETE DOCUMENT.                                                    |
| `/menu/`                    | `POST`   | CREATE NEW DOCUMENT ABOUT THE MENU.                                 |
| `/menu/`                    | `GET`    | VIEW DOCUMENT                                                       |
| `/menu/`                    | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/menu/`                    | `DELETE` | DELETE DOCUMENT.                                                    |
| `/stock`                    | `POST`   | CREATE NEW DOCUMENT ABOUT THE STOCK.                                |
| `/stock`                    | `GET`    | VIEW DOCUMENT                                                       |
| `/stock`                    | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/stock`                    | `DELETE` | DELETE DOCUMENT.                                                    |
| `/customer/:email`          | `POST`   | CREATE NEW DOCUMENT ABOUT THE CUSTOMER - RETRIEVE BY EMAIL ADDRESS. |
| `/customer/:email`          | `GET`    | VIEW DOCUMENT                                                       |
| `/customer/:email`          | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/customer/:email`          | `DELETE` | DELETE DOCUMENT.                                                    |
| `/suppliersEquipmemt`       | `POST`   | CREATE NEW DOCUMENT ABOUT THE EQUIPMENT SUPPLIERS.                  |
| `/suppliersEquipmemt`       | `GET`    | VIEW DOCUMENT                                                       |
| `/suppliersEquipmemt`       | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/suppliersEquipmemt`       | `DELETE` | DELETE DOCUMENT.                                                    |
| `/suppliersFood`            | `POST`   | CREATE NEW DOCUMENT ABOUT THE EQUIPMENT SUPPLIERS.                  |
| `/suppliersFood`            | `GET`    | VIEW DOCUMENT                                                       |
| `/suppliersFood`            | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/suppliersFood`            | `DELETE` | DELETE DOCUMENT.                                                    |
| `/equipmentRepair`          | `POST`   | CREATE NEW DOCUMENT ABOUT THE EQUIPMENT REPAIR.                     |
| `/equipmentRepair`          | `GET`    | VIEW DOCUMENT                                                       |
| `/equipmentRepair`          | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/equipmentRepair`          | `DELETE` | DELETE DOCUMENT.                                                    |
| `/marketing`                | `POST`   | CREATE NEW DOCUMENT ABOUT MARKETING                                 |
| `/marketing`                | `GET`    | VIEW DOCUMENT                                                       |
| `/marketing`                | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/marketing`                | `DELETE` | DELETE DOCUMENT.                                                    |
| `/websiteDetails`           | `POST`   | CREATE NEW DOCUMENT ABOUT CAFE WEBSITE                              |
| `/websiteDetails`           | `GET`    | VIEW DOCUMENT                                                       |
| `/websiteDetails`           | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/websiteDetails`           | `DELETE` | DELETE DOCUMENT.                                                    |
| `/insurances`               | `POST`   | CREATE NEW DOCUMENT ABOUT INSURANCE                                 |
| `/insurances`               | `GET`    | VIEW DOCUMENT                                                       |
| `/insurances`               | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/insurances`               | `DELETE` | DELETE DOCUMENT.                                                    |
| `/openingCosts`             | `POST`   | CREATE NEW DOCUMENT ABOUT OPENING COSTS                             |
| `/openingCosts`             | `GET`    | VIEW DOCUMENT                                                       |
| `/openingCosts`             | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/openingCosts`             | `DELETE` | DELETE DOCUMENT.                                                    |
| `/utilityBills`             | `POST`   | CREATE NEW DOCUMENT ABOUT UTILITY BILLS                             |
| `/utilityBills`             | `GET`    | VIEW DOCUMENT                                                       |
| `/utilityBills`             | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/utilityBills`             | `DELETE` | DELETE DOCUMENT.                                                    |
| `/staffInfo/:staffId`       | `POST`   | CREATE NEW DOCUMENT ABOUT STAFF INFO - SEARCH BY STAFF ID           |
| `/staffInfo/:staffId`       | `GET`    | VIEW DOCUMENT                                                       |
| `/staffInfo/:staffId`       | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/staffInfo/:staffId`       | `DELETE` | DELETE DOCUMENT.                                                    |
| `/staffHours/:staffId`      | `POST`   | CREATE NEW DOCUMENT ABOUT STAFF HOURS - SEARCH BY STAFF ID          |
| `/staffHours/:staffId`      | `GET`    | VIEW DOCUMENT                                                       |
| `/staffHours/:staffId`      | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/staffHours/:staffId`      | `DELETE` | DELETE DOCUMENT.                                                    |
| `/staffSalaries/:staffId`   | `POST`   | CREATE NEW DOCUMENT ABOUT STAFF SALARIES - BY STAFF MEMBER          |
| `/staffSalaries/:staffId`   | `GET`    | VIEW DOCUMENT                                                       |
| `/staffSalaries/:staffId`   | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/staffSalaries/:staffId`   | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/equipment`       | `POST`   | CREATE NEW DOCUMENT ABOUT EQUIPMENT ACCOUNTS                        |
| `/accounts/equipment`       | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/equipment`       | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/equipment`       | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/allStaff`        | `POST`   | CREATE NEW DOCUMENT ABOUT STAFF ACCOUNTS                            |
| `/accounts/allStaff`        | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/allStaff`        | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/allStaff`        | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/suppliers`       | `POST`   | CREATE NEW DOCUMENT ABOUT SUPPLIER ACCOUNTS                         |
| `/accounts/suppliers`       | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/suppliers`       | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/suppliers`       | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/marketing`       | `POST`   | CREATE NEW DOCUMENT ABOUT MARKETING                                 |
| `/accounts/marketing`       | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/marketing`       | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/marketing`       | `DELETE` | DELETE DOCUMENT.                                                    |
| `/payments/cash`            | `POST`   | CREATE NEW DOCUMENT ABOUT CASH PAYMENTS                             |
| `/payments/cash`            | `GET`    | VIEW DOCUMENT                                                       |
| `/payments/cash`            | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/payments/cash`            | `DELETE` | DELETE DOCUMENT.                                                    |
| `/payments/cards`           | `POST`   | CREATE NEW DOCUMENT ABOUT CARD PAYMENTS                             |
| `/payments/cards`           | `GET`    | VIEW DOCUMENT                                                       |
| `/payments/cards`           | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/payments/cards`           | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/profitsLoss`     | `POST`   | CREATE NEW DOCUMENT ABOUT PROFITS AND LOSS                          |
| `/accounts/profitsLoss`     | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/profitsLoss`     | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/profitsLoss`     | `DELETE` | DELETE DOCUMENT.                                                    |
| `/accounts/pricingStrategy` | `POST`   | CREATE NEW DOCUMENT ABOUT PRICING STRATEGY                          |
| `/accounts/pricingStrategy` | `GET`    | VIEW DOCUMENT                                                       |
| `/accounts/pricingStrategy` | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/accounts/pricingStrategy` | `DELETE` | DELETE DOCUMENT.                                                    |
| `/approvalsAndPermits`      | `POST`   | CREATE NEW DOCUMENT ABOUT APPROVALS AND PERMITS                     |
| `/approvalsAndPermits`      | `GET`    | VIEW DOCUMENT                                                       |
| `/approvalsAndPermits`      | `PATCH`  | EDIT DOCUMENT.                                                      |
| `/approvalsAndPermits`      | `DELETE` | DELETE DOCUMENT.                                                    |
