import styles from  '../styles/About.module.css'

function About() {
  return (
    <div>
        <div className="bg-background h-fit flex flex-col-reverse xl:flex-row-reverse xl:pt-24">
            <div className="flex-1 text-xl text-white flex justify-center items-center px-4 md:px-24 xl:px-2 2xl:px-20 z-10">
                <div className='flex flex-col gap-6'>
                    <p className='text-7xl lg:text-8xl font-oswald'>About <span className=''>Me</span></p>
                    <p className='text-base lg:text-xl font-montserrat'>
                        Hello! My name is Bharath Shanmugam AV, from India. 
                        I love creating stuffs which runs on the web. 
                        I started my full stack web development journey a year ago,
                        by enrolling on a coding bootcamp and completed 
                        many fun challenges and projects. After completing the bootcamp,
                        I decided to focus more on the backend.
                        <br/>
                        <br/>
                        I've spent the past 3 years working across different areas of
                        web development, frontend development using ReactJS and NextJS,
                        backend development using Python Flask, ExpressJS. Databases 
                        like MongoDB, PostgreSQL, MySQL. I have spent a lot of time
                        learning DevOps tools like Docker, Kubernetes, and CI/CD platforms
                        like GitHub Actions.

                        <br/>
                        <br/>
                        In my freetime, I write articles about Python, Docker, Networking and more
                        You can check it out at <a className='text-complement underline decoration-pink decoration-2' href="https://blog.bharathshanmugam.dev" target={"_blank"}>blog.bharathshanmugam.dev</a>
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