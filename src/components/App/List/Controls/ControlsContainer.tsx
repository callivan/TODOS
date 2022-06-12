import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../../../../store/delete/actions";
import { getRequest } from "../../../../store/get/actions";
import { GetActionsType } from "../../../../store/get/types";
import { InitialState } from "../../../../store/rootTypes";
import { showControls } from "./animations/show";
import { ControlsComponent } from "./ControlsComponent";

export function Controls() {
  const dispatch =
    useDispatch<ThunkDispatch<InitialState, any, GetActionsType>>();
  const [filter, setFilter] = useState<HTMLButtonElement | null>(null);

  function HandleClickFilter(
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) {
    const target = e.target;
    const childrens = e.currentTarget.querySelectorAll(".controls__btn");
    childrens.forEach((btn) => btn.classList.remove("active"));

    if (!(target instanceof HTMLButtonElement)) return;

    if (target.dataset.all) {
      dispatch(getRequest("http://localhost:3001/todos"));
      setFilter(target);
    }

    if (target.dataset.active) {
      dispatch(getRequest("http://localhost:3001/todos?done=false"));
      setFilter(target);
    }

    if (target.dataset.completed) {
      dispatch(getRequest("http://localhost:3001/todos?done=true"));
      setFilter(target);
    }

    if (target.dataset.clear) {
      dispatch(deleteRequest());
    }
  }

  useEffect(() => {
    if (!filter) return;
    filter.classList.add("active");
  }, [filter]);

  useEffect(() => {
    showControls();
  }, []);

  return (
    <ul className={"controls"} onClick={(e) => HandleClickFilter(e)}>
      <ControlsComponent />
    </ul>
  );
}
