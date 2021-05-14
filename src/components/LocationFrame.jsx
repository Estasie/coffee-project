import React, { useRef } from "react";

import instagram from "../content/imgs/instagram.svg";
import vk from "../content/imgs/vk.svg";
import facebook from "../content/imgs/facebook.svg";

export default function LocationFrame({ video, descr, img }) {
  const ref = useRef(null);

  return (
    <div className="container__block">
      <video className="video videoPlay" id="v3" muted ref={ref} loop>
        <source src={video} />
      </video>
      <div
        className="block__descr_container"
        onMouseEnter={() => ref != null && ref.current.play()}
        onMouseLeave={() => ref != null && ref.current.pause()}
      >
        <div className="block_descr v3">
          <img src={img} alt="cup" className="block_img" />
          <p className="block__header">{descr}</p>
          <p className="block__text">
            Мы находимся по адресу ул.Пушкинская 101 на первом этаже
          </p>
          <p className="block__text">А вот ссылки на социальные сети:</p>
          <div className="social">
            <div className="inst">
              <a href="">
                <img className="social_icon" src={instagram} alt="inst" />{" "}
              </a>
            </div>
            <div className="vk">
              <a href="">
                <img className="social_icon" src={vk} alt="vk" />{" "}
              </a>
            </div>
            <div className="fb">
              <a href="">
                <img className="social_icon" src={facebook} alt="facebook" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
