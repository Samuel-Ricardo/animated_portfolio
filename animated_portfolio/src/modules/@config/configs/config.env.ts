export const ENV = {
  ...process.env,
  MAILER: {
    KEY: {
      PUBLIC: process.env.NEXT_PUBLIC_MAILER_PUBLIC_KEY,
    },
  },
};
