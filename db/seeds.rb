# Park.create!(park_name: "", description: "", latitude: "", longitude: "", country: "", state: "", directions: "", intro: "")

require 'open-uri'



User.destroy_all
Park.destroy_all
Trail.destroy_all
Review.destroy_all

# USER DATA
demo = User.create!(fname: 'demo', lname: 'demo', email: 'demo@gmail.com', password: '12341234')

chris = User.create!(fname: 'Chris', lname: 'Park', email: 'chris@gmail.com', password: '12341234')
brian = User.create!(fname: 'Brian', lname: 'Ko', email: 'brian@gmail.com', password: '12341234')
jerry = User.create!(fname: 'Jerry', lname: 'Phan', email: 'jerry@gmail.com', password: '12341234')
amanda = User.create!(fname: 'Amanda', lname: 'Chen', email: 'amanda@gmail.com', password: '12341234')
laney = User.create!(fname: 'Laney', lname: 'Luong', email: 'laney@gmail.com', password: '12341234')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')
demo.pfp.attach(io: file, filename: 'person_placeholder.png')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/chris.png')
chris.pfp.attach(io: file, filename: 'chris.png')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/brian.png')
brian.pfp.attach(io: file, filename: 'brian.png')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/jerry.jpg')
jerry.pfp.attach(io: file, filename: 'jerry.jpg')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/amanda.jpg')
amanda.pfp.attach(io: file, filename: 'amanda.jpg')

file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/laney.JPG')
laney.pfp.attach(io: file, filename: 'laney.JPG')






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


review1 = Review.create!(user_id: chris.id, trail_id: vernal.id, rating: 3, comment: "Long awaited review as I did this hike in September 2017 and is the most beautiful hike I’ve ever done!!! Views at the top of Vernal and Nevada fall is just magical. September I think is perfect month as weather is just perfect and you get to enjoy gorgeous mist and waterfalls alongs with autumn view of John Muir Trail", review_date: "2022-01-11", conditions: ['icy', 'muddy'])
review2 = Review.create!(user_id: brian.id, trail_id: vernal.id, rating: 5, comment: "Did this hike 1/22, started at approximately 1130 at the trailhead parking directed from Apple Maps. Due to road closure, this parking lot adds about 0.5 miles to the hike. Trail started out paved with small amounts of snow- nothing that sneakers couldn’t handle. As the hike progresses, the trail becomes increasingly more snow and ice packed. Witnessed several people in sneakers/hiking boots slip and fall flat on their back at this portion. Spikes are highly recommended and necessary in my opinion, however I did witness some crazy people (unsafely) attempting to go up in regular boots or even Yeezys… These people were literally sliding down on their butts when we passed them later. We hiked all the way to Nevada Falls, with one or two minor ankle/thigh-deep post-holing incidents so be careful but overall it’s fine. From the parking lot, to Nevada falls, and back to the parking lot, clocked about 10 miles. Got back to the car around 5pm, but enjoyed a good amount of time at the top of the falls. Followed the trail map provided on AllTrails for navigation because it was easy to lose the trail at certain snowy/rocky-scramble portions. Be safe and enjoy! Beautiful hike ", review_date: "2022-01-01", conditions: ['icy', 'muddy'])
review3 = Review.create!(user_id: amanda.id, trail_id: vernal.id, rating: 5, comment: "Incredible hike with amazing views of both falls and the surrounding valley. It was definitely icy once you get past the bridge so bring micro spikes! I saw people without spikes slipping and it’s a bit steep near the top so you don’t want to be without stability there… also parts of the trail were closed so you can’t do the full loop as indicated on all trails but still a great hike! ", review_date: "2021-10-08", conditions: ['icy', 'muddy'])
review4 = Review.create!(user_id: jerry.id, trail_id: vernal.id, rating: 4, comment: "Awesome in the snow! Bring trekking poles to make it easier on yourself .", review_date: "2021-06-18", conditions: ['icy', 'muddy'])

