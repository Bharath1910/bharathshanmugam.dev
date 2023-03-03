import Image from 'next/image'

function Home() {
  return (
        <>
            <div className='blur-4xl'>
                <div className='absolute left-24 top-24 rotate-45 w-56 h-72 bg-complement rounded-full p-5'></div>
            </div>
            <div className="bg-background h-screen flex">
                <div className="flex-1 text-xl text-white flex flex-col justify-center gap-4 p-16 z-10">
                    <h1 className='font-poppins'>
                        Hello! I'm Bharath Shanmugam AV
                    </h1>

                    <p className='text-8xl font-gloock'>Full stack web developer from India</p>
                    <p className='font-poppins'>I specilise in the MERN tech stack, Powered by VSCode ;)</p>
                </div>

                <div className="flex-1">
                    <Image src="/hero_background_bg_removed.png" width={533} height={800} />
                </div>
            </div>
        
        </>
  )
}

export default Home