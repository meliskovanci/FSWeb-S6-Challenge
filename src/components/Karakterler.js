import React from "react";
import Karakter from "./Karakter"

const Karakterler = ({ chars }) => {
  return (
    <>
      {chars && chars
        ? chars.map((e, index) => <Karakter char={e} key={index} />)
        : console.log("yükleniyor")}
    </>
  );
};

export default Karakterler;