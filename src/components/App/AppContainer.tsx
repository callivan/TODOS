import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../../store/rootTypes";
import { loaderHide } from "./animations/loaderHide";
import { AppComponent } from "./AppComponent";

export function App() {
  const loading = useSelector<InitialState, boolean>((state) => state.loading);
  const [appShow, setAppShow] = useState(false);

  useEffect(() => {
    if (!loading) {
      async function hideLoader() {
        await loaderHide();
        setAppShow(true);
      }

      hideLoader();
    }
  }, [loading]);

  return <AppComponent appShow={appShow} />;
}
