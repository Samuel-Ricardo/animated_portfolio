import { CONTACT_FORM_SCHEMA } from "./form/contact.validation";
import { VALIDATION_ZOD_MODULE } from "./zod.module";
import { VALIDATION_ZOD_REGISTRY } from "./zod.registry";

export const VALIDATION_ZOD_FACTORY = {
  CONTACT: {
    FORM: () =>
      VALIDATION_ZOD_MODULE.get<typeof CONTACT_FORM_SCHEMA>(
        VALIDATION_ZOD_REGISTRY.CONTACT.FORM,
      ),
  },
};
