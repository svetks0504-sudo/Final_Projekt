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


const eventsNearDiv = document.querySelector(".eventsNearDiv");
const upcomingOnlineEventsDiv = document.querySelector(".upcomingOnlineEventsDiv");



function createCartsForEvents(arr, container){
  arr.forEach((element)=>{
const newCarts = document.createElement("div");
newCarts.classList.add("carts");

 //не виходило вставити малюнок як div
  newCarts.innerHTML=`
 <img src="${element.image}" alt="${element.title}">
  <h3>${element.title}</h3>
 <p class="stringCategory">${element.category}</p>


   <p><span class="material-symbols-outlined">
calendar_today
</span> ${element.date}</p> 

 <div class="goingAndPrice">
    <span>
      <span class="material-symbols-outlined">priority</span>
      ${element.attendees}
    </span> 

    <span>
      <span class="material-symbols-outlined">confirmation_number</span>
      ${element.price}
    </span> 
  </div>
  `
  container.appendChild(newCarts);
  });
}


createCartsForEvents(eventsNear, eventsNearDiv);
createCartsForEvents(upcomingOnlineEvents, upcomingOnlineEventsDiv);
