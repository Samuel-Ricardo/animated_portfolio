import { ContactAreaAnimation } from "./animation/animation.component";
import { ContactFormBody } from "./body/body.component";
import { ContactAreaFormContainer } from "./container/container.component";

export const ContactForm = () => {
  return (
    <ContactAreaFormContainer>
      <ContactAreaAnimation />
      <ContactFormBody />
    </ContactAreaFormContainer>
  );
};
