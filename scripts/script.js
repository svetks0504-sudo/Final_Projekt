const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
      lat: 40.7306,
    lng: -73.9866, // Manhattan
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
     lat: 40.7411,
    lng: -73.9897, // Midtown
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,

  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
     lat: 40.7580,
    lng: -73.9855, // Times Square
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
     lat: 40.7061,
    lng: -74.0086, // Wall Street
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
     lat: 40.7831,
    lng: -73.9712, // Upper West Side
  },
];


const filters = [
  {
    type: "day",
    options: [
      "Any date",
      new Date(2024, 2, 13, 11),
      new Date(2024, 2, 14, 11),
      new Date(2024, 2, 14, 20),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 23, 11, 30),
      new Date(2024, 2, 23, 14),
      new Date(2024, 2, 28, 20),
      new Date(2024, 2, 30, 14),
      new Date(2024, 3, 11, 20),
      new Date(2024, 3, 25, 20),
    ],
  },
  { type: "type", options: ["Any type", "offline", "online"] },
  { type: "distance", options: ["Any distance", 25, 50, 75, 100] },
  {
    type: "category",
    options: [
      "Any category",
      "Health and Wellbeing",
      "Social Activities",
      "Business",
      "Technology",
    ],
  },
];

const eventsNear = [
{
  image:"assets/images/cart1.svg",
  title:"Day Trading Idea and Strategy",
  category: "Business (5 km)",
  date:"MON, MAR 18 · 7:00 PM PDT",
 attendees: "1 going",
    price: "Free"
},
{
  image:"assets/images/cart2.svg",
  title:"Let's Talk Networking: JPMorgan Chase in Palo Alto",
  category:"Business (25 km)",
  date:"TUE, MAR 19 · 5:00 PM PDT",
 attendees: "41 going",
    price: "Free"
},
{
  image:"assets/images/cart3.svg",
  title:"Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
  category:"Technology",
  date:"WED, MAR 13 · 6:00 PM PDT",
 attendees: "40 going",
    price: "Free"
},
{
  image:"assets/images/cart4.svg",
  title:"INFORMS San Francisco Chapter In-Person Event",
  category:"Health and Wellbeing (50 km)",
  date:"THU, MAR 28 · 5:00 PM PDT",
 attendees: "41 going",
    price: "Free"
},
{
  image:"assets/images/cart5.svg",
  title:"AI Wednesdays - Meet and Greet!",
  category:"Technology (5 km)",
  date:"WED, MAR 13 · 6:30 PM PDT",
 attendees: "29 going",
    price: "Free"
},
{
  image:"assets/images/cart6.svg",
  title:"ROS By-The-Bay March 2024",
  category:"Social Activities",
  date:"THU, MAR 21 · 6:00 PM PDT",
 attendees: "51 going",
    price: "Free"
},
{
  image:"assets/images/cart7.svg",
  title:"Free Christian Singles' Dinner",
  category:"Hobbies and Passions (10 km)",
  date:"FRI, MAR 29 · 6:00 PM PDT",
 attendees: "11 going",
    price: "Free"
},
{
  image:"assets/images/cart8.svg",
  title:"In-person: Deep Dive into RAG Architectures (Food served)",
  category:"Hobbies and Passions (50 km)",
  date:"THU, MAR 14 · 5:00 PM PDT",
 attendees: "16 going",
    price: "Free"
},
];

const upcomingOnlineEvents = [
{
  image:"assets/images/cart9.svg",
  title:"Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
  category:"Business (25 km)",
  date:"THU, MAR 14 · 6:00 PM PDT",
 attendees: "3 going",
    price: "Free"
},
{
  image:"assets/images/cart10.svg",
  title:"Vision Pro Developers Online Meetup",
  category:"Technology",
  date:"WED, MAR 13 · 7:00 PM PDT",
 attendees: "51 going",
    price: "Free"
},
{
  image:"assets/images/cart11.svg",
  title:"Significant Musical Moments",
  category:"Hobbies and Passions (10 km)",
  date:"WED, MAR 13 · 6:00 PM PDT",
 attendees: "16 going",
    price: "Free"
},
{
  image:"assets/images/cart12.svg",
  title:"FREE Webinar: Introduction to Power BI",
  category:"Technology",
  date:"THU, MAR 14 · 5:30 PM PDT",
 attendees: "33 going",
    price: "Free"
},
];


const eventsNearDiv = document.querySelector(".eventsNearDiv");
const upcomingOnlineEventsDiv = document.querySelector(".upcomingOnlineEventsDiv");
const imageMeetup = document.querySelector("#imageMeetup");
const joinMeetup = document.querySelector(".joinMeetup");
const horizontalCards = document.querySelector(".horizontalCards");
const filterButtons = document.querySelectorAll(".filter .dropdownBtn");

function pageSwitcher(elem, src){
   if (!elem) return;

  elem.addEventListener("click", ()=>{
    window.location.href = src;
  });
}

function createCartsForEvents(arr, container){
  if (!container) return;

  arr.forEach((element)=>{
const newCarts = document.createElement("div");
newCarts.classList.add("carts");


  newCarts.innerHTML=`
 
 <img src="${element.image}" alt="${element.title}">
 
  <div class="textCarts">
  <h3>${element.title}</h3>
 <p id="stringCategory">${element.category}</p>
   <p id="calender"><span class="material-symbols-outlined">
calendar_today
</span> ${element.date}</p> 

 <div class="goingAndPrice">
    <span class="forBlackText">
      <span class="material-symbols-outlined">priority</span>
      ${element.attendees}
    </span> 

    <span class="forBlackText">
      <span class="material-symbols-outlined">confirmation_number</span>
      ${element.price}
    </span> 
  </div>
  </div>
  `
  container.appendChild(newCarts);
  });
}

