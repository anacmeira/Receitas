import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <div className="bg-white rounded-2xl border border-amber-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Imagem do Card */}
      <div className="w-full h-48 relative bg-amber-100 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Conteúdo do Card */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/50 px-2 py-0.5 rounded self-start">
          {recipe.category}
        </span>
        
        {/* Título */}
        <h3 className="text-lg font-bold text-amber-950">
          {recipe.title}
        </h3>
        
        {/* Descrição */}
        <p className="text-xs text-amber-900/80 leading-relaxed flex-grow mb-4">
          {recipe.description}
        </p>

        {/* Link de clique explícito (Evita conflitos de tags do HTML e garante o clique!) */}
        <Link 
          href={`/receitas/${recipe.id}`}
          className="text-xs font-bold text-orange-600 hover:text-orange-700 mt-auto inline-flex items-center gap-1 self-start"
        >
          Ver receita completa →
        </Link>
      </div>
    </div>
  );
}