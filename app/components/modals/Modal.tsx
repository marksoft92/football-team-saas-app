"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "../../assets/styles/components/model/model.module.scss";
import Button from "../button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }
  const showModalStyles = showModal ? styles.isOpen : "isCloset";
  return (
    <>
      <div className={`${styles.container} ${showModalStyles}`}>
        <div className={styles.card}>
          <button onClick={handleClose}>
            <IoMdClose size={18} />
          </button>
          <div className="text-lg font-semibold">{title}</div>

          <div className="relative p-6 flex-auto">{body}</div>
          <div className="flex flex-col gap-2 p-6">
            <div>
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
