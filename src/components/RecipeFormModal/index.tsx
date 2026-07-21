"use client";

import { useState } from "react";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe = {
      title,
      category,
      description,
      imageUrl: imageUrl || "/placeholder.svg?height=400&width=600",
      prepTime,
      cookTime,
      servings,
    };

    console.log("Receita criada:", newRecipe);
    alert("Receita criada com sucesso!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-amber-50/95 border-amber-200 text-amber-950 max-w-xl rounded-2xl p-6 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold text-amber-950 tracking-tight">
            Nova receita
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2 text-left">
          {/* Título e Categoria */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Título
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Categoria
              </label>
              <input
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              Descrição
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-y"
            />
          </div>

          {/* URL da imagem */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              URL da imagem
            </label>
            <input
              type="text"
              placeholder="/placeholder.svg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Tempos e Porções */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Tempo de preparo
              </label>
              <input
                type="text"
                placeholder="15 minutos"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                    Cozimento
              </label>
              <input
                type="text"
                placeholder="30 minutos"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Porções
              </label>
              <input
                type="text"
                placeholder="1"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Botões do Rodapé */}
          <div className="flex justify-end gap-2 pt-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-amber-200 text-amber-950 bg-white hover:bg-amber-100 font-medium text-sm transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-950 text-amber-50 hover:bg-amber-900 font-semibold text-sm shadow-md transition-colors cursor-pointer"
            >
              Criar receita
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}