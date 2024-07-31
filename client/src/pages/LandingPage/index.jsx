import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { incAction, decAction } from "../../actions/counterAction";

const LandingPage = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.counter);
  console.log(data, loading);
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

  return (
    <>
      <div>LandingPage</div>
      <div style={{ padding: "2px" }}>{t("Welcome to React")}</div>
      <h3>Counter</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button onClick={() => dispatch(decAction)}>-</button>
        </div>
        {/* <div>{memoNum}</div> */}
        <div>{data}</div>
        <div>
          <button onClick={() => dispatch(incAction)}>+</button>
        </div>
      </div>
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
    </>
  );
};

export default LandingPage;
