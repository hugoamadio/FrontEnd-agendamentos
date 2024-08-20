import { useEffect, useState } from "react";
import SchedulingDataType from "../types/SchedulingDataType";
import db from "../database/axios.instance";
import RenderCards from "../components/RenderCards/Index";

function Dashboard() {
  const [_schedules, setSchedules] = useState<SchedulingDataType[]>([]);

  useEffect(() => {
    async function seekSchedules() {
      try {
        const response = await db.get("/scheduling");
        const schedules = response.data.data;
        setSchedules(schedules);
      } catch (err) {
        alert("Ops, algo deu errado atualize a pagina!");
      }
    }
    seekSchedules();
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div
            className="col-12 container-fluid d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <h1>Proximos Agendamentos</h1>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column gap-3">
        <RenderCards/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
