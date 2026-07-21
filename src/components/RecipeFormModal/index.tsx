import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose}: RecipeFormModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Rceita</DialogTitle>
                </DialogHeader>
                <form action="">
                    
                </form>
            </DialogContent>
        </Dialog>
    )
}