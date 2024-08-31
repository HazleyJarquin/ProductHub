import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  title?: string;
  className?: string;
}
export const Modal = ({
  onClose,
  open,
  bodyContent,
  footerContent,
  title,
  className,
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className={className}>
        {title && (
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
        )}

        <AlertDialogDescription>{bodyContent}</AlertDialogDescription>

        {footerContent && (
          <AlertDialogFooter>{footerContent}</AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
