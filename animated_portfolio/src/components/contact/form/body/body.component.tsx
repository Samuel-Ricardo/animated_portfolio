"use client";
import "./body.style.scss";

import { MotionForm } from "@/components/motion/form/form.component";
import { useEmail } from "@/hooks/email/email.hook";
import { MODULES } from "@/modules/app.factory";
import { ContactFormData } from "@/modules/validation/zod/form/contact.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

export const ContactFormBody = () => {
  const animation = MODULES.ANIMATION.MOTION.OPACITY()({});
  const validation = MODULES.VALIDATION.ZOD.CONTACT.FORM();

  const { sendEmail } = useEmail();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(validation),
  });

  const submit = useCallback(
    () =>
      handleSubmit(
        async (data) =>
          await sendEmail({
            to_name: "Samuel Ricardo",
            from_name: data.name,
            message: data.message + " \n\n " + data.email,
          }),
      ),
    [handleSubmit, sendEmail],
  );

  return (
    <MotionForm {...animation} onSubmit={submit()}>
      <input type="text" required placeholder="Name" {...register("name")} />
      <label>{errors.name?.message}</label>
      <input type="email" required placeholder="Email" {...register("email")} />
      <label>{errors.email?.message}</label>
      <textarea rows={8} placeholder="Message" {...register("message")} />
      <label>{errors.message?.message}</label>
      <button>Submit</button>
    </MotionForm>
  );
};
