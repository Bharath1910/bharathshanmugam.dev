function Navbar() {
  return (
    <div className="bg-background pt-14 text-xl flex place-content-between px-16 items-center">
        <ul className="flex text-white gap-14 font-raleway">
            <li className="hover:text-complement hover:underline decoration-pink decoration-2 underline-offset-8"><a>Work</a></li>
            <li className="hover:text-complement hover:underline decoration-pink decoration-2 underline-offset-8"><a>About</a></li>
            <li className="hover:text-complement hover:underline decoration-pink decoration-2 underline-offset-8"><a>Skills</a></li>
            <li className="hover:text-complement hover:underline decoration-pink decoration-2 underline-offset-8"><a>Contact</a></li>
        </ul>

        <div>
            <a className="bg-accent py-2 px-4 rounded-lg font-raleway" href="http://google.com">Resume</a>
        </div>
    </div>
  )
}

export default Navbar