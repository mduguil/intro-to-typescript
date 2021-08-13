const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carByMake:string[][] = []


// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevents inomplatible values
carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
