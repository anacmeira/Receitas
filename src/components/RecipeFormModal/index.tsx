"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Recipe } from "@/lib/data";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipe: Omit<Recipe, "id"> | Recipe) => void;
  mode?: "create" | "edit";
  recipe?: Recipe;
}

export default function RecipeFormModal({
  isOpen,
  onClose,
  onSave,
  mode = "create",
  recipe,
}: RecipeFormModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("1");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setErrors({});
      if (mode === "edit" && recipe) {
        setTitle(recipe.title || "");
        setCategory(recipe.category || "");
        setDescription(recipe.description || "");
        setImageUrl(recipe.image || "");
        setPrepTime(recipe.prepTime || "");
        setCookTime(recipe.cookTime || "");
        setServings(String(recipe.servings || "1"));
      } else {
        setTitle("");
        setCategory("");
        setDescription("");
        setImageUrl("");
        setPrepTime("");
        setCookTime("");
        setServings("1");
      }
    }
  }, [isOpen, mode, recipe]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "O título é obrigatório.";
    if (!category.trim()) newErrors.category = "A categoria é obrigatória.";
    if (!description.trim()) newErrors.description = "A descrição é obrigatória.";
    if (!servings || Number(servings) <= 0) {
      newErrors.servings = "Porções deve ser maior que 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipeData = {
      title,
      category,
      description,
      image: imageUrl || "/placeholder.svg?height=400&width=600",
      prepTime,
      cookTime,
      servings: Number(servings) || 1,
      ingredients: recipe?.ingredients || [],
      instructions: recipe?.instructions || [],
    };

    console.log("Receita enviada do modal:", newRecipeData);

    onSave(
      mode === "edit" && recipe
        ? { ...newRecipeData, id: recipe.id }
        : newRecipeData
    );

    alert(mode === "edit" ? "Receita editada!" : "Receita criada com sucesso!");
    onClose();
  };

  const inputStyle = "w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500";
  const btnSecondaryStyle = "px-4 py-2 bg-white border border-amber-200 text-amber-950 rounded-lg hover:bg-amber-100 transition-colors text-sm font-medium h-fit cursor-pointer";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-amber-50/95 border-amber-200 text-amber-950 w-full max-w-2xl rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold text-amber-950 tracking-tight">
            {mode === "create" ? "Nova receita" : "Editar receita"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2 text-left" noValidate>
          {/* Título e Categoria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1 whitespace-nowrap">
                Título
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
                }}
                className={`w-full px-3 py-2 bg-white border rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 ${
                  errors.title ? "border-red-500 focus:ring-red-500" : "border-amber-200 focus:ring-amber-500"
                }`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1 whitespace-nowrap">
                Categoria
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
                }}
                className={`w-full px-3 py-2 bg-white border rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 ${
                  errors.category ? "border-red-500 focus:ring-red-500" : "border-amber-200 focus:ring-amber-500"
                }`}
              />
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
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
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
              }}
              className={`w-full px-3 py-2 bg-white border rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 resize-y ${
                errors.description ? "border-red-500 focus:ring-red-500" : "border-amber-200 focus:ring-amber-500"
              }`}
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
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
              className={inputStyle}
            />
          </div>

          {/* Tempos e Porções */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1 whitespace-nowrap">
                Tempo de preparo
              </label>
              <input
                type="text"
                placeholder="15 minutos"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1 whitespace-nowrap">
                Cozimento
              </label>
              <input
                type="text"
                placeholder="30 minutos"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1 whitespace-nowrap">
                Porções
              </label>
              <input
                type="number"
                placeholder="1"
                value={servings}
                onChange={(e) => {
                  setServings(e.target.value);
                  if (errors.servings) setErrors((prev) => ({ ...prev, servings: "" }));
                }}
                className={`w-full px-3 py-2 bg-white border rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 ${
                  errors.servings ? "border-red-500 focus:ring-red-500" : "border-amber-200 focus:ring-amber-500"
                }`}
              />
              {errors.servings && <p className="text-red-500 text-xs mt-1">{errors.servings}</p>}
            </div>
          </div>

          {/* Lista de Ingredientes */}
          <div className="flex flex-col gap-2">
            <label className="block text-xs font-semibold text-amber-950">
              Ingredientes
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 w-full items-start">
                <input
                  type="text"
                  placeholder="Ex: 2 xícaras de farinha de trigo"
                  className={inputStyle}
                />
                <button type="button" className={btnSecondaryStyle}>
                  Remover
                </button>
              </div>

              <button type="button" className={`${btnSecondaryStyle} w-fit`}>
                Adicionar ingrediente
              </button>
            </div>
          </div>

          {/* Lista de Instruções */}
          <div className="flex flex-col gap-2">
            <label htmlFor="instructions" className="block text-xs font-semibold text-amber-950">
              Instruções
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 w-full items-start">
                <textarea id="instructions" rows={2} className={inputStyle} />
                <button type="button" className={btnSecondaryStyle}>
                  Remover
                </button>
              </div>

              <button type="button" className={`${btnSecondaryStyle} w-fit`}>
                Adicionar instrução
              </button>
            </div>
          </div>

          {/* Botões do Rodapé */}
          <div className="flex justify-end gap-2 pt-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className={btnSecondaryStyle}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-950 text-amber-50 hover:bg-amber-900 font-semibold text-sm shadow-md transition-colors cursor-pointer"
            >
              {mode === "create" ? "Criar receita" : "Salvar alterações"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}