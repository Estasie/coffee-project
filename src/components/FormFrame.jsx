import React, { useRef, useState } from "react";
import backButton from "../content/imgs/back.svg";
import coffeeCup from "../content/imgs/code_cup.svg";
import cookieIcon from "../content/imgs/cookie_button.svg";
import db from "../services/firebase.js";
import "./FormFrame.scss";

export default function FormFrame({ video, descr, img }) {
  const ref = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [nameInputValid, setNameInputValid] = useState(null);
  const [emailInputValid, setEmailInputValid] = useState(null);
  const [phoneInputValid, setPhoneInputValid] = useState(null);

  const fieldValidation = function (validState) {
    let value = "";
    if (validState !== null) {
      value = validState ? "_valid" : "_error";
    }
    return value;
  };
  return (
    <>
      <div
        className={`container__block ${hidden ? "" : "hidden"}`}
        id="emploers"
        onClick={() => setHidden(false)}
      >
        <video className="video2 videoPlay" id="v2" muted ref={ref} loop>
          <source src={video} />
        </video>
        <div
          className="block__descr_container"
          onMouseEnter={() => ref !== null && ref.current.play()}
          onMouseLeave={() => ref !== null && ref.current.pause()}
        >
          <div className="block_descr v2">
            <img src={img} alt="cup" className="block_img" />
            <p className="block__header">{descr}</p>
            <p className="block__text">
              Заполни форму, и мы с нетерпением будем ждать тебя на
              собеседовании
            </p>
          </div>
        </div>
      </div>

      <div
        className={`container__block ${hidden ? "hidden" : ""}`}
        id="emploersForm"
      >
        <div className="form">
          <img
            className="form__back"
            alt="back"
            src={backButton}
            onClick={() => {
              setHidden(true);
            }}
          />
          <form
            action="#"
            className="form__body"
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p className="form__header">Как нам с вами связаться?</p>
            <p className="form__subheader">
              Здесь Вы не увидите графы "О себе". Мы будем рады услышать о Вас
              лично :)
            </p>
            <div className="form__item">
              <label htmlFor="formName" className="form__label">
                Имя*:
              </label>
              <input
                type="text"
                name="name"
                className={`form__input _req, ${fieldValidation(
                  nameInputValid
                )}`}
                id="formName"
                autoComplete="off"
                value={nameInput}
                onChange={(e) => {
                  setNameInput(e.target.value);
                  if (e.target.value !== "" && e.target.value.length < 3) {
                    setNameInputValid(false);
                  } else if (e.target.value === "") {
                    setNameInputValid(null);
                  } else {
                    setNameInputValid(true);
                  }
                }}
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="formEmail" className="form__label ">
                E-mail*:
              </label>
              <input
                type="text"
                name="email"
                className={`form__input _req _email ${fieldValidation(
                  emailInputValid
                )}`}
                id="formEmail"
                autoComplete="off"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                  if (e.target.value !== "" && e.target.value.includes("@")) {
                    setEmailInputValid(true);
                  } else if (e.target.value === "") {
                    setEmailInputValid(null);
                  } else {
                    setEmailInputValid(false);
                  }
                }}
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="formTel" className="form__label">
                Телефон*:
              </label>
              <input
                type="tel"
                name="tel"
                className={`form__input _req ${fieldValidation(
                  phoneInputValid
                )}`}
                id="formTel"
                autoComplete="off"
                value={phoneInput}
                onChange={(e) => {
                  setPhoneInput(e.target.value);
                  if (e.target.value.length === 11) {
                    setPhoneInputValid(true);
                  } else if (e.target.value === "") {
                    setPhoneInputValid(null);
                  } else {
                    setPhoneInputValid(false);
                  }
                }}
              ></input>
            </div>

            <div className="form__item">
              <div className="checkbox">
                <input
                  type="checkbox"
                  defaultChecked
                  name="agreement"
                  className="checkbox__input _req"
                  id="formAgreement"
                ></input>
                <label htmlFor="formAgreement" className="checkbox__label">
                  <span>
                    Я даю своё согласие на обработку персональных данных в
                    соответствии с <a href="#">Условиями</a>*.
                  </span>
                </label>
              </div>
            </div>
            <div className="form__button_container">
              <button
                type="submit"
                id="submit"
                className="form__button"
                id="cookieButton"
                disabled={
                  !nameInputValid || !emailInputValid || !phoneInputValid
                }
                onClick={async (e) => {
                  await db.collection("applications").add({
                    name: nameInput,
                    email: emailInput,
                    phone: phoneInput,
                  });
                  setNameInput("");
                  setEmailInput("");
                  setPhoneInput("");
                }}
              >
                <span>Отправить</span>
              </button>

              <span className="fb_1">
                <img src={coffeeCup} alt="cup" />{" "}
              </span>
              <span className="fb_2">
                <img src={cookieIcon} alt="cookie" className="cookie" />{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
