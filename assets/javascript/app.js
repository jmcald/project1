var ryan= [];
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam1jYWxkMCIsImEiOiJjam1sOXltbmowMDUwM3FrNHpzZHN0cXdsIn0.muI4K4RBCzUpH3Qbp_7uFA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
L.marker([51.505, -0.09]).addTo(mymap);


var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=" + searchTerm + "&key=AIzaSyCfYHoTgzB2ZdWyhCujzuQoK32-0PmV_KA"

var searchTerm = "Yellowstone"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  // ignore everything above; or don't

  var parks = [
    {
        id: "ABLI",
        name: "Abraham Lincoln Birthplace National Historical Park"
    },
    {
        id: "ACAD",
        name: "Acadia National Park"
    },
    {
        id: "ADAM",
        name: "Adams National Historical Park"
    },
    {
        id: "ADNM",
        name: "Adams National Monument"
    },
    {
        id: "AFAM",
        name: "African American Civil War Memorial National Memorial"
    },
    {
        id: "AFBG",
        name: "African Burial Ground National Monument"
    },
    {
        id: "AGFO",
        name: "Agate Fossil Beds National Monument"
    },
    {
        id: "ALAG",
        name: "Alagnak Wild River National Wild And Scenic River"
    },
    {
        id: "ALCA",
        name: "ALcatraz Island"
    },
    {
        id: "ALEU",
        name: "Aleutian World War II National HIstoric Area"
    },
    {
        id: "ALFL",
        name: "Alibates Flint Quarries National Monument"
    },
    {
        id: "ALPO",
        name: "Allegheny Portage Railroad National Historic Site"
    },
    {
        id: "AMIS",
        name: "Amistad National Recreation Area"
    },
    {
        id: "ANAC",
        name: "Anacostia Park"
    },
    {
        id: "ANDE",
        name: "Andersonville Natinla Historic Site"
    },
    {
        id: "ANIA",
        name: "Aniakchak National Monument and Preserve"
    },
    {
        id: "ANJO",
        name: "Andrew Johnson National Historic Site"
    },
    {
        id: "ANTI",
        name: "Antietam National Battlefield"
    },
    {
        id: "APCO",
        name: "Appomattox Court House National Historical Park"
    },
    {
        id: "APIS",
        name: "Apostle Islands National Lakeshore"
    },
    {
        id: "APPA",
        name: "Appalachian National Scenic Trail"
    },
    {
        id: "ARCH",
        name: "Arches National Park"
    },
    {
        id: "ARHO",
        name: "Arlington House The Robert E. Lee Memorial"
    }
    {
        id: "ARPO",
        name: "Arkansas Post National Memorial"
    },
    {
        id: "ASIS",
        name: "Assateague Island National Seashore"
    },
    {
        id: "AZRU",
        name: "Aztec Ruins National Monument"
    },
    {
        id: "BADL",
        name: "Badlands National Park"
    },
    {
        id: "BAND",
        name: "Bandelier National Monument"
    }
    {
        id: "BAWA",
        name: "Baltimore-Washington National Parkway"
    },
    {
        id: "BELA",
        name: "Bering Land Bridge National Preserve"
    },
    {
        id: "BEOL",
        name: "Bent's Old Fort National Historic Site"
    },
    {
        id: "BEPA",
        name: "Bear Paw Battlefield"
    },
    {
        id: "BIBE",
        name: "Big BEnd National Park"
    },
    {
        id: "BICA",
        name: "Bighorn Canyon National Recreation Area"
    },
    {
        id: "BICY",
        name: "Big Cypress National Preserve"
    },
    {
        id: "BIHO",
        name: "Big Hole National Battlefield"
    },
    {
        id: "BISC",
        name: "Biscayne National Park"
    },
    {
        id: "BISO",
        name: "Big South Fork National River and Recreation Area National River"
    },
    {
        id: "BITH",
        name: "Big Thicket National Preserve"
    },
    {
        id: "BLCA",
        name: "Black Canyon Of The Gunnison National Park"
    },
    {
        id: "BLRI",
        name: "Blue Ridge Parkway"
    },
    {
        id: "BLUE",
        name: "Bluestone National Scenic River National Wild And Scenic River"
    },
    {
        id: "BOAF",
        name: "Boston African American National Historic Site"
    },
    {
        id: "BOHA",
        name: "Boston Harbor Islands National Recreation Area"
    },
    {
        id: "BOST",
        name: "Boston National Historical Park"
    },
    {
        id: "BOWA",
        name: "Booker T. Washington National Monument"
    },
    {
        id: "BRCA",
        name: "Bryce Canyon National Park"
    },
    {
        id: "BRCR",
        name: "Brices Cross Roads National Battlefield Site"
    },
    {
        id: "BRVB",
        name: "Brown v. Board Of Education National Historic Site"
    },
    {
        id: "BUFF",
        name: "Buffalo National River"
    },
    {
        id: "BUIS",
        name: "Buck Island Reef National Monument"
    },
    {
        id: "CABR",
        name: "Cabrillo National Monument"
    },
    {
        id: "CACH",
        name: "Canyon De Chelly National Monument"
    },
    {
        id: "CACL",
        name: "Castle Clinton National Monument"
    },
    {
        id: "CACO",
        name: "Cape Cod National Seashore"
    },
    {
        id: "CAGR",
        name: "Casa Grande Ruins National Monument"
    },
    {
        id: "CAHA",
        name: "Cape Hatteras National Seashore"
    },
    {
        id: "CAHE",
        name: "Capitol Hill Parks"
    },
    {
        id: "CAKR",
        name: "Cape Krusenstern National Monument"
    },
    {
        id: "CALO",
        name: "Cape Lookout National Seashore"
    },
    {
        id: "CAME",
        name: "Cape Henry National Memorial"
    },
    {
        id: "CANA",
        name: "Canaveral National Seashore"
    },
    {
        id: "CANY",
        name: "Canyonlands National Park"
    },
    {
        id: "CARE",
        name: "Capitol Reef National Park"
    },
    {
        id: "CARI",
        name: "Cane River Creole National Historical Site"
    },
    {
        id: "CARL",
        name: "Carl Sandburg Home National Historic Site"
    },
    {
        id: "CASA",
        name: "Castillo De San Marcos National Monument"
    },
    {
        id: "CATO",
        name: "Catocin Mountain Park"
    },
    {
        id: "CAVE",
        name: "Carlsbad Caverns National Park"
    },
];
