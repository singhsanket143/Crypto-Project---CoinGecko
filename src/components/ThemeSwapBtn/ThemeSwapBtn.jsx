import React, { useEffect, useState } from "react";

function ThemeSwapBtn() {


    let [checked, setChecked] = useState(false);
    // let [theme, setTheme] = useState(localStorage.getItem("theme") || "forest");
    useEffect(() => {
      const htmlEle = document.getElementsByTagName("html");
        if (checked){
          htmlEle[0].setAttribute("data-theme", "light");
        }
        else{
          htmlEle[0].setAttribute("data-theme", "forest");
        }
    }, [checked])

  return (
    <label className="swap swap-flip text-2xl btn btn-ghost btn-circle">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={(e) => setChecked(e.target.checked)}/>

      <div className="swap-on">☀️</div>
      <div className="swap-off">🌙</div>
    </label>
  );
}

export default ThemeSwapBtn;
