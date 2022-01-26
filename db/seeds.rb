# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Park.destroy_all

demo = User.create!(fname: 'demo', lname: 'demo', email: 'demo@gmail.com', password: '12341234')

yosemite = Park.create!(park_name: 'Yosemite National Park', description: "With over 3.5 million yearly visitors from throughout the world, the iconic Yosemite National Park is known for some of the most beautiful hikes and landscapes in the United States. There are over 800 miles of trails to explore through Yosemite Valley, Tuolumne Meadows, and Wawona. Yosemite has so much to see including the sequoias, the flower filed meadows and valleys left behind from the glaciers, the highest waterfall in the United States, and the spectacular Half Dome and El Capitan.

Entrance Fees
You can pay the entrance fee or purchase an annual or lifetime pass at any park entrance station. (You can also purchase these in advance, if desired.) All park entrances (except Hetch Hetchy) are open 24 hours per day. If the entrance station is unstaffed when you arrive, you can pay on the way out.

Seven-day pass if entering via:
Non-commercial car, pickup truck, RV, or van with 15 or fewer passenger seats
$35 per vehicle (no per-person fee)

Motorcycle
$30 per motorcycle (no per-person fee)

Foot, bicycle, horse, or non-commercial bus or van with more than 15 passenger seats
$20 per person aged 16 or older

Accessibility: The Interagency Access Pass for free or discounted admission for US Citizens or permanent residents with permanent disabilities is accepted here. There are designated handicapped-accessible parking spots in the major parking lots. The Yosemite Valley Visitor Center is mobility equipment and stroller accessible and has wheelchair accessible bathrooms and a bookstore. Most of the films at the Yosemite Theatre include closed-captioning. A limited amount of manual rental wheelchairs and electric scooters are available at Yosemite Lodge or Curry Village during the summer. Assistive listening devices are also available at the Yosemite Valley Visitor Center for ranger-led programs. ASL interpreters may be available with advanced notice of at least two weeks (email yose_deaf_services@nps.gov). 

Temporary disabled parking placards are available at the park entrance stations or visitor centers for those who not have a state-issued permit or do not have it with them. All shuttle buses in the park are wheelchair accessible and can fit chairs under 46 inches long and 24 inches wide. The YARTS bus service from Merced or Mariposa is equipped with lifts but advanced notice is required (call 1‐877‐989‐2787 at least 48 hours before). OPDMDs such as Segways are allowed in the park only for those with a mobility disability.

Foodservice facilities in the park are wheelchair accessible except for partial-accessibility in the Tuolomne Meadows Lodge and White Wolf Lodge (both of these have stairs). The Yosemite Lodge and Wawona Hotel have wheelchair-accessible rooms. The Yosemite Valley, Wawona, and Hetch Hetchy areas have wheelchair-accessible picnic tables. There are three campgrounds with campsites that are wheelchair accessible. Service animals must be on-leash throughout the park. Additional accessible trails and facilities information can be found here: https://www.nps.gov/yose/planyourvisit/upload/access.pdf", latitude: 37.865101100000004, longitude: -119.54382256372995, country: 'United States of America', state: 'California', directions: 'https://goo.gl/maps/QkBbu9n1Mqe6mB7x7', intro: "Want to find the best trails in Yosemite National Park for an adventurous hike or a family trip? AllTrails has 282 great hiking trails, biking trails, running trails and more. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you.

  Ready for your next hike or bike ride? Explore one of 37 easy hiking trails in Yosemite National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 6 to 46,030 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Yosemite National Park.")
  
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/parks/yosemitemap.png')
yosemite.small_map.attach(io: file, filename: 'yosemitemap.png')