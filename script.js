'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],



  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

  // ARRAY DESTRUCTURING ---

  // array destructuring is to remove each individual index of the array
  // and set it equal to its own variable

  // let array = [1,2,3];
  // const [a,b,c] = array
  // the original array is not effected
  // when you destructure you don't have to take all indexes if you don't want to
  // if you want to pull out first and third index, leave blank space for 2nd index

  //HOW TO DESTRCTURE ARRAY ITEMS FROM DIFFERENT ARRAYS

    // order: function (mainIndex, starterIndex){
    // return (this.starterMenu[starterIndex],this.mainMenu[mainIndex])
    // },
    // const [starter, mainCourse] = restaurant.order(2,0);
    // console.log(starter, mainCourse)

  // HOW TO SWITCH ORDER IN AN ARRAY --
  // let [main, secondary] = restaurant.categories;
  // [main, secondary = [secondary, main];


// HOW TO ACCESS SOMETHING THAT IS NESTED ---

// const nested = [2, 4, [5,6]];
// const [i, ,j] = nested;
// console.log(i, j);

//this will print 2 and [5,6]

// HOW TO DO DESTRUCTING INSIDE OF DESTRUCTURING (OR WE CAN SAY NESTED) ---

// const nested = [2, 4, [5,6]];
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// WHAT IF WE DON'T KNOW THE LENGTH OF THE ARRAY ---

// const = [p=1, q=1, r=1] = [8,9] - pretend we don't know the array
// const = (p, q, r)

// we want to take 3 elements out of the array but the 3rd element does not exist

// you can set a default value like some Variable = 1











