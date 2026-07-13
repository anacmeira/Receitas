import Link from "next/link";

export default function Header(){
    return (
        <header className="w-full bg-amber-50 text-amber-950 py-4 border-b border-amber-100">
            <div className="flex justify-between container mx-auto px-4">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">
                    Receitas Mineiras
                </Link>
                <nav className="flex gap-6">
                    <Link className="hover:text-amber-700 transition-colors" href="/">
                        Início
                    </Link>
                    <Link className="hover:text-amber-700 transition-colors" href="/">
                        Receitas
                    </Link>
                </nav>
            </div>
        </header>
    )
}