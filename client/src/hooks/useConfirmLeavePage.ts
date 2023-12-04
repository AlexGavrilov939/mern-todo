import { useState, useEffect } from "react";

const useConfirmLeavePage = (shouldConfirmDefault: boolean = false) => {
  const [shouldConfirm, setShouldConfirm] = useState(shouldConfirmDefault);
  const [confirmWindowOpened, setConfirmWindowOpened] = useState(false);

  useEffect(() => {
    if (!shouldConfirm) {
      setConfirmWindowOpened(false);
    }
  }, [shouldConfirm]);

  useEffect(() => {
    // @ts-ignore
    const handleClick = (event) => {
      if (shouldConfirm) {
        setConfirmWindowOpened(true);
        event.preventDefault();
      }
    };

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, [shouldConfirm]);

  return { confirmWindowOpened, setShouldConfirm };
};

export { useConfirmLeavePage };
