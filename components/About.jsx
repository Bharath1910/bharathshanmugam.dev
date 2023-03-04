import styles from  '../styles/About.module.css'

function About() {
  return (
    <div>
        <div className="bg-background h-screen flex sm:flex-col-reverse xl:flex-row-reverse xl:pt-24">
            <div className="flex-1 text-xl text-white flex justify-center items-center p-16 xl:pl-28 z-10">
                <div className='flex flex-col gap-6'>
                    <p className='text-8xl font-oswald'>About <span className=''>Me</span></p>
                    <p className='font-montserrat'>
                        Hello! My name is A.V.Bharath Shanmugam, from India. 
                        I love creating stuffs which runs on the web. 
                        I started my web development journey a month ago,
                        by enrolling on a coding bootcamp and completed 
                        around 15 UI development projects and learning 
                        new things daily.
                        <br/>
                        <br/>
                        My experience in programming is around 2 years, 
                        I mostly used Python to make Discord bots, Telegram bots,
                        and automation scripts. I love to learn new things daily, 
                        which made me proficient in many softwares and technologies.
                        <br/>
                        <br/>
                        I love to teach people, so I write an article every
                        week related to web development, Python, and Networking. 
                    </p>
                </div>
            </div>
                
            <div className="p-24 flex xl:justify-center sm:items-center sm:w-auto sm:h-auto sm:ml-14">

                <div className='relative'>
                    <div className='z-20 relative w-96'>
                        <img className='w-96' src="/me.png" />
                    </div>

                    <div className='absolute top-0 -rotate-12 z-10'>
                        <div className='w-96 h-96 border-solid rounded-xl border-2 border-white'></div>
                    </div>

                    <div className='z-0 w-96 h-96 absolute top-0 blur-4xl'>
                        <div className={styles.triPink}></div>
                    </div>

                    <div className='z-0 w-96 h-96 absolute blur-4xl -top-20'>
                        <div className={styles.tri}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About