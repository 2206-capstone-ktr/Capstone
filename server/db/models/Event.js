const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  ta_location_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  rating: {
    type: Sequelize.STRING,
  },
  price_level: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Event;

// {
//   "location_id": "3172098",
//   "name": "Butcher Bar",
//   "latitude": "40.76445",
//   "longitude": "-73.916306",
//   "num_reviews": "323",
//   "timezone": "America/New_York",
//   "location_string": "Astoria, Queens, New York",
//   "photo": {
//       "images": {
//           "small": {
//               "width": "150",
//               "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/51/e8/a1/double-smoked-beef-burnt.jpg",
//               "height": "150"
//           },
//           "thumbnail": {
//               "width": "50",
//               "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/51/e8/a1/double-smoked-beef-burnt.jpg",
//               "height": "50"
//           },
//           "original": {
//               "width": "1222",
//               "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/51/e8/a1/double-smoked-beef-burnt.jpg",
//               "height": "815"
//           },
//           "large": {
//               "width": "1024",
//               "url": "https://media-cdn.tripadvisor.com/media/photo-w/16/51/e8/a1/double-smoked-beef-burnt.jpg",
//               "height": "683"
//           },
//           "medium": {
//               "width": "550",
//               "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/51/e8/a1/double-smoked-beef-burnt.jpg",
//               "height": "367"
//           }
//       },
//       "is_blessed": true,
//       "uploaded_date": "2019-02-01T22:22:44-0500",
//       "caption": "Double Smoked Beef Burnt Ends",
//       "id": "374466721",
//       "helpful_votes": "0",
//       "published_date": "2019-02-01T22:22:44-0500",
//       "user": {
//           "user_id": null,
//           "member_id": "0",
//           "type": "user"
//       }
//   },
//   "awards": [
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2020",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2020"
//       },
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2019",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2019"
//       },
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2018",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2018"
//       },
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2017",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2017"
//       },
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2016",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2016"
//       },
//       {
//           "award_type": "CERTIFICATE_OF_EXCELLENCE",
//           "year": "2015",
//           "images": {
//               "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
//               "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
//           },
//           "categories": [],
//           "display_name": "Certificate of Excellence 2015"
//       }
//   ],
//   "doubleclick_zone": "na.us.ny.new_york_city",
//   "preferred_map_engine": "default",
//   "raw_ranking": "4.476865768432617",
//   "ranking_geo": "Astoria",
//   "ranking_geo_id": "29837",
//   "ranking_position": "2",
//   "ranking_denominator": "559",
//   "ranking_category": "restaurant",
//   "ranking": "#2 of 597 Restaurants in Astoria",
//   "distance": "3.804344028294622",
//   "distance_string": "3.8 km",
//   "bearing": "north",
//   "rating": "4.5",
//   "is_closed": false,
//   "open_now_text": "Open Now",
//   "is_long_closed": false,
//   "price_level": "$$ - $$$",
//   "price": "$25",
//   "neighborhood_info": [
//       {
//           "location_id": "21229043",
//           "name": "Astoria"
//       }
//   ],
//   "description": "The Best Barbecue in NYC! Offering SLOW SMOKED GOODNESS! Home of the \"INFAMOUS\" BURNT ENDS! Never had them, we suggest you do! Guaranteed to change your life!",
//   "web_url": "https://www.tripadvisor.com/Restaurant_Review-g29837-d3172098-Reviews-Butcher_Bar-Astoria_Queens_New_York.html",
//   "write_review": "https://www.tripadvisor.com/UserReview-g29837-d3172098-Butcher_Bar-Astoria_Queens_New_York.html",
//   "ancestors": [
//       {
//           "subcategory": [
//               {
//                   "key": "city",
//                   "name": "City"
//               }
//           ],
//           "name": "Astoria",
//           "abbrv": null,
//           "location_id": "29837"
//       },
//       {
//           "subcategory": [
//               {
//                   "key": "district",
//                   "name": "District"
//               }
//           ],
//           "name": "Queens",
//           "abbrv": null,
//           "location_id": "616325"
//       },
//       {
//           "subcategory": [
//               {
//                   "key": "state",
//                   "name": "State"
//               }
//           ],
//           "name": "New York",
//           "abbrv": "NY",
//           "location_id": "28953"
//       },
//       {
//           "subcategory": [
//               {
//                   "key": "country",
//                   "name": "Country"
//               }
//           ],
//           "name": "United States",
//           "abbrv": null,
//           "location_id": "191"
//       }
//   ],
//   "category": {
//       "key": "restaurant",
//       "name": "Restaurant"
//   },
//   "subcategory": [
//       {
//           "key": "sit_down",
//           "name": "Sit down"
//       }
//   ],
//   "parent_display_name": "Astoria",
//   "is_jfy_enabled": false,
//   "nearest_metro_station": [],
//   "phone": "+1 718-606-8140",
//   "website": "http://www.ButcherBar.com",
//   "email": "ButcherBar@gmail.com",
//   "address_obj": {
//       "street1": "3710 30th Ave",
//       "street2": null,
//       "city": "Astoria",
//       "state": "NY",
//       "country": "United States",
//       "postalcode": "11103-4331"
//   },
//   "address": "3710 30th Ave, Astoria, NY 11103-4331",
//   "hours": {
//       "week_ranges": [
//           [
//               {
//                   "open_time": 630,
//                   "close_time": 1440
//               }
//           ],
//           [
//               {
//                   "open_time": 690,
//                   "close_time": 1380
//               }
//           ],
//           [
//               {
//                   "open_time": 690,
//                   "close_time": 1380
//               }
//           ],
//           [
//               {
//                   "open_time": 690,
//                   "close_time": 1380
//               }
//           ],
//           [
//               {
//                   "open_time": 690,
//                   "close_time": 1380
//               }
//           ],
//           [
//               {
//                   "open_time": 690,
//                   "close_time": 1440
//               }
//           ],
//           [
//               {
//                   "open_time": 630,
//                   "close_time": 1440
//               }
//           ]
//       ],
//       "timezone": "America/New_York"
//   },
//   "is_candidate_for_contact_info_suppression": false,
//   "cuisine": [
//       {
//           "key": "9908",
//           "name": "American"
//       },
//       {
//           "key": "10640",
//           "name": "Bar"
//       },
//       {
//           "key": "10651",
//           "name": "Barbecue"
//       },
//       {
//           "key": "10992",
//           "name": "Gluten Free Options"
//       }
//   ],
//   "dietary_restrictions": [
//       {
//           "key": "10992",
//           "name": "Gluten Free Options"
//       }
//   ],
//   "booking": {
//       "provider": "Grubhub",
//       "url": "https://www.tripadvisor.com/Commerce?p=Grubhub&src=111269993&geo=3172098&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=25768&bucket=852508&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=241788628&managed=false&capped=false&gosox=I-ADlg7wY8lqEq92hGOCPH9yxKao4fnJtoYdd5TLctoCVK2EaqcCi9rOMrUCyEby1Q9ysDtLYrLg6PPF5fnH6gvtFDEvZZ1doAf8y41dDy8&cs=1fd88a08f6b8bf17c1680d855e93ef7b0"
//   },
//   "reserve_info": {
//       "id": "3172098",
//       "provider": "Grubhub",
//       "provider_img": "https://static.tacdn.com/img2/eateries/grubhub_05.11.2022.png",
//       "url": "https://www.tripadvisor.com/Commerce?p=Grubhub&src=111269993&geo=3172098&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=25768&bucket=852508&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=241788628&managed=false&capped=false&gosox=I-ADlg7wY8lqEq92hGOCPH9yxKao4fnJtoYdd5TLctoCVK2EaqcCi9rOMrUCyEby1Q9ysDtLYrLg6PPF5fnH6gvtFDEvZZ1doAf8y41dDy8&cs=1fd88a08f6b8bf17c1680d855e93ef7b0",
//       "booking_partner_id": null,
//       "racable": false,
//       "api_bookable": false,
//       "timeslots": null,
//       "bestoffer": null,
//       "timeslot_offers": null,
//       "button_text": "Order Online",
//       "disclaimer_text": null,
//       "banner_text": null
//   },
//   "establishment_types": [
//       {
//           "key": "10591",
//           "name": "Restaurants"
//       }
//   ]
// }
