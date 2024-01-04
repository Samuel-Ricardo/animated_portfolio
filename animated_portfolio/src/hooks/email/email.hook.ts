import { EmailDTO } from "@/modules/@core/email/dto/email.dto";
import { MODULES } from "@/modules/app.factory";
import { useCallback, useMemo } from "react";

export const useEmail = () => {
  const mailer = useMemo(() => MODULES.EMAIL.MAIN(), []);

  const sendEmail = useCallback(
    (email: EmailDTO) => mailer.sendEmail(email),
    [mailer],
  );

  return { mailer, sendEmail };
};
