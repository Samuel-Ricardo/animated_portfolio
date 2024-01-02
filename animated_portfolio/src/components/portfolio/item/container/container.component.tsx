import "./container.style.scss";

export const PortfolioItemConteiner = ({
  children,
}: React.PropsWithChildren) => (
  <section className="item">
    <div className="container">
      <div className="wrapper">{children}</div>
    </div>
  </section>
);
