"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import { recipes } from "@/lib/data";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  return (
    <main className="flex-grow bg-amber-50/40 py-12 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Cabeçalho responsivo: empilha no celular e fica lado a lado em telas maiores */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-950 tracking-tight text-center sm:text-left">
            Todas as Nossas Receitas
          </h1>

          <button 
            type="button"
            onClick={() => setIsRecipeModalOpen(true)} 
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all text-white font-semibold rounded-lg px-4 py-1.5 shadow-sm text-xs w-full sm:w-auto"
          >
            <Plus size={18} className="text-amber-950" />
            <span>Nova receita</span>
          </button>
        </div>
        
        <p className="text-sm text-amber-900/80 font-medium mb-10 max-w-xl mx-auto text-center sm:text-left">
          Explore o caderno completo de delícias mineiras, do salgado ao doce tradicional.
        </p>

        {/* Grid com todas as receitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
      </div>

      <RecipeFormModal 
        isOpen={isRecipeModalOpen} 
        onClose={() => setIsRecipeModalOpen(false)} 
      />
    </main>
  );
}