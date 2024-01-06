import React, { useState, useEffect } from "react";
import "./Home.scss";
import HeartWhite from "../../assets/svg/heart alpha.svg";
import HeartBlue from "../../assets/svg/heart blue.svg";
import { addItem } from "../../redux/wishList/wishlistSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import Banner from "../../assets/image/banner.png";
import { Link } from "react-router-dom";
import InfoAvatar from "../../assets/svg/icon avatar location.svg";
import Locations from "../../assets/svg/icon Location.svg";
import Time from "../../assets/svg/icon Clock-Square.svg";
import Phone from "../../assets/svg/icon phone.svg";

function Home() {
  const [clicked, setClicked] = useState({});
  const [counters, setCounters] = useState({});

  const dispatch = useDispatch();

  const addWishList = (product) => {
    dispatch(addItem(product));
    setClicked((prevState) => ({
      ...prevState,
      [product.id]: !prevState[product.id],
    }));
  };

  const increment = (saleId) => {
    setCounters({ ...counters, [saleId]: (counters[saleId] || 0) + 1 });
  };

  const decrement = (saleId) => {
    if (counters[saleId] > 0) {
      setCounters({ ...counters, [saleId]: counters[saleId] - 1 });
    }
  };

  const stories = [
    {
      id: 1,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRynheJrFkIVJLiz7N9AdMpvHnglnF4fPY8aqwdWugCLtibk6Lo",
      title: "Скидки",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRytESv9boq-bCcEaWy-LbLb5IU4q3YM3lVzO90ZY0zUJn1DdYe",
      title: "Акции",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOGeqjc2_ahA05SrQhZDc53VGK6rInV9H-Pz_TP9BOgbPiAOm",
      title: "Распродажа",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREsrtOyFBRnshbauFXC0iWi_94Sa4AIsqcTVboWRFXkQTOdIRP",
      title: "Подарки",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZA9KoSB1ITF0RNARqxhkqWZRkt-KowObiYgeuW4OwSkg2awtn",
      title: "Подарки",
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
  ];

  const category = [
    {
      id: 1,
      title: "Ванны",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjlgLHrcIyE5A0N9LUKFQIX5d49aB1bLpKtGQCWzHzvkXy2GwQ",
    },
    {
      id: 2,
      title: "Смесители",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREpN_EaBmg_MgaVWd8VJfQ-Q6Uo1EExe4oeDC90kBssvk47_q2",
    },
    {
      id: 3,
      title: "Вытяжки для кухни",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPd00qPgAHOA5gEkvNKPFZJRinZNBLhr3vo5nEA1YGYGt71tvo",
    },
    {
      id: 4,
      title: "Кухонные майки",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQggqOcJbwZwJEyQNMRP533bhPPW30G3IaKr-2nzZ1ZonJNdTal",
    },
    {
      id: 5,
      title: "Другие",
      image:
        "https://s3-alpha-sig.figma.com/img/1680/ca1b/ab13f25539269dc7f839629befabb751?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3mSP5cxN-cgm-3c3aud4ZuDCgnOFj3oudk4ZkeqMDVwaFWapYOBSUa7T3DQCCfcb2pc0XoHzzi253szPpX66PI8Es2HL8ViAuQ-y5mP~i1BuckaRgnrFE~bjwHoYwDuu1XTjdk62T3Lvg1zUmm6u8VqtcCIyZplc67w5UK~yJqqavsGk4Y~W-8I7-UK6eoPHCR3ulPn0cV9bcTlRM6MhIczW~PldujdCcrZns4F2xV-g8uuXpkUIGmLb~ereXCy5wAdXQf7ORJU9FpmBl7aGGR-gjQFSjBb1KxzqcCSRCS2U-vjclU4TofgyIRavwWS~Q2g1Mi2-DkTMqsNGPiWcg__",
    },
    {
      id: 6,
      title: "Унитазы",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWlaoB8aoH6VBNwLw4gRMZhl039C_WkpOj-CuS1cbb_Zhza9fu",
    },
    {
      id: 7,
      title: "Вытяжки для кухни",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPd00qPgAHOA5gEkvNKPFZJRinZNBLhr3vo5nEA1YGYGt71tvo",
    },
    {
      id: 8,
      title: "Умывальники",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOM-sannb2eMV8DbSYRmw5NWMBZ7Vv0avN9k7NUozF3Y0zqb7I",
    },
    {
      id: 9,
      title: "Полотенцеусушители",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlLDZl9F9xE_gwJa6WKpDhkHDLKceQTk50iEwT2zvcBIH1pqc_",
    },
    {
      id: 10,
      title: "Водонагреватели",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfoPgq82g-EBgyvqjgJgKVexIYnl8d827bKrHa22KqO8dVWSQ",
    },
    {
      id: 11,
      title: "Душевые",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlQNlqS6WZNSvqzFiWPo7s5wimAhgjDIRKfkaXObd_5UR2TFuq",
    },
    {
      id: 12,
      title: "Водонагреватели",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTD9k4s-a39FY5P52UlgNHJqooMABeBY31lMM2cgPS1xXq0sHlL",
    },
    {
      id: 13,
      title: "Водонагреватели",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTD9k4s-a39FY5P52UlgNHJqooMABeBY31lMM2cgPS1xXq0sHlL",
    },
    {
      id: 14,
      title: "Полотенцусушители",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlLDZl9F9xE_gwJa6WKpDhkHDLKceQTk50iEwT2zvcBIH1pqc_",
    },
  ];

  const hit = [
    {
      id: 1,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1295 c",
      set: "Комплект",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки ",
      price: "1296 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1297 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1298 c",
      available: "В наличии",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1299 c",
      available: "В наличии",
      set: "Комплект",
    },
  ];

  const sale = [
    {
      id: 1,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 c",
      bestPrice: "894 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1295 c",
      bestPrice: "895 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки ",
      price: "1296 c",
      bestPrice: "896 c",
      available: "В наличии",
      set: "",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1297 c",
      bestPrice: "897 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1298 c",
      bestPrice: "898 c",
      available: "В наличии",
      set: "Комплект",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ruLlSg9MtyYi5XFoRLPun3_IXPXGPYMm1lN-totia2xSGzF5",
      title: "Держатель для лейки BOOU PG605 ",
      price: "1299 c",
      bestPrice: "899 c",
      available: "В наличии",
      set: "Комплект",
    },
  ];

  return (
    <div className="home">
      <div className="container">
        <section className="stories">
          <h1 className="story-h1">Сторизмы</h1>
          <div className="story">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="image-card">
                  <img className="story-img" src={story.image} alt="" />
                </div>
                {story.title ? (
                  <p className="story-title">{story.title}</p>
                ) : (
                  <p className="fallback-background"></p>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="categories">
          <h1>Категории</h1>
          <div className="category">
            {category.map((category) => (
              <div key={category.id} className="category-card">
                <p className="category-title">{category.title}</p>
                <p className="category-product">3000 товаров</p>
                <div className="category-img">
                  <img src={category.image} alt="" className="image" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="hits">
          <h1 className="hits-h1">Хиты продаж</h1>
          <div className="hit-product">
            {hit.map((hit) => (
              <div key={hit.id} className="hit-card">
                <div className="hit-image">
                  <img src={hit.image} alt="" className="hit-img" />
                  <button onClick={() => addWishList(hit)} className="btn_like">
                    <img
                      src={clicked[hit.id] ? HeartBlue : HeartWhite}
                      alt=""
                    />
                  </button>
                </div>
                <p className="hit-desc">{hit.title}</p>
                <p className="hit-price">{hit.price}</p>

                <div className="sets">
                  {hit.available ? (
                    <p className="available">{hit.available}</p>
                  ) : (
                    <p className="available-2">В наличии</p>
                  )}
                  {hit.set ? (
                    <span className="set">
                      <span className="set-circle"></span>
                      <p>{hit.set}</p>
                    </span>
                  ) : (
                    <span className="set-2">
                      <span className="set-circle-2"></span>
                      <p>Комплект</p>
                    </span>
                  )}
                </div>
                <div className="counter">
                  <button
                    className="btn-minus"
                    onClick={() => decrement(hit.id)}
                  >
                    —
                  </button>
                  <p className="piece">{counters[hit.id] || 0}</p>
                  <button
                    className="btn-plus"
                    onClick={() => increment(hit.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="news">
          <h1>Новости</h1>
          <div className="news_block">
            <div className="news_card">
              <img src={Banner} alt="" />
            </div>
            <div className="news_card">
              <img src={Banner} alt="" />
            </div>
            <div className="news_card"></div>
          </div>
        </section>
        <section className="sales">
          <h1>Аукционные товары</h1>
          <div className="hit-product">
            {sale.map((sale) => (
              <div key={sale.id} className="hit-card">
                <div className="hit-image">
                  <img src={sale.image} alt="" className="hit-img" />
                  <button
                    onClick={() => addWishList(sale)}
                    className="btn_like"
                  >
                    <img
                      src={clicked[sale.id] ? HeartBlue : HeartWhite}
                      alt=""
                    />
                  </button>
                </div>
                <p className="hit-desc">{sale.title}</p>
                <div className="prices">
                  <p className="best_price">{sale.bestPrice}</p>
                  <p className="hit-price">{sale.price}</p>
                </div>
                <div className="sets">
                  {sale.available ? (
                    <p className="available">{sale.available}</p>
                  ) : (
                    <p className="available-2">В наличии</p>
                  )}
                  {sale.set ? (
                    <span className="set">
                      <span className="set-circle"></span>
                      <p>{sale.set}</p>
                    </span>
                  ) : (
                    <span className="set-2">
                      <span className="set-circle-2"></span>
                      <p>Комплект</p>
                    </span>
                  )}
                </div>
                <div className="counter">
                  <button
                    className="btn-minus"
                    onClick={() => decrement(sale.id)}
                  >
                    —
                  </button>
                  <p className="piece">{counters[sale.id] || 0}</p>
                  <button
                    className="btn-plus"
                    onClick={() => increment(sale.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="addresses">
          <h1>Адреса магазинов</h1>
          <div className="address_block">
            <div className="div_address">
              <div className="info_block">
                <div className="info">
                  <img src={InfoAvatar} alt="" />
                  <div className="open-map">
                    <p>Iskender home</p>
                    <Link target="_blank"
                      className="open"
                      to="https://2gis.kg/bishkek/geo/15763234351106795"
                    >
                      открыть в карте
                    </Link>
                  </div>
                </div>
                <p>
                  <Link target="_blank"
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351106795"
                  >
                    →
                  </Link>
                </p>
              </div>
              <hr />
              <div className="location">
                <div className="locations">
                  <Link
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351106795"
                  >
                    <img src={Locations} alt="" className="loc" />
                    <p className="address">
                      Кыргызстан, г. Бишкек ул. Турусбекова A167
                    </p>
                  </Link>
                </div>
                <div className="time-phone">
                  <div className="time">
                    <img src={Time} alt="" className="location" />
                    <p className="address">08:00 - 22:00</p>
                  </div>
                  <div className="phone">
                    <Link to="tel:+996500345345">
                      <img src={Phone} alt="" className="location" />
                      <p className="address">+996 500 345 345</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="div_address">
              <div className="info_block">
                <div className="info">
                  <img src={InfoAvatar} alt="" />
                  <div className="open-map">
                    <p>Iskender home</p>
                    <Link target="_blank"
                      className="open"
                      to="https://2gis.kg/bishkek/geo/15763234351167904"
                    >
                      открыть в карте
                    </Link>
                  </div>
                </div>
                <p>
                  <Link target="_blank"
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351106795"
                  >
                    →
                  </Link>
                </p>
              </div>
              <hr />
              <div className="location">
                <div className="locations">
                  <Link target="_blank"
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351167904"
                  >
                    <img src={Locations} alt="" className="loc" />
                    <p className="address">
                      Кыргызстан, г. Бишкек ул. Турусбекова A167
                    </p>
                  </Link>
                </div>
                <div className="time-phone">
                  <div className="time">
                    <img src={Time} alt="" className="location" />
                    <p className="address">08:00 - 22:00</p>
                  </div>
                  <div className="phone">
                    <Link to="tel:+996500345345">
                      <img src={Phone} alt="" className="location" />
                      <p className="address">+996 500 345 345</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="div_address">
              <div className="info_block">
                <div className="info">
                  <img src={InfoAvatar} alt="" />
                  <div className="open-map">
                    <p>Iskender home</p>
                    <Link target="_blank"
                      className="open"
                      to="https://2gis.kg/bishkek/geo/15763234351029130"
                    >
                      открыть в карте
                    </Link>
                  </div>
                </div>
                <p>
                  <Link target="_blank"
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351106795"
                  >
                    →
                  </Link>
                </p>
              </div>
              <hr />
              <div className="location">
                <div className="locations">
                  <Link target="_blank"
                    className="open"
                    to="https://2gis.kg/bishkek/geo/15763234351029130"
                  >
                    <img src={Locations} alt="" className="loc" />
                    <p className="address">
                      Кыргызстан, г. Бишкек ул. Турусбекова A167
                    </p>
                  </Link>
                </div>
                <div className="time-phone">
                  <div className="time">
                    <img src={Time} alt="" className="location" />
                    <p className="address">08:00 - 22:00</p>
                  </div>
                  <div className="phone">
                    <Link to="tel:+996500345345">
                      <img src={Phone} alt="" className="location" />
                      <p className="address">+996 500 345 345</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
