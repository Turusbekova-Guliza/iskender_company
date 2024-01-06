import React from "react";
import "./Wishlist.scss";
import IconBasket from '../../assets/svg/icon basket delete.svg'
import { deleteItem } from "../../redux/wishList/wishlistSlice";
import { useDispatch } from "react-redux";

function ItemProduct({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <div className="hit-card">
        <div className="hit-image">
          <img
            src={item.image}
            alt=""
            className="hit-img"
          />
          <button onClick={() => handleDelete(item.id)} className="btn_like">
            <img src={IconBasket} alt="" />
          </button>
        </div>
        <p className="hit-desc">
          Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..
        </p>
        <p className="hit-price">1294 c</p>
        <div className="sets">
          <p className="available">В наличии</p>
          <span className="set">
            <span className="set-circle"></span>
            <p>Комплект</p>
          </span>
        </div>
        <div className="counter">
          <button className="btn-minus">—</button>
          <p className="piece">0</p>
          <button className="btn-plus">+</button>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
