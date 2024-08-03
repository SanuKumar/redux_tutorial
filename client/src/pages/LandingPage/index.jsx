import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { incAction, decAction } from "../../actions/counterAction";
import { StateFullComponent } from "../../components/stateFullComponent";
import FetchPost from "../../components/FetchPost";
import LoginContext from "../../components/LoginContext";

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

  const [stateComponentName, setStateComponentName] = useState("");

  return (
    <>
      <div>LandingPage</div>
      <div style={{ padding: "2px" }}>{t("Welcome to React")}</div>
      <h3>Counter</h3>
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
      <br />
      <FetchPost />
    </>
  );
};

export default LandingPage;
