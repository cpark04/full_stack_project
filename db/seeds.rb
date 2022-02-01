# Park.create!(park_name: "", description: "", latitude: "", longitude: "", country: "", state: "", directions: "", intro: "")

require 'open-uri'



User.destroy_all
Park.destroy_all
Trail.destroy_all


# USER DATA
demo = User.create!(fname: 'demo', lname: 'demo', email: 'demo@gmail.com', password: '12341234')

chris = User.create!(fname: 'Chris', lname: 'Park', email: 'chris@gmail.com', password: '12341234')
brian = User.create!(fname: 'Brian', lname: 'Ko', email: 'brian@gmail.com', password: '12341234')
jerry = User.create!(fname: 'Jerry', lname: 'Phan', email: 'jerry@gmail.com', password: '12341234')
amanda = User.create!(fname: 'Amanda', lname: 'Chen', email: 'amanda@gmail.com', password: '12341234')
laney = User.create!(fname: 'Laney', lname: 'Luong', email: 'laney@gmail.com', password: '12341234')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')
demo.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')

chris.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')

brian.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')

jerry.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')

amanda.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')

laney.pfp.attach(io: file, filename: 'person_placeholder.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')






# PARK DATA
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

  Ready for your next hike or bike ride? Explore one of 37 easy hiking trails in Yosemite National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 6 to 46,030 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Yosemite National Park.", acre: "7759,620 acres", hours: ["All day", "All day", "All day", "All day", "All day", "All day", "All day"], contact: "209-372-0200", social_url: [["Facebook", "https://www.facebook.com/YosemiteNPS"], ["Twitter", "http://www.twitter.com/YosemiteNPS"], ["Website", "http://www.nps.gov/yose/"]])
  
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

Ready for your next hike or bike ride? Explore one of 27 easy hiking trails in Sequoia National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 72 to 19,032 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Sequoia National Park.", acre: "404,063 acres", contact: "559-565-3341", social_url: [["Facebook","https://www.facebook.com/SequoiaKingsNPS/"], ["Website", "http://www.nps.gov/seki/"]])

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/parks/sequoiapark.png')
sequoia.small_map.attach(io: file, filename: 'sequoiapark.png')



# TRAIL DATA




