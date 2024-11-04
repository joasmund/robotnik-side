import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'

const Header = () =>
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="https://www.robotniknmbu.no">
                <Image src="/Robotnikwide.png" alt="Robotnik Logo" width={496/3} height={281/3} />
            </Link>

            <nav className="space-x-2">
                <Button variant="ghost"><Link href="/omside">Om</Link></Button>
                <Button variant="ghost"><Link href="/arrangementside">Arrangementer</Link></Button>
                <Button variant="ghost"><Link href="/prosjektside">Prosjekter</Link></Button>
                <Button variant="ghost"><Link href="/kontaktside">Kontakt</Link>
                </Button>
            </nav>
        </div>
    </header>

export{Header}