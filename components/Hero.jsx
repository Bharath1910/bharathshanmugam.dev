function Hero() {
    return (
        <>
            <div className='blur-5xl'>
                <div className='absolute left-24 top-56 rotate-45 w-56 h-72 bg-blue-dark rounded-full p-5'></div>
            </div>

            <div className="bg-background h-screen flex">
                <div className="flex-1 text-xl text-white flex justify-center items-center p-16 xl:pl-28 z-10">
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className="p-1 px-2 font-bold ">Hello! 👋</p>
                            <h1 className='font-montserrat p-1 px-2 rounded-md w-fit font-semibold'><span className=''>I'm Bharath Shanmugam AV</span></h1>
                        </div>
                        <p className='text-8xl font-raleway'><span className="underline decoration-pink decoration-8">Full stack</span> web developer from <span className="font-satisfy decoration-pink underline">India</span></p>
                        <p className='font-montserrat'>I specilise in the <span className="">MERN tech stack</span>, Powered by VSCode ;)</p>
                        <div className='flex mt-6'>
                            <a className='flex gap-2 items-center bg-complement text-background font-poppins px-10 py-4 rounded-lg' href='https://github.com/bharath1910' target={"_blank"}><img src="/github.svg" className="h-6"/>Github</a>
                            <a className=' text-complement font-poppins px-10 py-4' href='mailto:av.bharath@proton.me' target={"_blank"}>Email</a>
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