vernal = Trail.create!(park_id: yosemite.id, latitude: 37.73279, longitude: -119.55782, description: "Hike to two breathtaking waterfalls along some of Yosemite Valley's most popular hiking trails. If you only have time for one hike while in Yosemite look no further - the Mist Trail is the hike for you. It is no wonder why this trail is one of the most traveled in Yosemite National Park. You will hike so close to these two massive waterfalls that you may get wet from the trail. The best time to hike this trail is in Spring or early Summer, while the snow runoff is high and the falls are full of water.

The Mist Trail starts at Happy Isles Trailhead (YARTS Happy Isles shuttle stop #16, and within walking distance of Curry Village and the parking lot). The park recommends starting early to avoid the larger crowds. After a brief stroll along the river, you climb a pretty steep initial accent over stone steps until you reach the footbridge, which offers the first glimpse of Vernal Falls in the distance. You will also find a water fountain and restrooms. You will then continue up to Vernal Falls, past Emerald Pool, and alongside Nevada Falls until you reach the high-point of this hike.

You can choose to take the alternate route down along the John Muir Trail to see great views of Nevada Falls and Liberty Cap in the distance before meeting back up with the Mist Trail near the footbridge. This route back is slightly longer, but offers a change of scenery and is easier on the knees. Before hopping back on the YARTS shuttle, treat yourself to some ice cream or a refreshing drink at the small stand, or head over to Curry Village for a larger variety of choices.", length: "6.0 mi", elevation_gain: "2,162 ft", route_type: "Loop", country: "United States of America", state: "California", trail_name: "Vernal and Nevada Falls via Mist Trail", intro: "Vernal and Nevada Falls via Mist Trail is a 6 mile heavily trafficked loop trail located near Yosemite Valley, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking and is best used from May until October.", park_name: "Yosemite National Park", facilities: "If you visit the park in the off season you can normally park at the Happy Isles trailhead parking area and hike to the trailhead. During peak season park anywhere you can that is near the shuttle route, then take the shuttle to stop #16.", contact: "Public Information Office
P.O. Box 577
Yosemite, CA 95389
Call: 209/372-0200; press 3 then 5.
Time: 9 am to 5 pm Pacific Time (closed for lunch)", tips: "There is a water fountain at the footbridge, but you will need to bring at least 1L of water to hold you until you get back near the end of the hike.", getting_there: "Follow the link for information about travel to Yosemite. http://www.nps.gov/yose/planyourvisit/driving.htm", tags: ['Hiking', 'Forest', 'Partially paved', 'River', 'Views', 'Waterfall', 'Wildflowers', 'Wildlife', 'Rocky', 'Fee', 'No dogs'], difficulty: "hard")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/VernalAndNevadaFalls.png')
vernal.small_map.attach(io: file, filename: 'VernalAndNevadaFalls.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/vernal-header-photo.jpeg')
vernal.head_photo.attach(io: file, filename: 'vernal-header-photo.jpeg')

halfDome = Trail.create!(park_id: yosemite.id, latitude: 37.73268, longitude: -119.55794, description: "Half Dome is a serious endurance hike taking you 4800 feet above the Yosemite Valley to spectacular views of Vernal and Nevada Falls, Liberty Cap, the Yosemite Valley, and the High Sierra. This is one of Yosemite National Park’s most iconic hikes. You must obtain a permit to hike to the summit of Half Dome. 

Preparation and safety are key to having a fantastic experience. This is a hike that requires users to be in good shape. Most people take 10 to 12 hours to hike to Half Dome and back, depending on the way chosen to come down. Plan to leave around sunrise (or earlier) and then have a non-negotiable turn-around time. The trail is fairly well marked but make sure to watch for all trail signs as it can be easy to miss them.

The elevation gain is very strenuous, starting with a steep climb to Vernal Falls, followed by another steep climb to the top of Nevada Falls. There is about 1 mile of fairly level hiking before reaching Little Yosemite Campground, followed by steep switchbacks through the forest. At about 7 miles into your trip you’ll reach a break in the trees with a beautiful view of Half Dome and the valley below. Some steep switchbacks carved like stairs into the rock guide the way up to the top of what is known as Sub Dome. Once you walk across the rocky surface of Sub Dome you’ll arrive at the base of the cables with only 400 feet to go. These last 400 feet are the most challenging, but also the most rewarding (although you may not realize it until users are comfortably back on the valley floor).

The part of this journey that makes the ascent up Half Dome famous is the cable route. Two steel cables allow hikers to climb the last 400 feet to the summit without rock climbing equipment. The cables are around a 45-55 degree grade, with wooden supports every 10 to 20 feet to rest and maintain your balance. Using gloves is highly recommended to get a better grip and avoid painful blisters. Be sure to tightly secure your water bottles and cameras for the climb up because you will want them once at the top. Once you have reached the summit, take the time to rest for a while and take in the incredible panoramic views. The Half Dome cables usually go up the Friday before Memorial Day (conditions permitting) and come down the day after Columbus Day.

Compared to the hike up, the return journey flies by and before you know it you will be back at the top of Nevada falls. You have 2 options here: the Mist Trail, which is how you came up is about 3.4 miles (5.5km), or the John Muir Trail for a slight change of scenery (about 0.5 miles further). The waterfalls suddenly seem much more pleasant as you hike down compared to the earlier climb, and it's hard to hold back a smile as you reach the Vernal Falls footbridge where you can refill your water (there are also facilities here). About 30 minutes later you are back at the trailhead where you can catch a free shuttle to your car or anywhere else in the valley (there is a concession stand near the bus stop where you can buy cold drinks and ice cream).

---

This is one of Yosemite's many backpacking routes. While some can be done as a day hike, a permit is required if you plan on doing a multi-day trip. Permits are able to be reserved up to 24 weeks in advance and up until 4 days beforehand. Permits and more information can be found here: https://www.nps.gov/yose/planyourvisit/wildpermits.htm

Sixty percent of reservations are available 24 weeks in advance; the remaining 40 percent are available two weeks in advance and up to four days before your hike. Each confirmed reservation costs $5 plus $5 per person. This fee is non-refundable and non-transferable.

If you are granted a permit, the fee will need to be paid within 48 hours of your email confirmation. Permits will need to be picked up in the park at one of the following permit stations: https://www.nps.gov/yose/planyourvisit/permitstations.htm 

Bear boxes are required to store all food while on overnight trips. Backpackers have the ability to spend a night prior to departure or night of return at the Backpackers Campground. There are 5 Backpackers Campground available that can be found here: https://www.nps.gov/yose/planyourvisit/bpcamp.htm", length: "15.0 mi", elevation_gain: '5,193 ft', route_type: 'Out & back', country: 'United State of America', state: 'California', trail_name: 'Half Dome via the John Muir Trail (JMT)', intro: "Try this 15.00 mile, out&back trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 9 h 32 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.", park_name: 'Yosemite National Park', facilities: "Best option is the trailhead parking lot. Just past Curry Village on the road marked 'Service Vehicles Only.' You can enter this road legally to enter the trailhead parking lot. Trailhead lot has bear-proof storage lockers if you want to store stuff you don't need to take up the trail. Bears will break into cars with food, etc.  If trailhead lot is full, park at Curry Village, which is near east end of Southside Drive.

Flush toilets are available at the Vernal Fall Footbridge (below Vernal Fall). Composting toilets are available near Emerald Pool (above Vernal Fall), near the top of Nevada Fall, and in Little Yosemite Valley", contact: "Call (209) 372-0200 (then dial 3 then 5)
The Yosemite public information office is open from 9 am to 5 pm Pacific time (closed for lunch). If the ranger is already on the line, you'll be returned to the main menu. If the ranger is not there, you can leave a message and they'll return your call.
Public Information Office
PO Box 577
Yosemite, CA 95389 

California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543

More info here: http://www.nps.gov/yose/planyourvisit/halfdome.htm", tips: "This trail is possible as a single day hike only if you get a very early start. You could break the trail into two day backpacking adventure by staying at Little Yosemite Valley campground.

The cable route to the summit is open between May and October. Check the NPS website for exact dates, which are weather dependent.

Tips while using the cables:  Take your time and be patient with slower hikers.  Allow faster hikers to pass you (when possible).  Remain on the inside of the cables

Do not attempt the ascent if storm clouds are in the area, the ground is wet (the cables and rock become very slick when wet; most accidents on the cables occur during wet conditions

Bring well broken-in boots with good ankle support and good traction. Some of the most common injuries Half Dome hikers suffer are blisters and ankle injuries; good footwear is the best way to prevent these problems. Also recommend gloves be used on the cables. 

No trash service on trails. Pack out all trash. When possible, help park rangers by picking up trash that you encounter on the trail. Bearproof trash cans are available at trailheads.

Have plenty of water. NPS recommends:
1 gallon (4 liters) if hiking to the top of Half Dome
2 quarts (2 liters) if hiking only to the top of Nevada Fall
1 quart (1 liter) if hiking only to the top of Vernal Fall
The only treated water on the trail is available (summer only) at a drinking fountain at the Vernal Fall Footbridge (less than a mile from the trailhead). Merced River water is available up to Little Yosemite Valley, however treat water by boiling, using iodine, or using giardia-rated water filter

Check Recreation.gov for latest permit requirements.", getting_there: "Directions from Arch Rock (south) Entrance: Travel eastward into the Yosemite Valley, 11.5 miles to the Curry Village day-use area. Park your car and take the shuttle to stop number 16, Happy Isles. Head eastward along the paved path that leads along the northern bank of the Merced River.  Even better  once you've reached the Curry Village vicinity of the valley, look for the signs for trailhead parking.  You are allowed to drive past the 'service vehicles only' signs if you're going to the trailhead parking.", tags: ['Hiking', 'Forest', 'Partially paved', 'River', 'Views', 'Waterfall', 'Wildflowers', 'Wildlife', 'Rocky', 'Fee', 'No dogs'], difficulty: "hard")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/half-dome/half-dome-map.png')
halfDome.small_map.attach(io: file, filename: 'half-dome-map.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/half-dome/half-dome-header.jpeg')
halfDome.head_photo.attach(io: file, filename: 'half-dome-header.jpeg')

glacier = Trail.create!(park_id: yosemite.id, latitude: 37.72759, longitude: -119.57437, description: "Glacier Point is a popular stop for many new visitors to Yosemite National Park on their way down to Yosemite Valley.  Although it's not much of a hike, the view at the end of the paved walkway will leave you breathless.  You will see (left to right) both Upper and Lower Yosemite Falls, Yosemite Valley below, Clouds Rest, Half Dome standing proud, and even Vernal and Nevada Falls.  The expansive views of Yosemite Valley will fill you with wonder.

There are no shuttle services available between Yosemite Valley and Glacier Point. There is a limited bus to Glacier Point for a tour which is available in summer- reservations are required for these bus tours.

During the winter months, the road to Glacier Point is closed to cars- but strap on a pair of cross-country skis or snowshoes and you should be good to go! Cross country skiers are known to spend time here on a good snow day. If you want to stay overnight, reserve a spot in the Glacier Point Ski Hut where there are bunk beds (dormitory style), a wood fire, food, and good company.

Accessibility: There are 8 designated accessible spaces in the paved parking lot off of Glacier Point Road at the south end of the trail. All of them are van-accessible with striped access aisles. The trail surface is paved asphalt and smooth. It is typically at least 6 feet wide. 

The most accessible portion of the trail is the eastern side in the first about 0,2 miles when going counterclockwise. The majority of the trail is estimated to be in the mostly gentle (5% or less) grade category but there are steeper sections at about 0.2-0.4 miles when going counterclockwise. Trail goers using wheelchairs/mobility equipment or strollers may need assistance in the steeper sections or to avoid them for safety. The restrooms, gift shop, and snack bar located at the trailhead are all wheelchair accessible.", length: "0.6 mi", elevation_gain: "167 ft", route_type: "Loop", country: "United States of America", state: "California", trail_name: "Glacier Point Trail", intro: "Glacier Point Trail is a 0.6 mile heavily trafficked loop trail located near Yosemite Valley, California that features a waterfall and is good for all skill levels. The trail is primarily used for hiking and walking and is best used from May until October.", park_name: "Yosemite National Park", tips: "If you entered from the South Entrance, turn right onto Glacier Point Road from Highway 41.  It is about 15 miles until you reach Glacier Point.  If you entered from the West Entrance (or were in Yosemite Valley) follow Highway 41 toward Wawona and Mariopsa Grove, and turn left at Glacier Point Road.", tags: ['Wheelchair friendly', 'Hiking', 'Forest', 'Partially paved', 'Kid friendly', 'Stroller friendly', 'Waterfall', 'Wildflowers', 'Wildlife', 'Rocky', 'Fee', 'No dogs'], difficulty: "easy")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/glacierpoint/glacierpoint-map.png')
glacier.small_map.attach(io: file, filename: 'glacierpoint-map.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/glacierpoint/glacierpoint-header.jpeg')
glacier.head_photo.attach(io: file, filename: 'glacierpoint-header.jpeg')

moroRock = Trail.create!(park_id: sequoia.id, latitude: 36.54699, longitude: -118.76568, description: "The Moro Rock Trail starts from the Moro Rock parking area, and traverses a narrow, steep ¼-mile staircase to the summit. Quickly you’ll see the Great Western Divide's peaks, the San Joaquin Valley, and wilderness to the east. The chain railings along the trail make it relatively safe, but watch out for small children. People with a fear of heights might not enjoy the steep drop-offs on either side of the trail.

During summer, free shuttles run to this trailhead. On weekends, the road closes to private vehicles. In winter, ski trails lead to the Moro Rock parking area, but the trail is closed due to hazardous conditions.

To reach the top of this granite dome, take the stairway that climbs up 300 feet (.09 km) to the 6,275 ft (2,050 km) summit. This parking area is two miles (3.2 km) from the Generals Highway. In summer, free park shuttles at the Giant Forest Museum will drop you off at this parking area.

 At the top is a spectacular 360° view from the Great Western Divide to the east around to the western half of Sequoia National Park. Consider summiting Moro Rock at dawn or before dusk. It offers a huge expanse of night sky, a rare view in forested parts of the parks. One of the best places in the parks to see sunset and moonrise. 

Moro Rock is one of several granite domes in these parks. These domes formed millions of years ago when magma beneath the surface cooled into granite. Since erosion removed the layers of softer rock that were above them, they have been rebounding and lifting a tiny bit each year.

Take your time - unless you are used to this elevation this walk can be challenging. Don't climb the stairs if any ice or snow is present. Moro Rock is also prone to lightning strikes. If there is any evidence of an approaching storm, get off the rock quickly but safely.", length: "0.5 mi", elevation_gain: "177 ft", route_type: "Out & back", country: "United States of America", state: "California", trail_name: "Moro Rock Trail", intro: "Moro Rock Trail is a 0.5 mile heavily trafficked out and back trail located near Sequoia National Park, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking and is best used from May until October.", park_name: "Sequoia National Park", contact: "There are full facilities at the Giant Forest Museum (opens in May), there is parking near Moro Rock in the summer. There are also trash cans, historical exhibits at the trailhead (with audio tours), and benches for resting.", getting_there: "Sequoia and Kings Canyon National Parks
47050 Generals Highway
Three Rivers, CA 93271-9700
559-565-3341  For 24-hour recorded information.
Speak with park staff on weekdays only 8:15 a.m.-4:15 p.m.", tags: ['Wheelchair friendly', 'Hiking', 'Forest',  'Kid friendly', 'Wildflowers',  'Rocky', 'Fee', 'No dogs'], difficulty: "moderate")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/moro-rock/moro-rock-map.png')
moroRock.small_map.attach(io: file, filename: 'moro-rock-map.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/moro-rock/moro-rock-header.jpeg')
moroRock.head_photo.attach(io: file, filename: 'moro-rock-header.jpeg')

sentinel = Trail.create!(park_id: yosemite.id, latitude: 37.71243, longitude: -119.58632, description: "Sentinel Dome starts from Glacier Point Road and scales one of Yosemite's high domes and offers a fully breathtaking 360-degree view.

It provides one of the very best NP experiences for the effort you can find. To the west, you'll see almost a reverse Tunnel View of the Yosemite Valley and can see beyond the Merced River canyon. To the north is Yosemite Valley, including El Capitan and Yosemite Falls. You'll see Nevada Falls, Half Dome and Clouds Rest to the east, and many of the High Sierra peaks.

This summit was made famous by Ansel Adam's 1940 photo of the Jeffrey Pine tree. The tree perished in 1977 and fell over in 2003.  The trail crosses a bridge over a stream near the beginning of the hike and gradually slopes up along a granite floor among the pines.  It then turns slightly left and after a gradual climb through more pines, meets the base of the dome, where you then take a sharp left straight up onto the exposed dome.  Enjoy the views!

An alternate route begins at the service road entrance about a half-mile towards Glacier Point from the main trailhead. This spur joins the main trail at the base of the dome and is about two-thirds of a mile.
", length: "2.1 mi", elevation_gain: "456 ft", route_type: "Out & back", country: "United States of America", state: "California", trail_name: "Sentinel Dome Trail", intro: "Sentinel Dome Trail is a 2.1 mile heavily trafficked out and back trail located near Yosemite Valley, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and is best used from April until November.", park_name: "Yosemite National Park", contact: "Small parking lot 17.3 miles up Glacier Point road on the left (at true trailhead which is also the trailhead to Taft Point), also pit toilets, and room for several more cars about a half mile further on the right - across from service road entrance.", getting_there: "Yosemite National Park
Call 209/372-0200 (then dial 3 then 5)
The public information office is open from 9 am to 5 pm Pacific time (closed for lunch). If the ranger is already on the line, you'll be returned to the main menu. If the ranger is not there, you can leave a message and they'll return your call.

Public Information Office
PO Box 577
Yosemite, CA 95389", tags: ['Hiking', 'Forest', 'View', 'Wildflowers', 'Wildlife', 'Fee', 'No dogs'], difficulty: "moderate")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/sentinel/sentinel-map.png')
sentinel.small_map.attach(io: file, filename: 'sentinel-map.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/sentinel/sentinel-header.jpeg')
sentinel.head_photo.attach(io: file, filename: 'sentinel-header.jpeg')

mirror = Trail.create!(park_id: yosemite.id, latitude: 37.73949, longitude: -119.55979, description: "The Mirror Lake via Valley Loop Trail is an easy loop in Yosemite National Park, with the pathway around Mirror Lake being a must-see for its beautiful reflections of Half Dome and its abundance of wildflowers during the early summer months. Mirror Lake is a seasonal calm lake located on Tenaya Creek and situated in Tenaya Canyon directly between North Dome and Half Dome. It is the last remnant of a large glacial lake that once filled the entire Yosemite Valley.

This is a well-marked trail and significantly less crowded than other trails in the park, since it is further away from Yosemite lodging. The trailhead is at the far east end of Yosemite Valley and many visitors take the free shuttle bus or hike east from Curry Village or the Ahwahnee Hotel where there is a parking area and drinking water is available. The shuttle stops directly at the trailhead. There's a one mile paved trail walkway and bike path along Tenaya Creek to the north side of the lake and an unpaved trail along the south side.

Starting from the Upper Pines Campground lot, users recommend walking the paved and plowed path up to this trailhead if interested to add distance. During the winter, the mirror lake trail is completely covered in partially packed snow, so users should bring proper winter footwear like snowshoes or crampons or else feet will constantly sink down and slip. During the summer months and fall, this is a great route to see plenty of local flora and fauna, since as a less-frequented area, there is more nature to see here.

Accessibility: There are at least 10 designated accessible spaces in the paved parking lot off of Yosemite National Park Road at the southwest end of the trail. All of them are van-accessible with striped access aisles. The trail surface is paved asphalt or a natural surface (dirt, rocks, roots). It is typically at least 4 feet wide. 

The most accessible portion of the trail is the first about 1.5 miles when going counterclockwise. The majority of the trail is estimated to be in the moderately steep (8% or less) category but there are steeper sections at about 1.5 and 2.8-3.0 miles when going counterclockwise. All-terrain tires or motorized equipment may be needed for the surface type and grade after about 1.5 miles. The most accessible portion of the trail is the Mirror Lake Paved Trail: https://www.alltrails.com/trail/us/california/mirror-lake-paved-trail", length: "4.4 mi", elevation_gain: "301ft", route_type: "Loop", country: "United States of America", state: "California", trail_name: "Mirror Lake via Valley Loop Trail", intro: "Mirror Lake via Valley Loop Trail is a 4.4 mile moderately trafficked loop trail located near Yosemite Valley, California that features a lake and is rated as moderate. The trail is primarily used for hiking, running, and snowshoeing and is best used from March until November.", park_name: "Yosemite National Park", tags: ['Hiking', 'Forest', 'Partially paved', 'River', 'Views', 'Wildflowers', 'Wildlife', 'Rocky', 'Fee', 'No dogs'], difficulty: "moderate")
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/mirror/mirror-map.png')
mirror.small_map.attach(io: file, filename: 'mirror-map.png')
file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/trails/mirror/mirror-header.jpeg')
mirror.head_photo.attach(io: file, filename: 'mirror-header.jpeg')

# Trail.create!(park_id: "", latitude: "", longitude: "", description: "", length: "", elevation_gain: "", route_type: "", country: "", state: "", trail_name: "", intro: "", park_name: "", facilities: "", contact: "", tips: "", getting_there: "", tags: [], difficulty: "")

# file = open('')
# vernal.small_map.attach(io: file, filename: '')
# file = open('')
# vernal.head_photo.attach(io: file, filename: '')







### Reviews data


review1 = Review.create!(user_id: chris.id, trail_id: vernal.id, rating: 3, comment: "Okay trail", review_date: "2022-01-11")
review2 = Review.create!(user_id: brian.id, trail_id: vernal.id, rating: 5, comment: "Great trail", review_date: "2022-01-11")
review3 = Review.create!(user_id: amanda.id, trail_id: vernal.id, rating: 1, comment: "Great trail", review_date: "2022-01-11")
review4 = Review.create!(user_id: jerry.id, trail_id: vernal.id, rating: 2, comment: "Great trail", review_date: "2022-01-11")
