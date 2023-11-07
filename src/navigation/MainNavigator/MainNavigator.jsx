import { fetchSession } from "../../db/index.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading.jsx";
import TabNavigator from "../TabNavigator/TabNavigator.jsx";
import { loginUser } from "../../store/features/authSlice.js";
import UserLoader from "./components/userLoader/userLoader.js";
import AuthStackNavigator from "../AuthStackNavigator/AuthStackNavigator.jsx";

const MainNavigator = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session.rows.length) {
          const user = session.rows._array[0];
          dispatch(loginUser(user));
        }
        setIsLoading(false);
      } catch (err) {
        console.log("Error: ", err);
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <Loading />
  ) : user ? (
    <>
      <UserLoader />
      <TabNavigator />
    </>
  ) : (
    <AuthStackNavigator />
  );
};
export default MainNavigator;
