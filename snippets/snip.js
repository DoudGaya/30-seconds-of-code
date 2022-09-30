const mapArrayElements = (arr) =>
  {
   return arr.map(item => {
      return  `Hi, ${item.fistName}`
    })
  }

const numbers = [1,2,3,4,5,6,7]

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
 console.log(mapArrayElements(users))
//  console.log(numbers)

//  [ 11, 12, 13, 14, 15, 16, 17]
[ 'Hi, John', 'Hi, James', 'Hi, Will' ]
