---
title: ArrayMap
tags: array
expertise: intermediate
firstSeen: 2021-06-13T05:00:00-04:00
---

The Map function is particularly useful when you want to modify all the elements of your array. You can achieve the same result by iterating through a for loop and making changes to every element. but the map feels more elegant and very useful when using libraries like react. 

- use `Array.prototype.map()` or just add `.map()` function to the end of your array which takes every single element of the array and modify it.
- the `.map() ` method takes a callback function as an arguments, which can take up to ` 3 ` arguments but for this snippet lets stick to one so it doesn't get too confusing. 
- You can map through elements of an array or even array of objects. Let's the the two examples here.
- usage examples `[1,2,3,4,5,6,7].map()` or if you store it as a variable `arr` you can use `arr.map()`



### Basic skeleton 

` arr.map( arg => { do something with arg } ) `




### Example (1) Arrays of Numbers 
- Let's say we want to add `10` to all the elements of our array

```js
const mapArrayElements = arr =>
  {
   return arr.map( item => {
      return  item + 4
    } )
  }
```

```js
const numbers = [1,2,3,4,5,6,7]
mapArrayElements(numbers); //  [ 11, 12, 13, 14, 15, 16, 17]
```


### Example (2) Array of objects
- Let's say we want to say `Hi` to all the first names if our users arrays

```js
const mapArrayElements = arr =>
  {
   return arr.map(item => {
      return `Hi, ${item.firstName}`
    } )
  }
```

```js
const users = [
  {
    fistName: 'John',
    lastName: 'Doe'
  },
  {
    fistName: 'James',
    lastName: 'Brown'
  },
  {
    fistName: 'Will',
    lastName: 'Smith'
  },
]
mapArrayElements(users); //[ 'Hi, John', 'Hi, James', 'Hi, Will' ]
```

theres alot of things you can do with map. Including redenring elements to unordered list or making calculations or modifications
