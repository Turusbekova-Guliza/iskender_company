import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import IconLogo from "../../assets/svg/logo.svg";
import IconMenu from "../../assets/svg/icon menu btn.svg";
import IconSearch from "../../assets/svg/icon Search.svg";
import Avatar from "../../assets/svg/ICON SIGN.svg";
import LineHeader from "../../assets/svg/Line 1 header.svg";
import IconBasket from "../../assets/svg/icon basket Cart.svg";
import { useSelector } from "react-redux";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const wishlist = useSelector((state) => state.wishlistItem.items);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo_header">
            <Link to="/">
              <img src={IconLogo} alt="" className="logotip" />
            </Link>
          </div>
          <div onClick={toggleMenu} className="catalog_block">
            <button className="btnCatalog">
              <img src={IconMenu} alt="" className="catalog_menu_img" />
            </button>
            <p className="p_catalog">Каталог</p>
            <div
              className={menuVisible ? "catalogs_menu show" : "catalogs_menu"}
            >
              <p className="p_menu1">Категории</p>
              <p className="p_menu2">Хиты продаж</p>
              <p className="p_menu3">Новости</p>
              <p className="p_menu4">Аукционные товары</p>
              <p className="p_menu5">Адреса магазинов</p>
            </div>
          </div>
          <div className="search_block">
            <label className="search_label">
              <img src={IconSearch} alt="" className="icon-search" />
              <input
                type="search"
                placeholder="Поиск"
                className="search_input"
              />
              <p className="p_label">42903</p>
            </label>
          </div>
          <div className="sign_basket">
            <div className="signs">
              <div className="sign_welcome">
                <p className="welcome">Добро пожаловать</p>
                <Link to="/login" className="logReg">
                  Вход/Регистрация
                </Link>
              </div>
              <div className="icon_avatar">
                <img src={Avatar} alt="" className="avatar" />
              </div>
            </div>
            <img src={LineHeader} alt="" className="line-header" />
            <div className="basket_block">
              <Link to="/wishlist">
                <img src={IconBasket} alt="" className="basket" />
                <span className="span_counter">{wishlist.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