function formatDateUTC(date) {
 const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
     hour12: true, 
     timeZone: "UTC"
  });

  const parts = formatter.formatToParts(date);

let weekday, month, day, hour, minute, dayPeriod;

  parts.forEach(part => {
    switch (part.type) {
      case "weekday": weekday = part.value.toUpperCase(); break;
      case "month": month = part.value.toUpperCase(); break;
      case "day": day = part.value; break;
      case "hour": hour = part.value; break;
      case "minute": minute = part.value; break;
      case "dayPeriod": dayPeriod = part.value.toUpperCase(); break;
    }
  });

  return `${weekday}, ${month} ${day} · ${hour}:${minute} ${dayPeriod} UTC`;
}

function createHorizontalCard (arr){
  if (!horizontalCards) return;

  horizontalCards.innerHTML = "";

  arr.forEach((element)=>{
const newCarts = document.createElement("div");
newCarts.classList.add("cartSecondPage");

newCarts.innerHTML=`
<img src=${element.image} alt="${element.title}"/>
${element.type !== "offline" ? `
  <div class="onlineText one">
    <img id="onlineImg" src="assets/icons/online.svg" alt="Online event"/>
    <p>Online Event</p>
  </div>
` : ""}
<div class="textCartSecondPage">
<div>
<p class="textBrounAndSmall">${formatDateUTC(element.date)}</p>
<p>${element.title}</p>
<p class="textGreyAndSmall">${element.category}(${element.distance} km)</p>
${element.type !== "offline" ? `
  <div class="onlineText two">
    <img id="onlineImg" src="assets/icons/online.svg" alt="Online event"/>
    <p>Online Event</p>
  </div>
` : ""}
</div>
 ${element.attendees != null ? `<p id="attendesText" class="textGreyAndSmall">${element.attendees} attendees</p>` : ""}
</div>
`;


horizontalCards.appendChild(newCarts);
  });
}


//********** FILTER ***************
const selectedFilters = {};


filters.forEach(filter => {
  selectedFilters[filter.type] = filter.options[0];
});//начальное значение за умолчанием

// рендер dropdown опций
function renderDropdownOptions() {
  filterButtons.forEach(btn => {
    const type = btn.getAttribute('dataType');

    // контейнер для опций в body
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("dropdownOptions");
    optionsContainer.style.display = "none";
optionsContainer.style.position = "fixed";

    document.body.appendChild(optionsContainer);

    // render создаем опции 
    filters.find(filter => filter.type === type).options.forEach(option => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.textContent = option instanceof Date ? formatDateUTC(option) : option;

      //вешаем слушателя на клик опции
      div.addEventListener("click", () => {
        selectedFilters[type] = option;
        btn.innerHTML = (option instanceof Date ? formatDateUTC(option) : option) + ' <img src="assets/icons/SVG.svg"/>';
        optionsContainer.style.display = "none"; // прячем список
        applyFilters(eventsStore, selectedFilters); // нов карточки

         window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      });

      optionsContainer.appendChild(div);
    });

       const updatePosition = () => {
    const rect = btn.getBoundingClientRect();//местоположение кнопки
    optionsContainer.style.position = "fixed";
    optionsContainer.style.top = rect.bottom + "px";
    optionsContainer.style.left = rect.left + "px";

    const viewportWidth = window.innerWidth;
    if (rect.left + optionsContainer.offsetWidth > viewportWidth) {
        optionsContainer.style.left = viewportWidth - optionsContainer.offsetWidth + "px";
    }
};

btn.addEventListener("click", (elem) => {
  elem.stopPropagation();
document.querySelectorAll('.dropdownOptions').forEach(opt => {
        if(opt !== optionsContainer) opt.style.display = "none";
      });

      if(optionsContainer.style.display === "block") {
        optionsContainer.style.display = "none";
        window.removeEventListener('resize', updatePosition);//опции под кнопкой
        window.removeEventListener('scroll', updatePosition);
      } else {
        optionsContainer.style.display = "block";
        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);
      }
    });
  });

  
  // закрытие при клике вне
document.addEventListener('click', (elem) => {
    if(!elem.target.closest('.dropdownBtn') && !elem.target.closest('.dropdownOptions')){
        document.querySelectorAll('.dropdownOptions').forEach(opt => opt.style.display = "none");
    }
});
}

function applyFilters(events, filters) {
  const filtered = events.filter(event => {
    // TYPE
    if (filters.type !== "Any type" && event.type !== filters.type) return false;
    // CATEGORY
    if (filters.category !== "Any category" && event.category !== filters.category) return false;
    // DISTANCE
    if (filters.distance !== "Any distance" && event.distance > filters.distance) return false;
    // DAY
    if (filters.day !== "Any date") {
      const d1 = event.date;
      const d2 = filters.day;
      const sameDay = d1.getFullYear() === d2.getFullYear() &&
                      d1.getMonth() === d2.getMonth() &&
                      d1.getDate() === d2.getDate();
      if (!sameDay) return false;
    }
    return true;
  });

  createHorizontalCard(filtered); // рендер карточек
}


createCartsForEvents(eventsNear, eventsNearDiv);
createCartsForEvents(upcomingOnlineEvents, upcomingOnlineEventsDiv);
pageSwitcher(imageMeetup, "index.html");
pageSwitcher(joinMeetup, "secondPage.html");
applyFilters(eventsStore, selectedFilters); // сначало все карточки
renderDropdownOptions();