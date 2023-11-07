import Loading from "../../components/Loading/Loading.jsx";
import RoutinesList from "../RoutinesList/RoutinesList.jsx";
import { useGetWorkoutsQuery } from "../../store/services/myRoutinesApi.js";

const DefRoutinesLoader = ({ navigation }) => {
  const { data: defRoutines, isLoading } = useGetWorkoutsQuery();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RoutinesList routines={defRoutines} navigation={navigation} />
      )}
    </>
  );
};
export default DefRoutinesLoader;
