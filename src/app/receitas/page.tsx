import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

export default function ReceitasPage() {
  return (
    <main className="flex-grow bg-amber-50/40 py-12 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-950 tracking-tight mb-2">
          Todas as Nossas Receitas
        </h1>
        
        <p className="text-sm text-amber-900/80 font-medium mb-10 max-w-xl mx-auto">
          Explore o caderno completo de delícias mineiras, do salgado ao doce tradicional.
        </p>

        {/* Grid com todas as receitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
      </div>
    </main>
  );
}