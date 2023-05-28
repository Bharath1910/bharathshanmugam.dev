import styles from '../styles/Skills.module.css'

function Skills() {
  return (
    <div className='h-screen bg-background flex p-24 gap-10 flex-wrap'>
        <div className='bg-accent flex-1'>
            <h1 className='text-8xl'>Test</h1>
        </div>

        <div className='flex-1  flex flex-col gap-10'>
            <div className='flex flex-1 gap-10'>
                <div className='bg-complement flex-1'>
                    <h1>Testing</h1>
                </div>
                <div className='bg-complement flex-1'>
                    <h1>Testing</h1>
                </div>
            </div>
            <div className=' flex flex-1 gap-10'>
                <div className='bg-pink flex-1'>
                    <h1>Testing</h1>
                </div>
                <div className='bg-pink flex-1'>
                    <h1>Testing</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills