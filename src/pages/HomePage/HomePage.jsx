import React from "react";
import {NavLink} from "react-router-dom";

import LocationFrame from "../../components/LocationFrame";
import FormFrame from "../../components/FormFrame";
import MenuFrame from "../../components/MenuFrame";

import video1 from "../../content/videos/video1.mp4";
import video2 from "../../content/videos/video2.mp4";
import video3 from "../../content/videos/video3.mp4";

import menuImg from "../../content/imgs/croissant.svg";
import baristaImg from "../../content/imgs/barista.svg";
import mapImg from "../../content/imgs/map.svg";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <MenuFrame
          video={video2}
          descr="Удивляем не только напитками, но и блюдами"
          img={menuImg}
        ><NavLink to="/menu" className="link_to_menu"/></MenuFrame>

        <FormFrame
          video={video3}
          descr="Хочешь стать частью нашей команды?"
          img={baristaImg}
        />
        <LocationFrame video={video1} descr="Как нас найти?" img={mapImg} />
      </div>
    </>
  );
}
