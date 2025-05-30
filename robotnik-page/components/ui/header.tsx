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
            <Link href="https://www.robotniknmbu.no">
                <Image src="/forsokutenlogo.svg" alt="Robotnik Logo" width={496/8} height={281/8} />
            </Link>

            <nav className="space-x-2">
                <Button variant="ghost"><Link href="/omside">Om oss</Link></Button>
                <Button variant="ghost"><Link href="/arrangementside">Arrangementer</Link></Button>
                <Button variant="ghost"><Link href="/prosjektside">Prosjekter</Link></Button>
                <Button variant="ghost"><Link href="/bloggside">Blogg</Link></Button>
                <Button variant="ghost"><Link href="/kontaktside">Kontakt</Link></Button>
            </nav>
        </div>
    </header>

export{Header}