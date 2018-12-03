import * as styles from '../../styles'

type Record = {
  title: string
  checked: boolean
  activeColor?: string
}
const records: Record[] = [
  { title: 'Config 1', checked: false },
  { title: 'Config 2', checked: false },
  {
    title: 'Config 3',
    checked: false,
    activeColor: styles.blue
  },
  {
    title: 'Config 4',
    checked: false,
    activeColor: styles.tarcoize
  },
  { title: 'Config 5', checked: true }
]
// ______________________________________________________
//
// @ exports

export { Record, records }
