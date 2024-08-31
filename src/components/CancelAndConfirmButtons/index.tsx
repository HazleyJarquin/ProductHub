import { Button } from "../ui/button";
import styles from "./styles/styles.module.css";

interface CancelAndConfirmButtonsProps {
  onCancel: () => void;
  onConfirm: () => void;
  cancelText: string;
  confirmText: string;
  justifyContent: "start" | "center" | "end";
}
export const CancelAndConfirmButtons = ({
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  justifyContent,
}: CancelAndConfirmButtonsProps) => {
  const justifyContentClass =
    justifyContent === "start"
      ? styles.start
      : justifyContent === "center"
      ? styles.center
      : styles.end;
  return (
    <div className={`${styles.container} ${justifyContentClass}`}>
      <Button variant={"destructive"} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button variant={"ghost"} onClick={onConfirm}>
        {confirmText}
      </Button>
    </div>
  );
};
