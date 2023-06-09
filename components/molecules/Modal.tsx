import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../atoms";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
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
  }, [disabled, onClose]);

  const handlesubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const habdleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
      flex
      justify-content
      items-center
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-neutral-800/70
      "
      >
        <div
          className="
        relative 
        w-full
        phonexl:w-4/6
        tablet:w-3/6
        laptop:w-[calc(40rem_*_var(--scale))]
        my-6
        mx-auto
        h-full
        tabletxl:h-auto
        laptop:h-auto
        "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "opacity-100" : "opacity-0"}
            ${showModal ? "translate-y-0" : "translate-y-full"}
            `}
          >
            <div
              className="
            translate
            h-full
            tabletxl:h-auto
            tablet:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex 
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[.1rem]
                "
              >
                <button
                  className="
                p-1
                border-0
                hover: opacity-70
                transition
                absolute
                left-4
                "
                  onClick={handleClose}
                >
                  <IoMdClose size={20} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                    "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={habdleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handlesubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
