const input = document.getElementById("filter");
const list = document.getElementById("result");
const li = document.getElementsByClassName("li");

let empty = [];

let users = [
  {
    name: {
      first: "Nikolaj",
      last: "Hansen",
    },
    picture: "https://randomuser.me/api/portraits/men/18.jpg",
    location: {
      city: "Bykle",
      country: "Norway",
    },
  },
  {
    name: {
      first: "Alexis",
      last: "Hale",
    },
    picture: "https://randomuser.me/api/portraits/women/49.jpg",
    location: {
      city: "Canberra",
      country: "Australia",
    },
  },
  {
    name: {
      first: "Connor",
      last: "Bradford",
    },
    picture: "https://randomuser.me/api/portraits/men/81.jpg",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
  },
  {
    name: {
      first: "Sidney",
      last: "Poole",
    },
    picture: "https://randomuser.me/api/portraits/men/52.jpg",
    location: {
      city: "Copenhagen",
      country: "Denmsrk",
    },
  },
  {
    name: {
      first: "Anna",
      last: "Denis",
    },
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    location: {
      city: "London",
      country: "England",
    },
  },
];

function data() {
  users.forEach(function (user) {
    //!  console.log(user);

    const li = document.createElement("li");
    li.innerHTML = `
        
    <img src="${user.picture}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>    
    `;
    empty.push(li)
    //! console.log(empty);
    list.appendChild(li)
  });
}

data()


function find(value){
    empty.forEach(function(li){
     if(li.innerText.toLowerCase().includes(value.toLowerCase())){
       li.classList.remove('hide')
     }
     else{
       li.classList.add('hide')
     }
    })
}

input.addEventListener('input',function(event){
     find(event.target.value)
})