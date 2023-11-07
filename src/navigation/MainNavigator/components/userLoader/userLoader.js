import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../store/features/userSlice.js";
import { addRoutine } from "../../../../store/features/myRoutinesSlice.js";
import { useGetUserDataQuery } from "../../../../store/services/userApi.js";
import { setTraining } from "../../../../store/features/currentTrainingSlice.js";
import { useGetUserRoutinesQuery } from "../../../../store/services/myRoutinesApi.js";
import { useGetCurrentTrainingQuery } from "../../../../store/services/currentTrainingApi.js";
const UserLoader = () => {
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth);
  const { data: userData, refetch: refetchUser } = useGetUserDataQuery(localId);
  const { data: routinesData, refetch: refetchRoutines } =
    useGetUserRoutinesQuery(localId);
  const { data: currentTraining, refetch: refetchCurrentTraining } =
    useGetCurrentTrainingQuery(localId);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);
  useEffect(() => {
    refetchRoutines();
  }, [refetchRoutines]);
  useEffect(() => {
    refetchCurrentTraining();
  }, [refetchCurrentTraining]);

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [userData]);

  useEffect(() => {
    if (routinesData) {
      const routinesArray = Object.values(routinesData).map((routineObj) => {
        const key = Object.keys(routineObj)[0];
        return routineObj[key];
      });
      routinesArray.forEach((routine) => {
        dispatch(addRoutine(routine));
      });
    }
  });
  useEffect(() => {
    if (currentTraining) {
      dispatch(setTraining(currentTraining));
    }
  });
  return null;
};
export default UserLoader;
