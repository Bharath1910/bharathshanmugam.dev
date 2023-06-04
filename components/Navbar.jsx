import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <>
    <div className='hidden bg-background text-xl lg:flex place-content-between px-16 items-center h-[15vh]'>
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
            <a className={styles.btn} href="http://bharathshanmugam.dev/resume.pdf" target={"_blank"}>Resume</a>
        </div>
    </div>

    <div className='lg:hidden flex bg-background justify-between p-4 py-6 md:px-8'>
        <div className='flex align-middle'>
            <a className={styles.btn} href="http://bharathshanmugam.dev/resume.pdf" target={"_blank"}>Resume</a>
        </div>

        <div>
            <button className='text-accent'><i class="text-4xl fa-sharp fa-solid fa-bars"></i></button>
        </div>
    </div>
    </>
  )
}

export default Navbar