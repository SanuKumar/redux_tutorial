import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { incAction, decAction } from "../../actions/counterAction";
import { StateFullComponent } from "../../components/stateFullComponent";
import LoginContext from "../../components/LoginContext";
import styles from "./landing.module.css";

const LandingPage = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, load } = useSelector((state) => state.counter);

  // const calculate = (counter) => {
  //   console.log("loop");
  //   for (let i = 0; i < 1000000; i++) {}
  //   return counter;
  // };

  // let memoNum = useMemo(() => {
  //   return calculate(counter);
  // }, [counter]);

  // useEffect(() => {
  //   persistor.pause();
  //   persistor.flush().then(() => {
  //     return persistor.purge();
  //   });
  // }, []);

  useLayoutEffect(() => {
    console.log("useLauoyt Effect");
  }, []);

  useEffect(() => {
    console.log("use Effect");
  }, []);

  useMemo(() => {
    console.log("Memo");
  }, []);

  window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  const log = document.querySelector(".event-log-contents");
  window.addEventListener("load", (event) => {
    // log.textContent += "load\n";
    console.log("load");
  });

  function doSomething() {
    console.info("DOM loaded");
  }

  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", doSomething);
  } else {
    // `DOMContentLoaded` has already fired
    doSomething();
  }

  const [stateComponentName, setStateComponentName] = useState("");

  return (
    <>
      <div style={{ color: "pink" }} className='class-color' id='id-color'>
        LandingPage
      </div>
      <div style={{ padding: "2px" }}>{t("Welcome to React")}</div>
      <h3 className={styles.divFontSize}>Counter</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {load ? (
          "Loading..."
        ) : (
          <>
            <div>
              <button onClick={() => dispatch(decAction)}>-</button>
            </div>
            {/* <div>{memoNum}</div> */}
            <div>{data}</div>
            <div>
              <button onClick={() => dispatch(incAction)}>+</button>
            </div>
          </>
        )}
      </div>
      <button onClick={() => setToggle(!toggle)}>Click Me</button>

      <div>
        <h2>State Full Component</h2>
        <button onClick={() => setStateComponentName("New Name")}>
          Update name
        </button>
        <StateFullComponent defaultName={stateComponentName} />
      </div>
      <LoginContext />
    </>
  );
};

export default LandingPage;