review5 = Review.create!(user_id: laney.id, trail_id: halfDome.id, rating: 5, comment: "Me and my buddy went on 22nd january. Started 5 AM in the morning took winter route. Joh Muir trail was closed. fell some many times on the trail because of ice on the trail because I didn't bring any hiking poles or spikes. I usually do a lot of research and prepare for difficult hikes but this time didnt do any kind of research or prep. 

Wasn't expecting this much snow and ice. so the first half is solid ice and then second half majority of trail its deep snow. makes it lot harder to walk. fell few times because the snow was lot deeper. had to pay attention to every step we took , just to make sure we werent stepping on deep snow. 

Got to the base of subdome at 12:30pm. we didnt have spike or poles so just barely made to half of the subdome. 22md january the wind was strong it turned the snow into solid ice. 
I remember slipping and almost falling when trying to get to one of trees on subdome. 

so we decided it wasn't worth risking our life. If we had a rope or crampons we would have given it a try for sure but since we didnt have anything we accepted the fate. it was heart breaking but hey we still alive to climb another day. 

came down around 6 30pm. we didnt anyone in the morning on the trail except while coming back close to the water fall we say few people but they were just there to see water fall. ", review_date: "2022-01-24", conditions: ['icy', 'muddy'])
review6 = Review.create!(user_id: chris.id, trail_id: halfDome.id, rating: 4, comment: "Amazing trail!! First time climbing the half dome and was insane with the cables down, I need to come back in summer ", review_date: "2021-12-08", conditions: ['flooded','no-shade', 'rocky'])
review7 = Review.create!(user_id: brian.id, trail_id: halfDome.id, rating: 4, comment: "Started off tired from doing the Mist Trail to Vernal And Nevada Falls from the day before. This time went up John Muir trail straight through to Nevada Falls. Then headed to Half Dome. First half was walking through the woods with steady incline, which was more tiring than it should have been. Towards the last third was a steep rock scramble to subdome…normally these are my favorite type of hikes but by this point I was quite spent, but I still had enough last bit of strength to last me. But it was a struggle…I took break every 1-20 rock steps. Finally got to subdome where I passed out on the rock. Looking up at actual half dome was insane…we were previously debating whether to do  the cables or not but once we saw it, nope never mind, we don’t even have equipment. Descending would be another struggle, had to make sure I recovered enough. The hike back felt endless rock stepping. Overall was super tiring but kinda fun…would probably never do again but glad I did the Yosemite thing.", review_date: "2021-11-27", conditions: ['scramble', 'rocky'])
review8 = Review.create!(user_id: jerry.id, trail_id: halfDome.id, rating: 3, comment: "I intended on going to yosemite valley, but I met some other solo hikers and they were headed for Half Dome. I had some energy still so I tagged along. I only made it to Subdome, but it was worth it. beautiful views! but very hard! ", review_date: "2021-11-10", conditions: [])
review9 = Review.create!(user_id: amanda.id, trail_id: halfDome.id, rating: 5, comment: "Amazing experience, cables down made for a voyage. Water water water! Don’t underestimate the elevation gain, definitely a leg burner.", review_date: "2021-10-23", conditions: ['bugs', 'snow', 'washed out'])
review10 = Review.create!(user_id: chris.id, trail_id: halfDome.id, rating: 5, comment: "Exceptional hike, heavily trafficked but heavily signed. BRING GLOVES FOR CABLES AND ENOUGH WATER!!", review_date: "2021-09-24", conditions: ['fee','off-trail'])
review11 = Review.create!(user_id: laney.id, trail_id: halfDome.id, rating: 4, comment: "One of the most toughest, yet rewarding hikes I’ve ever done. Decent incline at the beginning and solid hike after, but after a couple miles you’ll reach half dome. Cables down means no crowds but of course a bit of a tougher climb. Harness, carabiner, gloves and a Prusik knott was what I used to climb. Definitely doable, be mindful that the cables are heavy and it is a bit technical, but if you do your research you should be just fine.", review_date: "2021-08-23", conditions: ['icy', 'muddy'])
review12 = Review.create!(user_id: brian.id, trail_id: halfDome.id, rating: 5, comment: "So good at the end,, just wish it’s easier well as I did it in late Nov. the sky getting dark around 5 pm,, there’s no much time left to enjoy the top. But I made it and the cable down experience to me is unforgettable:) Will do it again. Also we met some people in the trail, very fun and experiential.", review_date: "2021-05-12", conditions: ['muddy'])

review13 = Review.create!(user_id: brian.id, trail_id: glacier.id, rating: 5, comment: "Very short easy paved trail with gorgeous views of Yosemite Valley and Half Dome. While a bit of a drive from the Valley, well worth it for the view.", review_date: "2022-01-11", conditions: ['icy', 'muddy'])
review14 = Review.create!(user_id: amanda.id, trail_id: glacier.id, rating: 4, comment: "THis is one of the easiest hikes I think you can do up here on the south edge of Yosemite valley.  The hike is really so you can make best use of the all the views you'll get of the much of the park.", review_date: "2022-01-02", conditions: ['flooded', 'snow', 'over-grown'])
review15 = Review.create!(user_id: jerry.id, trail_id: glacier.id, rating: 3, comment: "This was phenomenal. Just take glacier road all the way to then end for probably the Easiest walk you’ll ever have with no effort to get some of the best views you’ll ever see. Do this hike for sure if the glacier road is open. Handicap accessible. Bathrooms. But it is a long drive from anywhere in the valley 35-50 minutes.", review_date: "2021-10-23", conditions: ['muddy'])

review20 = Review.create!(user_id: amanda.id, trail_id: sentinel.id, rating: 5, comment: "Definitely not easy as stated. It’s pretty uphill, so I would say it’s moderate. Plan to go at sunset, the 360 degree views are just impeccable. So far my favorite hike in Yosemite. ", review_date: "2022-01-02", conditions: ['icy', 'muddy'])
review21 = Review.create!(user_id: jerry.id, trail_id: sentinel.id, rating: 4, comment: "So, while this is listed as easy, it's actually more Moderate as a whole.  The reason why is because of the altitude and that you're nearly the highest point of the park.  What climbing you need to do on this hike will zep your lungs the entire time.  So while it isn't easy, it is always one of favorites since you're at height, you'll have the very best views entire park from the Dome too.  ", review_date: "2021-12-01", conditions: ['scramble','fee', 'bridge-out'])
review22 = Review.create!(user_id: brian.id, trail_id: sentinel.id, rating: 4, comment: "Like hiking on the moon in parts to get there. Uphill mostly and some mild scaling near the end to get to the top of the dome. Amazing 360 degree views. Sunset here is a mist. Nicer than Taft Point.", review_date: "2021-11-12", conditions: ['no-shade', 'rocky', 'bugs'])
review23 = Review.create!(user_id: laney.id, trail_id: sentinel.id, rating: 3, comment: "So it’s a fantastic hike IF Glacier Point Rd. is open, which it wasn’t due to frosty conditions from the night before. So ask the park rangers at the entrance to Yosemite if it’s open before setting your heart on it… Otherwise one of best views in Yosemite!", review_date: "2021-09-21", conditions: ['icy', 'muddy'])
review24 = Review.create!(user_id: chris.id, trail_id: sentinel.id, rating: 4, comment: "This was a gorgeous hike. I was alone pretty much the entire time until I got to the lake. It was pretty easy; the last mile was mostly uphill but doable. Highly recommend!", review_date: "2021-09-01", conditions: ['snow','rocky','blowdown'])
review25 = Review.create!(user_id: amanda.id, trail_id: sentinel.id, rating: 5, comment: "Great easy hike with amazing views! A little hazy due to wildfire smoke but you can still see quite a bit. It was pretty windy when we went; had to hold onto our hats. There were a few horse flies at the top but we didn’t get bit.", review_date: "2021-06-12", conditions: ['snow','washed-out'])

review26 = Review.create!(user_id: amanda.id, trail_id: mirror.id, rating: 4, comment: "Some great views, although not sure if it's worth the entire loop. Easy hike/stroll. We parked at the vernal falls lot because the lot for this is closed, adding about 1 mile total. Started without microspikes. Although you can definitely do it without spikes (carefully), you lose so much time being careful. Once we put them on we cruised through the whole loop in no time. Mirror lake is not very impressive in my opinion. View of valley walls are pretty cool though", review_date: "2022-01-11", conditions: ['icy', 'muddy'])
review27 = Review.create!(user_id: jerry.id, trail_id: mirror.id, rating: 2, comment: "like the majority of trails in yosemite NP this one is paved and crowded. plus it's mostly flat and the "lake" really just feels like a bulge in the river", review_date: "2021-05-21", conditions: ['rocky', 'snow'])




