const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40]

// Alternate

type Drink = [string, boolean, number]

const coke: Drink = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]
