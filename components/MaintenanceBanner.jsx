import { Paper } from '@material-ui/core'
import styles from '../styles/MasterLayout.module.scss'

export default props => {
  return (
    <Paper
      variant="outlined"
      className={styles.supportBanner}>
      <p>
        Upcoming maintenance: as part of our migration process, the site will be unavailable from 9pm - midnight BST,
        Monday 17th April.
      </p>
    </Paper>
  )
}
