import { Paper } from '@material-ui/core'
import Link from 'next/link'
import styles from '../styles/MasterLayout.module.scss'

export default props => {
  const { className } = props
  return (
    <Paper
      variant="outlined"
      className={styles.supportBanner}>
      <p>New site - new kitty! Please help us build up enough to pay for the ongoing costs:</p>
      <Link href="/support">
        <a>Support JUSTtheTalk</a>
      </Link>
    </Paper>
  )
}
