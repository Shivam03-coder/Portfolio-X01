import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ContactIcon, MenuIcon } from "../../../constants";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setappDrawer } from "../../../app-state/slices/userSlice";
import { Drawerbar } from "../drawer/Drawerbar";
import useSmoothScroll from "../../../hooks/useSmoothScroll";

const Header = () => {
  const { appDrawer } = useSelector((state) => state.appstate);
  const dispatch = useDispatch();
  const scrollTo = useSmoothScroll();

  const handleDrawer = useCallback(() => {
    dispatch(setappDrawer(!appDrawer));
  }, [appDrawer]);

  return (
    <section className="min-h-[11vh] sticky top-0 z-50 bg-primary-800 w-full text-white px-5 flex justify-between items-center">
      <Typography variant="h4" className="font-Varela">
        <span className="text-customPink-600">Aishana</span> <span>Singh</span>
      </Typography>
      <IconButton onClick={handleDrawer} className="bg-transparent shadow-none">
        <MenuIcon className="text-customPink-500 size-6" />
        <Drawerbar />
      </IconButton>
      <Button
        onClick={() => scrollTo("#contacts")}
        className="!bg-primary-800 shadow-none border flex-center gap-3 p-2"
      >
        <span>
          <ContactIcon className="size-6" />
        </span>
        <span className="text-customPink-600 text-xs focus:outline-none">
          CONTACT ME
        </span>
      </Button>
    </section>
  );
};

export default Header;
