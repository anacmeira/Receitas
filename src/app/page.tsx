import Link from "next/link";

export default function Home(){
  return(
    <main className="flex-grow bg-amber-50/40">
      <section className="bg-amber-100/50 py-16 md:py-24 border-b border-amber-200/60 px-4">
        <div className="flex flex-col gap-6 items-center container mx-auto text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-950 tracking-tight">
            Receitas Mineiras
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-amber-900/90 font-medium max-w-xl leading-relaxed">
            Descubra receitas simples, afetivas e saborosas com aquele gostinho único de comida de vó.
          </p>
          
          <Link 
            className="bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all text-white font-semibold rounded-xl px-6 py-3 shadow-md hover:shadow-lg text-sm sm:text-base" 
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </div>
      </section>
    </main>
  )
}