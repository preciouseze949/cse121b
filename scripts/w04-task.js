/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Precious Chibueze Anietem";
myProfile.photo = "images/myself.jpg";
myProfile.favoriteFoods = [
  'Rice',
  'Tikka Masala',
  'Prioshki',
  'Shrimp',
  'Banana Cream Pie', 'Beans', 'Semo', 'Fruits'
];
myProfile.hobbies = ['Reading', 'Coding', 'Hiking', 'Football', 'Eating', 'Pressing phones', 'Sleeping'];
myProfile.placesLived = [];



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Delta State, DEL',
      length: '1 year'
    }
  );
  myProfile.placesLived.push(
    {
      place: 'Ibadan, IB',
      length: '2 years'
    },
    {
      place: 'Benin, BEN',
      length: '3 years'
    },
    {
      place: 'Ekpoma, EKP',
      length: '2 years'
    }
  );


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  
  
  
  
  
  
  

