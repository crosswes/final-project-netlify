// * Base
import { cartContext } from '../../cartContext';
import { useContext, useState } from 'react';
import { t } from 'i18next';

// * Styles
import styles from './Card.module.css';

// * Components
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Card = ({
  type = [],
  name = '',
  description = '',
  price = null,
  image = { src: '', alt: 'Coffe' },
}) => {
  const [quantity, setQuantity] = useState(1);
  const { setCartQuantity, addCoffeeToCart } = useContext(cartContext);

  return (
    <div className={styles.card}>
      <img className={styles.coffee} src={image.src} alt={image.alt} />
      <div className={styles.typeBlock}>
        {type.map((item, index) => (
          <span key={index} className={styles.type}>
            {t(item)}
          </span>
        ))}
      </div>
      <h6 className={styles.name}>{t(name)}</h6>
      <p className={styles.description}>{t(description)}</p>
      <div className={styles.panel}>
        <div className={styles.price}>
          R$
          <span className={styles.number}>{price}</span>
        </div>
        <div className={styles.buyBlock}>
          <div className={styles.countBlock}>
            <Button
              onClick={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
              }}
            >
              <Icon className={styles.minus} icon='minus' />
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              <Icon className={styles.plus} icon='plus' />
            </Button>
          </div>
          <div className={styles.background}>
            <Button
              onClick={() => {
                setCartQuantity((prev) => prev + quantity);
                addCoffeeToCart({ name, quantity, image });
                setQuantity(1);
              }}
            >
              <Icon icon='cart' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
