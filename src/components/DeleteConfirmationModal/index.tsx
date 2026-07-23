import { Recipe } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  recipe: Recipe | undefined;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  recipe,
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-amber-50/95 border-amber-200/80 rounded-2xl shadow-lg max-w-md">
        <DialogHeader className="gap-1.5 text-left">
          <DialogTitle className="text-lg font-bold text-amber-950">
            Confirmar exclusão
          </DialogTitle>
          <DialogDescription className="text-xs text-amber-900/80 leading-relaxed">
            Tem certeza que deseja excluir a receita{" "}
            <span className="font-semibold text-amber-950">"{recipe?.title}"</span>? 
            Esta ação não pode ser desfeita.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2.5 mt-4 pt-2">
          <Button 
            onClick={onClose} 
            variant="outline"
            className="border-amber-200 bg-amber-100/40 text-amber-900 hover:bg-amber-100 hover:text-amber-950 font-medium text-xs rounded-lg cursor-pointer"
          >
            Cancelar
          </Button>

          <Button 
            onClick={onConfirm} 
            className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Excluir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}