import "./body.style.scss";

import { MotionForm } from "@/components/motion/form/form.component";
import { MODULES } from "@/modules/app.factory";

export const ContactFormBody = () => {
  const animation = MODULES.ANIMATION.MOTION.OPACITY()({});
  return (
    <MotionForm {...animation}>
      <input type="text" required placeholder="Name" name="name" />
      <input type="email" required placeholder="Email" name="email" />
      <textarea rows={8} placeholder="Message" name="message" />
      <button>Submit</button>
    </MotionForm>
  );
};
