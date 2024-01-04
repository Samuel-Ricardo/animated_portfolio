export const ENV = {
  ...process.env,
  MAILER: {
    KEY: {
      PUBLIC: process.env.NEXT_PUBLIC_MAILER_PUBLIC_KEY || "",
    },
    SERVICE: {
      ID: process.env.NEXT_PUBLIC_MAILER_SERVICE_ID || "",
    },
    TEMPLATE: {
      ID: process.env.NEXT_PUBLIC_MAILER_TEMPLATE_ID || "",
    },
  },
};
