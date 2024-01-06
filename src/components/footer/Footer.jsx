import React from "react";
import "./Footer.scss";
import LogoFooter from "../../assets/svg/logo.svg";
import AppStore from "../../assets/svg/AppStore.svg";
import GooglePlay from "../../assets/svg/Google Play.svg";
import WhatsApp from "../../assets/svg/icon whatsApp.svg";
import Instagram from "../../assets/svg/icon instagram.svg";
import Facebook from "../../assets/svg/icon facebook.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_menu_start">
            <div className="footer_block1">
              <img src={LogoFooter} alt="" className="footer_logo" />
              <p className="footer_p">
                Первый отечественный бренд Iskender на рынке сантехники от
                компании ОсОО «Стройдом.кг»
              </p>
              <div className="app_google">
                <a target="_blank" href="https://www.apple.com" className="app">
                  <img src={AppStore} alt="" className="img_app-google" />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com"
                  className="google"
                >
                  <img src={GooglePlay} alt="" className="img_app-google" />
                </a>
              </div>
            </div>
            <div className="footer_block2">
              <h6 className="footer_title">Адреса</h6>
              <p className="footer_subTitle">ЭлитСтрой</p>
              <p className="footer_sub">ул. Ден-Сяопина 18/1</p>
              <p className="footer_subTitle sub_title">Баткен</p>
              <p className="footer_sub">ул. Льва-Толстого 19</p>
              <p className="footer_subTitle sub_title">ТааТан</p>
              <p className="footer_sub">ул. Лермонтова 6</p>
            </div>
            <div className="footer_block3">
              <h6 className="footer_title">Компания</h6>
              <p className="footer_subTitle">Каталог</p>
              <p className="footer_subTitle">Избранные</p>
              <p className="footer_subTitle">Личный кабинет</p>
            </div>
            <div className="footer_block4">
              <h6 className="footer_title">Контакты</h6>
              <p className="footer_subTitle">Email:</p>
              <a className="footer_sub" href="mailto:iskender.kg@gmail.com">
                iskender.kg@gmail.com
              </a>
              <p className="footer_subTitle sub_title">Телефон:</p>
              <a href="tel:+996 (500) 000-104" className="footer_sub">
                +996 (500) 000-104
              </a>
              <a href="tel:+996 (997) 000-104" className="footer_sub">
                +996 (997) 000-104
              </a>
              <a href="tel:+996 (222) 000-104" className="footer_sub">
                +996 (222) 000-104
              </a>
              <a
                className="whatsapp_link"
                target="_blank"
                href="https://www.whatsapp.com"
              >
                <img src={WhatsApp} alt="" className="whatsapp" />
              </a>
            </div>
          </div>
          <hr />
          <div className="footer_block_end">
            <p className="footer_desc">
              © 2023 Iskender.kg - Отечественный бренд сантехники
            </p>
            <div className="link_block">
              <a target="_blank" href="https://www.instagram.com">
                <img src={Instagram} alt="" className="img_link" />
              </a>
              <a target="_blank" href="https://www.facebook.com">
                <img src={Facebook} alt="" className="img_link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
