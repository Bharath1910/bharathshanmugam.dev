import styles from  '../styles/About.module.css'

function About() {
  return (
    <div>
        <div className="bg-background h-fit flex flex-col-reverse xl:flex-row-reverse xl:pt-24">
            <div className="flex-1 text-xl text-white flex justify-center items-center px-4 md:px-24 xl:px-2 2xl:px-20 z-10">
                <div className='flex flex-col gap-6'>
                    <p className='text-7xl lg:text-8xl font-oswald'>About <span className=''>Me</span></p>
                    <p className='text-base lg:text-xl font-montserrat'>
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
                
            <div className="p-6 md:p-20 flex justify-start sm:items-center sm:w-auto sm:h-auto">
                <div className=''>
                    <div className='w-fit md:w-[500px] 2xl:w-[600px]'>
                        <img className='rounded-3xl' src="/me.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About