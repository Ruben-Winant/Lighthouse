import Link from "next/link";
import styles from "../styles/pricingCard.module.css";

type PricingCardProps = {
  title: string;
  price: string;
  paymentType: string;
  features: string[];
  limited: boolean;
  buttonText: string;
};

const PricingCard = (props: PricingCardProps) => {
  return (
    <article className={styles.pricingCardOuter}>
      <div className={styles.pricingCardInner}>
        <div>
          <div className={styles.contentRow}>
            <h2>{props.title}</h2>
            <div className={styles.priceLabel}>
              <span className={styles.price}>{props.price}</span>
              <span className={styles.priceDescription}>
                {props.paymentType}
              </span>
            </div>
          </div>
          <div className={styles.breakline} />
          <div className={styles.featureList}>
            <span className={styles.listName}>Plan includes:</span>
            <ul>
              {props.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Change "create an account" to "Upgrade" when logged in */}
        <Link href="/pricing">
          <a className="nextButton">{props.buttonText}</a>
        </Link>
      </div>
    </article>
  );
};

export default PricingCard;
