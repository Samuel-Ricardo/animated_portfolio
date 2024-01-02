import { ContactAreaContainer } from "./container/container.component";
import { ContactAreaDetails } from "./details/details.component";
import { ContactForm } from "./form/form.component";

export const ContactArea = () => {
  return (
    <ContactAreaContainer>
      <ContactAreaDetails />
      <ContactForm />
    </ContactAreaContainer>
  );
};
