import styles from '../styles/Home.module.css'

function Hero() {
    return (
        <>
            <div className='blur-4xl'>
                <div className='absolute left-24 top-20 rotate-45 w-56 h-72 bg-blue-dark rounded-full p-5'></div>
            </div>

            <div className="bg-background h-[85vh] flex">
                <div className="flex-1 text-xl text-white flex justify-center items-center px-16 pb-16 xl:pl-28 z-10">
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className="p-1 px-2 font-raleway">Hello! 👋</p>
                            <h1 className='font-raleway p-1 px-2 rounded-md w-fit'><span className=''>I'm Bharath Shanmugam AV</span></h1>
                        </div>
                        <p className='text-8xl leading-none font-raleway font-extrabold'><span className="underline decoration-pink decoration-8">I'm a Backend</span> developer, from <span className={styles.grad}>India.</span></p>
                        <div className='flex mt-6'>
                            <a className={styles.btn} href='https://github.com/bharath1910' target={"_blank"}>Github</a>
                            <a className="text-complement font-raleway px-10 py-4" href='mailto:av.bharath@proton.me' target={"_blank"}>Email</a>
                        </div>
                    </div>
                </div>
                
                <div className="xl:flex-1 xl:flex xl:justify-center xl:items-center hidden">
                    <div>
                        <img className='aspect-hero w-96' src="/hero_background_bg_removed.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero