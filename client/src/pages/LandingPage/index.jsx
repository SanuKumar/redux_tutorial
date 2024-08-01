import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { incAction, decAction } from "../../actions/counterAction";
import useAxios from "../../hooks/useAxios";
import { StateFullComponent } from "../../components/stateFullComponent";

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

  const { response, error, loading, fetchData } = useAxios();

  const handleFetch = () => {
    fetchData({
      url: "/posts",
      method: "GET",
    });
  };

  const [stateComponentName, setStateComponentName] = useState("");

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

      <div>
        <h2>State Full Component</h2>
        <button onClick={() => setStateComponentName("New Name")}>
          Update name
        </button>
        <StateFullComponent defaultName={stateComponentName} />
      </div>
      <div>
        <button onClick={handleFetch}>Fetch Post</button>
      </div>
      <div>
        {error ? (
          <div>Error...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          response && (
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )
        )}
      </div>
    </>
  );
};

export default LandingPage;
