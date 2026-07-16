'use client'

import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface HeaderProps {
    isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const currentPath = usePathname()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const isActivePath = (path: string) => {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    }

    const isActiveSubPath = (subPaths: string[]) => {
        return subPaths.some(path => currentPath.startsWith(path));
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/70 backdrop-blur-sm`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" onClick={closeMobileMenu}>
                    <Image src="/forsokutenlogo.svg" alt="Robotnik Logo" width={496/8} height={281/8} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-2">
                    <div className="relative group inline-block">
                        <Button 
                            variant="ghost" 
                            className={`${isActiveSubPath(['/om-oss', '/ny-student', '/fadderuka', '/utstyr', '/styret']) ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            Om oss
                        </Button>
                        <div className="absolute left-0 top-full pt-2 w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                            <div className="bg-white rounded shadow-lg">
                                <Link 
                                    href="/om-oss" 
                                    className={`flex items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100/70 ${isActivePath('/om-oss') ? 'bg-blue-100 font-semibold' : ''}`}
                                >
                                    <span className="w-full">Om Robotnik</span>
                                </Link>
                                <Link 
                                    href="/ny-student" 
                                    className={`flex items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100/70 ${isActivePath('/ny-student') ? 'bg-blue-100 font-semibold' : ''}`}
                                >
                                    <span className="w-full">Ny student</span>
                                </Link>
                                <Link 
                                    href="/fadderuka" 
                                    className={`flex items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100/70 ${isActivePath('/fadderuka') ? 'bg-blue-100 font-semibold' : ''}`}
                                >
                                    <span className="w-full">Fadderuka</span>
                                </Link>
                                <Link 
                                    href="/utstyr" 
                                    className={`flex items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100/70 ${isActivePath('/utstyr') ? 'bg-blue-100 font-semibold' : ''}`}
                                >
                                    <span className="w-full">Utstyr</span>
                                </Link>
                                <Link 
                                    href="/styret" 
                                    className={`flex items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100/70 ${isActivePath('/styret') ? 'bg-blue-100 font-semibold' : ''}`}
                                >
                                    <span className="w-full">Styret</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/bedrift">
                        <Button
                            variant="ghost"
                            className={`w-full ${isActivePath('/bedrift') ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            <span className="w-full">For bedrifter</span>
                        </Button>
                    </Link>
                    <Link href="/arrangementer">
                        <Button
                            variant="ghost"
                            className={`w-full ${isActivePath('/arrangementer') ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            <span className="w-full">Arrangementer</span>
                        </Button>
                    </Link>
                    <Link href="/prosjekter">
                        <Button 
                            variant="ghost" 
                            className={`w-full ${isActivePath('/prosjekter') ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            <span className="w-full">Prosjekter</span>
                        </Button>
                    </Link>
                    <Link href="/blogg">
                        <Button 
                            variant="ghost" 
                            className={`w-full ${isActivePath('/blogg') ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            <span className="w-full">Blogg</span>
                        </Button>
                    </Link>
                    <Link href="/kontakt">
                        <Button 
                            variant="ghost" 
                            className={`w-full ${isActivePath('/kontakt') ? 'bg-blue-600/20 text-blue-300' : ''}`}
                        >
                            <span className="w-full">Kontakt</span>
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <Button 
                    variant="ghost" 
                    size="sm"
                    className="md:hidden text-white p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-40 ${
                isMobileMenuOpen 
                    ? 'opacity-100 visible max-h-screen' 
                    : 'opacity-0 invisible max-h-0 overflow-hidden'
            }`}>
                <nav className="bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        {/* Om oss section with submenu */}
                        <div className="space-y-1 mb-4">
                            <div className={`text-white font-semibold text-base px-4 py-3 border-l-4 rounded-r-lg transition-all duration-200 ${
                                isActiveSubPath(['/om-oss', '/ny-student', '/fadderuka', '/utstyr', '/styret']) 
                                    ? 'border-blue-400 bg-blue-600/30 text-blue-200' 
                                    : 'border-gray-600 bg-gray-800/40'
                            }`}>
                                Om oss
                            </div>
                            <div className="ml-2 space-y-1">
                                <Link 
                                    href="/om-oss" 
                                    className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 touch-manipulation ${
                                        isActivePath('/om-oss')
                                            ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="w-full">Om Robotnik</span>
                                </Link>
                                <Link 
                                    href="/ny-student" 
                                    className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 touch-manipulation ${
                                        isActivePath('/ny-student')
                                            ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="w-full">Ny student</span>
                                </Link>
                                <Link 
                                    href="/fadderuka" 
                                    className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 touch-manipulation ${
                                        isActivePath('/fadderuka')
                                            ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="w-full">Fadderuka</span>
                                </Link>
                                <Link 
                                    href="/utstyr" 
                                    className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 touch-manipulation ${
                                        isActivePath('/utstyr')
                                            ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="w-full">Utstyr</span>
                                </Link>
                                <Link 
                                    href="/styret" 
                                    className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 touch-manipulation ${
                                        isActivePath('/styret')
                                            ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="w-full">Styret</span>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Main navigation items */}
                        <div className="space-y-1">
                            <Link
                                href="/bedrift"
                                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                                    isActivePath('/bedrift')
                                        ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                        : 'text-white hover:bg-blue-600/30'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                <span className="w-full">For bedrifter</span>
                            </Link>
                            <Link
                                href="/arrangementer" 
                                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                                    isActivePath('/arrangementer')
                                        ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                        : 'text-white hover:bg-blue-600/30'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                <span className="w-full">Arrangementer</span>
                            </Link>
                            <Link 
                                href="/prosjekter" 
                                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                                    isActivePath('/prosjekter')
                                        ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                        : 'text-white hover:bg-blue-600/30'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                <span className="w-full">Prosjekter</span>
                            </Link>
                            <Link 
                                href="/blogg" 
                                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                                    isActivePath('/blogg')
                                        ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                        : 'text-white hover:bg-blue-600/30'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                <span className="w-full">Blogg</span>
                            </Link>
                            <Link 
                                href="/kontakt" 
                                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                                    isActivePath('/kontakt')
                                        ? 'text-blue-200 bg-blue-600/40 font-semibold border-l-2 border-blue-400'
                                        : 'text-white hover:bg-blue-600/30'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                <span className="w-full">Kontakt</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export { Header }
