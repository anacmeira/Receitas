import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { Recipe } from "@/lib/data";

interface RecipeCardProps {
  recipe: Recipe;
  onEdit?: () => void;
  onDelete?: (recipeId: string) => void;
}

export default function RecipeCard({ recipe, onEdit, onDelete }: RecipeCardProps) {
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onDelete) {
      onDelete(recipe.id);
    }
  };

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

        {/* Rodapé do Card: Link + Ações */}
        <div className="mt-auto pt-3 border-t border-amber-100 flex items-center justify-between">
          <Link 
            href={`/receitas/${recipe.id}`}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
          >
            Ver receita completa →
          </Link>

          {(onEdit || onDelete) && (
            <div className="flex items-center gap-1">
              {onEdit && (
                <button
                  type="button"
                  onClick={handleEdit}
                  title="Editar receita"
                  className="p-1.5 text-amber-700 hover:text-amber-900 hover:bg-amber-100/60 rounded-md transition-colors cursor-pointer"
                >
                  <Pencil size={15} />
                </button>
              )}
              
              {onDelete && (
                <button
                  type="button"
                  onClick={handleDelete}
                  title="Excluir receita"
                  className="p-1.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                >
                  <Trash2 size={15} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}