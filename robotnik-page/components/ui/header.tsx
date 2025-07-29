import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'

interface HeaderProps {
    isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) =>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/70 backdrop-blur-sm' : ''
    }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
                <Image src="/forsokutenlogo.svg" alt="Robotnik Logo" width={496/8} height={281/8} />
            </Link>

            <nav className="space-x-2">
                <div className="relative group inline-block">
                    <Button variant="ghost">
                        Om oss
                    </Button>
                    <div className="absolute left-0 top-full pt-2 w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                        <div className="bg-white rounded shadow-lg">
                            <Link href="/om-oss" className="block px-4 py-2 text-gray-900 hover:bg-gray-100/70">
                                Om Robotnik
                            </Link>
                            <Link href="/ny-student" className="block px-4 py-2 text-gray-900 hover:bg-gray-100/70">
                                Ny student
                            </Link>
                            <Link href="/utstyr" className="block px-4 py-2 text-gray-900 hover:bg-gray-100/70">
                                Utstyr
                            </Link>
                            <Link href="/styret" className="block px-4 py-2 text-gray-900 hover:bg-gray-100/70">
                                Styret
                            </Link>
                        </div>
                    </div>
                </div>
                <Button variant="ghost"><Link href="/arrangementside">Arrangementer</Link></Button>
                <Button variant="ghost"><Link href="/prosjektside">Prosjekter</Link></Button>
                <Button variant="ghost"><Link href="/bloggside">Blogg</Link></Button>
                <Button variant="ghost"><Link href="/kontaktside">Kontakt</Link></Button>
            </nav>
        </div>
    </header>

export{Header}