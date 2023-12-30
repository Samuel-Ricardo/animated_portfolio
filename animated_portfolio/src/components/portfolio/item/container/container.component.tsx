export const PortfolioItemConteiner = ({
  children,
}: React.PropsWithChildren) => (
  <section className="item">
    <div className="container">{children}</div>
  </section>
);
