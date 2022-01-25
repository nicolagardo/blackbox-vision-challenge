import * as React from "react";

import styles from "./QuetionCard.module.scss";
interface Props {
    header: string;
    footer: string;
}


const QuetionCard: React.FC<Props> = ({header, children, footer}) => (
  <div className={styles.container}>
    <header>{header}</header>
    <section>{children}</section>
    <footer>{footer}</footer>
  </div>
);

export default QuetionCard;
