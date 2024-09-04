import React, { useCallback } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setappDrawer } from "../../../app-state/slices/userSlice";
import { CloseIcon } from "../../../constants";
import Navigations from "./Navigations";

export function Drawerbar() {
  const { appDrawer } = useSelector((state) => state.appstate);
  const dispatch = useDispatch();

  const handleCloseDrawer = useCallback(() => {
    dispatch(setappDrawer(!appDrawer));
  }, [appDrawer]);

  return createPortal(
    <Drawer
      placement="top"
      open={appDrawer}
      className="p-4 !bg-black text-white overflow-y-auto"
      onClose={handleCloseDrawer}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h4" className="font-Varela">
          <span className="text-customPink-600">Aishana</span> <span>Singh</span>
        </Typography>
        <IconButton variant="text">
          <CloseIcon className="size-10 text-customPink-600" />
        </IconButton>
      </div>
      <Navigations />
    </Drawer>,
    document.getElementById("drawer-root")
  );
}
