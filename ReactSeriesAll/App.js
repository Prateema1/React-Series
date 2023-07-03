  import React from 'react';
  import ReactDOM from 'react-dom/client';

  //React.createElement("type of tag", { attributes}, [children]);
  //React.createElement is not an HTML element, It creates an object and when we render these elements on DOM, then it becomes an HTML element.

  // const parent = React.createElement("div", { id: "parent"},[
  //   React.createElement("div", { id: "child"},[
  //       React.createElement("h1", {}, "I am an h1 tag of child element"),
  //       React.createElement("h2", {}, "I'm an h2 tag")
  //   ]),
  //   React.createElement("div", { id: "child2"},[
  //       React.createElement("h1", {}, "I am an h1 tag of child element"),
  //       React.createElement("h2", {}, "I'm an h2 tag")
  //   ])
  // ])
  
  // console.log(parent); //object

  // //React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

  // const heading = React.createElement("h1", 
  // {
  //   id: "heading"
  // }, "Hello World From React");

  // console.log(heading, "HEADING");

  // //Create React element using JSX
  // const jsxHeading = <h1 id="heading">React using JS</h1>
  // console.log(jsxHeading, "JSX HEADING");

  // //React Functional Component
  // const HeadingComponent = () => {
  //   return <h1>Hello React Functional Component</h1>
  // }

  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // //root.render takes the object and converts it into HTML and push it into browser.
  // //root.render is putting parent object inside root element
  // root.render(parent);

  
      {/**
       Header
          - Logo
          - Nav Items
          - Cart

        Body
           - Search Bar
           - Restaurant List
              - RestaurantCard
                  - Image
                  - Name
                  - Rating
                  - Cuisines
        

        Footer 
          - Links
          - Copyright

      */

      }

  // Composing Components
  const HeaderComponent = () => {
    return (
      <div className='header'>
        <div>
          <img className="logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  const RestaurantCard = (props) => {
    const { resData } = props;

    const {
      cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating, 
      costForTwo, 
      deliveryTime
    } = resData?.data;
    
    return (
      <div className='res-card'> 
      <img 
      className='res-logo' 
      alt='res-logo' 
      src=
      {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
      cloudinaryImageId
      } 
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo /100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      </div> 
    );
  };

  const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "332226",
        "name": "Tossin Pizza",
        "uuid": "0adbbb8d-0408-4b94-bb8b-9b6c474346fe",
        "city": "2",
        "area": "Sector 50",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "313485a665bd0f4958fdc14ead8afade",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 35,
        "slaString": "25-35 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "tossin-pizza-tossin_sohna-road-tossin_sohna-road",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "G-31, Baani Square, Sector 50, Gurgaon",
        "locality": "Sector 50",
        "parentId": 1778,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 0,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 0,
          "message": "",
          "title": "Delivery Charge",
          "amount": "0",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7356957~p=1~eid=00000189-1ace-07ba-2b03-0f1200870112~srvts=1688371857338",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "332226",
          "deliveryTime": 30,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 35,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "280771",
        "name": "Chamail Singh Da Dhaba",
        "uuid": "5252be69-c407-4777-a241-d1e3fbdb7105",
        "city": "2",
        "area": "Sector 39",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ge2lzhxpx7izcbpseria",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 29900,
        "costForTwoString": "₹299 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 4,
        "slugs": {
          "restaurant": "chamail-singh-da-dhaba-sohna-road-sohna-road-2",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "1063,\tShop\tNo\t4,\tSector 39,\tVill\tJharsa,\tGurgaon,\tGurgaon\t(Haryana),\t-\t122001",
        "locality": "Jharsa",
        "parentId": 57541,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "280771",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 4,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "651214",
        "name": "McDonald's",
        "uuid": "f78bb688-db2e-47a7-94dd-8db3a55f1a48",
        "city": "2",
        "area": "Sector 77",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "mcdonalds-sector-14-sector-14",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "Unit No. SCF -77, Sector 14 Market, HUDA, Gurgaon",
        "locality": "Huda Market",
        "parentId": 630,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "651214",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "89556",
        "name": "Urban Tandoor",
        "uuid": "0338cbc1-1dca-4086-83b1-50cff245dd79",
        "city": "2",
        "area": "Sector 31",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "amhewecesj0lshepdytl",
        "cuisines": [
          "Mughlai",
          "North Indian",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "slaString": "42 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "urban-tandoor-huda-market-huda-city",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "Shop no. 218, Sector 31 , Huda Market , Gurgaon",
        "locality": "Huda Market",
        "parentId": 15632,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7370066~p=4~eid=00000189-1ace-07ba-2b03-0f1300870476~srvts=1688371857338",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "89556",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "56478",
        "name": "Om Sweets & Snacks (Sector 8)",
        "uuid": "a5493bd8-7328-438c-9b43-87c413bedef9",
        "city": "2",
        "area": "Sector 8",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bztjesdzq7j9fmji3zv6",
        "cuisines": [
          "Sweets",
          "North Indian",
          "South Indian",
          "Chinese",
          "Snacks",
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "om-sweets-snacks-sector-8-old-gurgaon-zone-6",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "Opposite Water Tank, Arjun Nagar, Sector 8, Gurgaon",
        "locality": "Arjun Nagar",
        "parentId": 676,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "56478",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "656595",
        "name": "Subway",
        "uuid": "264d91cd-e349-4137-aae2-71daf84b915a",
        "city": "2",
        "area": "Sec-4 (Huda)",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "subway-neelam-theater-huda-city",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "Shop No 22, SEC -4, Huda Market, Neelam Theater, Gurgoan,Haryana,122001",
        "locality": "Neelam Theater",
        "parentId": 2,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7261538~p=31~eid=00000189-1ace-07ba-2b03-0f1c00871f25~srvts=1688371857338",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "656595",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "235160",
        "name": "Shahi Muradabadi Chicken Corner",
        "uuid": "1856afa3-a398-45fb-9e4a-0ab0e005147f",
        "city": "2",
        "area": "Sector 44",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "chkaq6aw49acwklf0l2i",
        "cuisines": [
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 6.5,
        "slugs": {
          "restaurant": "shahi-muradabadi-chicken-corner-huda-city-huda-city",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "KANHAI GAUN SECTOR 44,45,DEWIDER ROAD NEAR BY RAMADA HOTEL, GURGAON,(Haryana) 122003",
        "locality": "Dewider Road",
        "parentId": 180788,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "235160",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 6.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "213396",
        "name": "Shree Hariom Deluxe Rasoi",
        "uuid": "93a97177-0925-497c-95c9-464c19190f64",
        "city": "2",
        "area": "Old Railway Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "hrv5kxrpt6ljotsqwqwu",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "shree-hariom-deluxe-rasoi-old-gurgaon-(zone-6)-old-gurgaon-(zone-6)",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "568/7,PRATAP NAGAR,GURGAON,GURGAON HARYANA 122001",
        "locality": "Sector 8",
        "parentId": 15105,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7322426~p=19~eid=00000189-1ae8-6591-2b2c-0182000f1309~srvts=1688373585297",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "213396",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "577132",
        "name": "Layla's Shawarma & Middle Eastern Kitchen",
        "uuid": "904e2908-c890-4567-baf4-3e62e546c009",
        "city": "2",
        "area": "DLF Phase 4",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "zdmcwurxdlkf8pemy1xa",
        "cuisines": [
          "Middle Eastern"
        ],
        "tags": [
          
        ],
        "costForTwo": 80000,
        "costForTwoString": "₹800 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 7.300000190734863,
        "slugs": {
          "restaurant": "layla's-shawarma-&-middle-eastern-kitchen-dlf-phase-4-dlf-phase-4",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "SF 88 FIRST FLOOR GALLERIA MARKET DLF PHASE 4, Gurgaon, Gurugram,Haryana-122002",
        "locality": "Galleria Market",
        "parentId": 124062,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7343252~p=22~eid=00000189-1ae8-6591-2b2c-0183000f167e~srvts=1688373585297",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹800",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "577132",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 7.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "639591",
        "name": "La Pino'z Pizza",
        "uuid": "840d2458-e656-465c-81e4-ca129b1363a3",
        "city": "2",
        "area": "Sector 37",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "zupxsbhy3vx3vvdaibnw",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "la-pinoz-pizza-khandsa-marg-old-gurgaon-zone-6",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "S.C.O- 16, GROUND AND BASEMENT, KHANDSA MARG, SEC-10 A. GURUGRAM , PIN- 122001",
        "locality": "Khandsa Marg",
        "parentId": 4961,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "639591",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "20138",
        "name": "Harish Bakery",
        "uuid": "5487ac79-0ac8-4e47-820a-c615a44e6354",
        "city": "2",
        "area": "Sadar Bazar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "jkuj5aui7wwmwc0eidog",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
          "restaurant": "harish-bakery-old-railway-road-sohna-road",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "sco.1-2&4 jail land complex, Huda Shopping Center, Sohna Chowk, Gurugram-122001",
        "locality": "Huda Shopping Center",
        "parentId": 1676,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "20138",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0.20000000298023224,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "20138",
        "name": "Harish Bakery",
        "uuid": "5487ac79-0ac8-4e47-820a-c615a44e6354",
        "city": "2",
        "area": "Sadar Bazar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "jkuj5aui7wwmwc0eidog",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
          "restaurant": "harish-bakery-old-railway-road-sohna-road",
          "city": "gurgaon"
        },
        "cityState": "2",
        "address": "sco.1-2&4 jail land complex, Huda Shopping Center, Sohna Chowk, Gurugram-122001",
        "locality": "Huda Shopping Center",
        "parentId": 1676,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "20138",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0.20000000298023224,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

  
  const Body = () =>  {
    return (
      <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            {/* <RestaurantCard resData={resList[0]}/>
            <RestaurantCard resData={resList[1]}/>
            <RestaurantCard resData={resList[2]}/>
            <RestaurantCard resData={resList[3]}/>
            <RestaurantCard resData={resList[4]}/>
            <RestaurantCard resData={resList[5]}/>
            <RestaurantCard resData={resList[6]}/>
            <RestaurantCard resData={resList[7]}/>
            <RestaurantCard resData={resList[8]}/>
            <RestaurantCard resData={resList[9]}/>
            <RestaurantCard resData={resList[10]}/>
            <RestaurantCard resData={resList[11]}/> */}
            {
              resList.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
              ))
                };
        </div>
      </div>
    )
  }

  const AppLayout = () => {
    return <div className='app'>
      <HeaderComponent />
      <Body />
    </div>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<AppLayout />)


  