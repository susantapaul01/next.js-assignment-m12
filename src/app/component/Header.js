import Link from "next/link";

const Header = () => {
  return (
    <>
        <nav className="mb-[30px]">
            <div></div>
            <div className="flex flex-row justify-end my-2">
                <div className=""><Link href="/" className="bg-indigo-500 text-white mx-8 px-3 py-2">Home</Link></div>
                <div className=""><Link href="/about" className="bg-indigo-500 text-white mx-8 px-3 py-2">About</Link></div>
                <div className=""><Link href="/blog" className="bg-indigo-500 text-white mx-8 px-3 py-2">Blog</Link></div>
                <div className=""><Link href="/contact" className="bg-indigo-500 text-white mx-8 px-3 py-2">Contact</Link></div>
            </div>
        </nav>
    </>
  )
}

export default Header;