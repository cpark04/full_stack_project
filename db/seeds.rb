# Park.create!(park_name: "", description: "", latitude: "", longitude: "", country: "", state: "", directions: "", intro: "")

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

sequoia = Park.create!(park_name: "Sequoia National Park", description: "The beautiful Sequoia National Park features the tallest peak in the continental United States and the largest trees on the planet. Covering an impressive 404,063 acres, there is so much to explore including the Giant Forest. There you will find the world's largest tree, General Sherman, and many of the world's other largest trees. There are numerous caves, Mount Whitney, and the granite dome Moro Rock. 

The park is open 24 hours a day, all year round. There will be closures, however, depending on weather conditions. 

Fees:
Vehicle Pass - $35.00
This pass is valid for 1-7 days and includes everyone traveling in a single vehicle for Sequoia & Kings Canyon National Parks and Hume Lake District of Sequoia National Forest/Giant Sequoia National Monument. You can purchase this pass in advance at www.yourpassnow.com.

Individual Entry Pass - $20.00
This entry fee is for a single person traveling on foot or by bicycle. It is valid for 1-7 days in Sequoia & Kings Canyon National Parks and Hume Lake District of Sequoia National Forest/Giant Sequoia National Monument.

Non-Commercial Group - $15.00
Groups traveling in a bus or vehicle with a capacity of 16 persons or more are charged per person. People 15 years old or younger, drivers hired for transportation only, or anyone with a pass that may be used for park entry is exempt from paying the entrance fee.

Motorcycle Pass - $30.00
This pass is valid for 1-7 days and includes everyone traveling on a motorcycle, scooter, or similar motorized vehicle for Sequoia & Kings Canyon National Parks and Hume Lake District of Sequoia National Forest/Giant Sequoia National Monument. You can purchase this pass in advance at www.yourpassnow.com.

Accessibility: The Interagency Access Pass for free or discounted admission for US Citizens or permanent residents with permanent disabilities is accepted here. They are available at park entrance stations or online. The Visitor Centers are wheelchair/mobility equipment/stroller accessible and have accessible bathrooms. Manual loaner wheelchairs are available for free on a first-come-first-served at Giant Forest Museum, Lodgepole Visitor Center, and Kings Canyon Visitor Center. They may be used throughout the park but must be returned where they were borrowed from by closing on the same day. 

Temporary accessible-parking placards are available at the visitor center for visitors who do not have a state-issued parking permit. No documentation is required. Check out the NPS Sequoia & Kings Canyon phone app for alternative text for images. Free shuttle buses in the Giant Forest and Lodgepole areas operate during the Summer and on holidays and they are wheelchair accessible. 

There are wheelchair accessible picnic spots in the Foothills Area. There are wheelchair accessible campsites at the Cedar Grove, Grant Grove, and Mineral King Areas. Service animals must be on-leash throughout the park. Additional accessible trails and facilities information can be found here: https://www.nps.gov/seki/planyourvisit/accessibility.htm", latitude: 36.50014370311408, longitude: -118.5610676317433, country: "United States of America", state: "California", directions: "placeholder", intro: "Want to find the best trails in Sequoia National Park for an adventurous hike or a family trip? AllTrails has 110 great hiking trails, biking trails, running trails and more. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you.

Ready for your next hike or bike ride? Explore one of 27 easy hiking trails in Sequoia National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 72 to 19,032 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Sequoia National Park.")

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/parks/sequoiapark.png')
sequoia.small_map.attach(io: file, filename: 'sequoiapark.png')