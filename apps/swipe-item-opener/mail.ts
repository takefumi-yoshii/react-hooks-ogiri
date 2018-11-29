import { times, uuid } from '../utils/index'

interface Mail {
  id: string
  title: string
  date: Date
  body: string
}

const createItem = (index: number): Mail => ({
  id: `${uuid()}`,
  title: `title${index + 1}`,
  date: new Date(),
  body:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatum voluptates natus saepe iure placeat maxime...'
})

const getMailItems = (amount: number) => {
  return times(amount).map(i => createItem(i))
}

export { getMailItems, Mail }
