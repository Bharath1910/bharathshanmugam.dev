import Image from 'next/image'

function Home() {
  return (
        <>
            <div className='blur-4xl'>
                <div className='absolute left-24 top-24 rotate-45 w-56 h-72 bg-complement rounded-full p-5'></div>
            </div>
            <div className="bg-background h-screen flex">
                <div className="flex-1 text-xl text-white flex justify-center items-center p-16 z-10">
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-poppins'>Hello! I'm Bharath Shanmugam AV</h1>
                        <p className='text-8xl font-gloock'>Full stack web developer from India</p>
                        <p className='font-poppins'>I specilise in the MERN tech stack, Powered by VSCode ;)</p>

                        <div className='flex mt-6'>
                            <a className='bg-complement text-background font-poppins px-10 py-4 rounded-lg' href='https://google.com' target={"_blank"}>Github</a>
                            <a className='text-complement font-poppins px-10 py-4' href='https://google.com' target={"_blank"}>Email</a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div>
                        <img className='aspect-hero w-96' src="/hero_background_bg_removed.png" />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Home