import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  constructor() { }
  showPhotos = [];
  allRegions = [];
  allStates = [];
  allKeywords =[];
  modalObj = {};
  ngOnInit() {
    this.showDefault();
    this.findAllRegions();
    this.findAllStates();
  }

  photoContent =
  [
    {
      id: 1, img: 'assets/west/silver.jpg',
      default: true,
      state: 'OR',
      region: 'West',
      location: 'Silver Falls, OR',
      hideText: 'The South Falls'
    },
    {
      id: 2, img: 'assets/east/ny-night.jpg',
      default: true,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'View from top of the Empire State Building'
    },
    {
      id: 3, img: 'assets/between/mesa-verde.jpg',
      default: true,
      state: 'CO',
      region: 'Between',
      location: 'Mesa Verde, CO',
      hideText: 'The Cliff Palace'
    },
    {
      id: 4, img: 'assets/west/weird.jpg',
      default: true,
      state: 'OR',
      region: 'West',
      location: 'Portland, OR',
      hideText: 'Near the original Voodoo Doughnuts'
    },
    {
      id: 5, img: 'assets/between/valley-fire.jpg',
      default: true,
      state: 'NV',
      region: 'Between',
      location: 'Valley of Fire, NV',
      hideText: 'The Ocean bottom from millions of years ago'
    },
    {
      id: 6, img: 'assets/east/ny-bridge.jpg',
      default: true,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: "That's a Famous Bridge"
    },
    {
      id: 7, img: 'assets/between/grand-canyon.jpg',
      default: true,
      state: 'AZ',
      region: 'Between',
      location: 'Grand Canyon, AZ',
      hideText: 'View from the South Rim'
    },
    {
      id: 8, img: 'assets/between/deethstar.jpg',
      default: true,
      state: 'NV',
      region: 'Between',
      location: 'Deeth Starr Valley, NV',
      hideText: 'I guess if you live in the middle of nowhere you can call it whatever you want'
    },
    {
      id: 9, img: 'assets/between/nowhere.jpg',
      default: true,
      state: 'NE',
      region: 'Between',
      location: 'Nowhere or Now Here, NE',
      hideText: 'Embrace the feeling'
    },
    {
      id: 10, img: 'assets/east/ny-port.jpg',
      default: true,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'From Liberty Island'
    },
    {
      id: 11, img: 'assets/between/valley-road.jpg',
      default: true,
      state: 'AZ',
      region: 'Between',
      location: 'Kaibab Indian Reservation, AZ',
      hideText: 'On the way to the Grand Canyon'
    },
    {
      id: 12, img: 'assets/between/rocky.jpg',
      default: true,
      state: 'CA',
      region: 'Between',
      location: 'Klamath, CA',
      hideText: 'Exactly what you think the Pacific should be'
    },
    {
      id: 13, img: 'assets/west/grain.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Salem, OR',
      hideText: 'Downtown near Riverfront Park'
    },
    {
      id: 14, img: 'assets/west/billy-chinnok.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Lake Billy Chinook, OR',
      hideText: 'Water does not mess around'
    },
    {
      id: 15, img: 'assets/east/niagra2.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Buffalo, NY',
      hideText: 'The only time Canada seems trashy, (like putting a McDonalds on the side on the Grand Canyon)'
    },
    {
      id: 16, img: 'assets/between/nebr.jpg',
      default: false,
      state: 'NE',
      region: 'Between',
      location: 'Near Nebraska City, NE',
      hideText: 'I love the pink granite'
    },
    {
      id: 17, img: 'assets/between/arch.jpg',
      default: false,
      state: 'NV',
      region: 'Between',
      location: 'Valley of Fire, NV',
      hideText: 'Arch Rock'
    },
    {
      id: 18, img: 'assets/between/butte-road.jpg',
      default: false,
      state: 'AZ',
      region: 'Between',
      location: 'Kaibab Indian Reservation, AZ',
      hideText: 'On the way to the Grand Canyon'
    },
    {
      id: 19, img: 'assets/between/butte.jpg',
      default: false,
      state: 'WY',
      region: 'Between',
      location: 'Near Urie, WY',
      hideText: 'On the way to SLC'
    },
    {
      id: 20, img: 'assets/between/mesa-verde2.jpg',
      default: false,
      state: 'CO',
      region: 'Between',
      location: 'Mesa Verde, CO',
      hideText: 'In the Cliff Palace'
    },
    {
      id: 21, img: 'assets/between/monument.jpg',
      default: false,
      state: 'AZ',
      region: 'Between',
      location: 'Near Red Mesa, AZ',
      hideText: 'Near Monument Valley'
    },
    {
      id: 22, img: 'assets/between/motel.jpg',
      default: false,
      state: 'WY',
      region: 'Between',
      location: 'Rawlins, WY',
      hideText: 'This motel still uses keys, no keycards'
    },
    {
      id: 23, img: 'assets/between/rock-art.jpg',
      default: false,
      state: 'NV',
      region: 'Between',
      location: 'Valley of Fire, NV',
      hideText: 'Petroglyphs at Atlatl Rock'
    },
    {
      id: 24, img: 'assets/between/salt-flat.jpg',
      default: false,
      state: 'UT',
      region: 'Between',
      location: 'Great Salt Flats, UT',
      hideText: 'Whole lot of nothing'
    },
    {
      id: 25, img: 'assets/between/smokycreek.jpg',
      default: false,
      state: 'TN',
      region: 'Between',
      location: 'Gatlinburg, TN',
      hideText: 'Gatlinburg is beautiful -- away from the strip'
    },
    {
      id: 26, img: 'assets/between/utah-cap.jpg',
      default: false,
      state: 'UT',
      region: 'Between',
      location: 'Salt Lake City, UT',
      hideText: 'State Capital Building SLC'
    },
    {
      id: 27, img: 'assets/between/utah.jpg',
      default: false,
      state: 'UT',
      region: 'Between',
      location: 'Near Emory, UT',
      hideText: 'The hills east of SLC'
    },
    {
      id: 28, img: 'assets/between/valley-fire2.jpg',
      default: false,
      state: 'NV',
      region: 'Between',
      location: 'Valley of Fire, NV',
      hideText: "The Valley of Fire is the most desolate place I've ever seen"
    },
    {
      id: 29, img: 'assets/between/vegas-tower.jpg',
      default: false,
      state: 'NV',
      region: 'Between',
      location: 'Las Vegas, NV',
      hideText: 'Paris in America'
    },
    {
      id: 30, img: 'assets/between/zion.jpg',
      default: false,
      state: 'UT',
      region: 'Between',
      location: 'Zion, UT',
      hideText: 'Watchman Mountain'
    },
    {
      id: 31, img: 'assets/east/bear.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Shandaken, NY',
      hideText: 'Curious little bear'
    },
    {
      id: 32, img: 'assets/east/camp-falls.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Slide Mountain Area, NY',
      hideText: 'I forgot the name of these falls'
    },
    {
      id: 33, img: 'assets/east/capital.jpg',
      default: false,
      state: 'DC',
      region: 'East',
      location: 'Washington DC',
      hideText: 'My wife holding up the government'
    },
    {
      id: 34, img: 'assets/east/catskills.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Shandaken, NY',
      hideText: 'View from the North Dome of Saddle Mountain'
    },
    {
      id: 35, img: 'assets/east/grand-central.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'Grand Central Station'
    },
    {
      id: 36, img: 'assets/east/montecello.jpg',
      default: false,
      state: 'VA',
      region: 'East',
      location: 'Charlottesville, VA',
      hideText: "Thomas Jefferson's Monticello"
    },
    {
      id: 37, img: 'assets/east/ny-empire.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'Empire State Building'
    },
    {
      id: 38, img: 'assets/east/camp-ndome.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Shandaken, NY',
      hideText: 'View of the North Dome of Saddle Mountain'
    },
    {
      id: 39, img: 'assets/east/ny-liberty.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'Lady Liberty'
    },
    {
      id: 40, img: 'assets/east/niagra.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Buffalo, NY',
      hideText: 'In line for the Hurricane Deck at the Cave of the Winds, Niagra Falls'
    },
    {
      id: 41, img: 'assets/east/ny-library.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'New York Public Library'
    },
    {
      id: 42, img: 'assets/east/ny-skyline.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'Lower Manhattan'
    },
    {
      id: 43, img: 'assets/east/penn.jpg',
      default: false,
      state: 'DC',
      region: 'East',
      location: 'Washington DC',
      hideText: '1600 Pennsylvania Ave'
    },
    {
      id: 44, img: 'assets/east/ny-tower.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'New York City, NY',
      hideText: 'One World Trade Center'
    },
    {
      id: 45, img: 'assets/east/camp-bball.jpg',
      default: false,
      state: 'NY',
      region: 'East',
      location: 'Shandaken, NY',
      hideText: 'Baseball diamond near Saddle Mountain'
    },
    {
      id: 46, img: 'assets/west/nocal.jpg',
      default: false,
      state: 'CA',
      region: 'West',
      location: 'Redwood Hwy, CA',
      hideText: 'Roadside coastal barn'
    },
    {
      id: 47, img: 'assets/west/multi.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Multnomah Falls, OR',
      hideText: 'Total height of 620ft'
    },
    {
      id: 48, img: 'assets/west/keyhole.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Pacific City, OR',
      hideText: 'The side of Cape Kiwanda'
    },
    {
      id: 49, img: 'assets/west/whale.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Lincoln City, OR',
      hideText: 'The kite festival'
    },
    {
      id: 50, img: 'assets/west/cal-forest.jpg',
      default: false,
      state: 'CA',
      region: 'West',
      location: 'Redwood Forest, CA',
      hideText: 'Like a cold foggy jungle'
    },
    {
      id: 51, img: 'assets/west/cannon.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Cannon Beach, OR',
      hideText: 'Insert Goonies reference here'
    },
    {
      id: 52, img: 'assets/west/coastal-red.jpg',
      default: false,
      state: 'CA',
      region: 'West',
      location: 'Redwood Forest, CA',
      hideText: 'Coastal Redwoods'
    },
    {
      id: 53, img: 'assets/west/columbia.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Columbia River Gorge, OR',
      hideText: "View from the Vista House on top of Thor's Crown"
    },
    {
      id: 54, img: 'assets/west/golden2.jpg',
      default: false,
      state: 'CA',
      region: 'West',
      location: 'San Fransisco, CA',
      hideText: 'Another famous bridge'
    },
    {
      id: 55, img: 'assets/west/gorge.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'High Desert, OR',
      hideText: 'Near Lake Billy Chinook'
    },
    {
      id: 56, img: 'assets/west/portland.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Portland, OR',
      hideText: 'Oregonians always like to know where they are'
    },
    {
      id: 57, img: 'assets/west/kite.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Lincoln City, OR',
      hideText: 'Kite festival'
    },
    {
      id: 58, img: 'assets/west/or-cap.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Salem, OR',
      hideText: 'Capital Building of Oregon'
    },
    {
      id: 59, img: 'assets/west/seattle.jpg',
      default: false,
      state: 'WA',
      region: 'West',
      location: 'Seattle, WA',
      hideText: 'Public Market'
    },
    {
      id: 60,img: 'assets/west/pac-city.jpg',
      default: false,
      state: 'OR',
      region: 'West',
      location: 'Pacific City, OR',
      hideText: 'View of Cape Kiwanda with Haystack rock behind'
    },
  ];

  showDefault() {
    let here = this;
    let randomNumArr = [];
    let randomArr = [];
    for (let i = 0; i < 30; i++) {
      let randomNum = Math.floor(Math.random() * (this.photoContent.length - 1 + 1)) + 1;
      randomNumArr.push(randomNum);
    };
    let uniqueNum = Array.from(new Set(randomNumArr));
    let randomUniqueNum = uniqueNum.slice(0, 12);
    this.photoContent.forEach(item => {
      if(randomUniqueNum.includes(item.id)) {
        randomArr.push(item);
      }
    })
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      here.showPhotos = array;
    }
    shuffle(randomArr);
  };

  findAllRegions() {
    let regions = [];
    this.photoContent.forEach((item) => {
      regions.push(item.region);
    });
    let sortedRegions = Array.from(new Set(regions));
    this.allRegions = sortedRegions;
  };

  findAllStates() {
    let states = [];
    this.photoContent.forEach((item) => {
      states.push(item.state);
    });
    let sortedStates = Array.from(new Set(states));
    this.allStates = sortedStates;
  };

  showSortedState(state) {
    this.showPhotos = [];
    this.photoContent.forEach((photo) => {
      if(photo.state === state) {
        this.showPhotos.push(photo);
      };
    });
    let stateSort = (<HTMLInputElement>document.getElementById('sort-state'));
    stateSort.checked = false;
    console.log(state)
  };

  showSortedRegion(region) {
    this.showPhotos = [];
    this.photoContent.forEach((photo) => {
      if(photo.region === region) {
        this.showPhotos.push(photo)
      }
    })
    let regionSort = (<HTMLInputElement>document.getElementById('sort-region'));
    regionSort.checked = false;
    console.log(region)
  };

  showAllPhotos() {
    this.showPhotos = this.photoContent;
  };

  showModal(item) {
    this.modalObj = item;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-card').style.display = 'block';
  }

  closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-card').style.display = 'none';
  };
}
