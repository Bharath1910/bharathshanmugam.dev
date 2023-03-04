import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className="bg-background pt-14 text-xl flex place-content-between px-16 items-center">
        <ul className="flex text-white gap-14 font-raleway">
            <div className="relative">
                <a className={styles.animate} href="#testing">Work</a>
            </div>
            <div className="relative">
                <a className={styles.animate} href="#testing">About</a>
            </div>
            <div className="relative">
                <a className={styles.animate} href="#testing">Skills</a>
            </div>
            <div className="relative">
                <a className={styles.animate} href="#testing">Contact</a>
            </div>
        </ul>

        <div>
            <a className={styles.btn} href="http://google.com">Resume</a>
        </div>
    </div>
  )
}

export default Navbar