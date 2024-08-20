import React, { useEffect, useState } from "react";
import db from "../../database/axios.instance";
import SchedulingDataType from "../../types/SchedulingDataType";
import BoxComponent from "../BoxComponent/Index";

const RenderCards: React.FC = () => {
  const [schedules, setSchedules] = useState<SchedulingDataType[] | []>([]);
  const [reRender, setReRender] = useState<boolean>(false);

  function formatDateTime(datestring: string) {
    const date = new Date(datestring);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  useEffect(() => {
    async function getSchedules() {
      try {
        const response = await db.get("/scheduling");
        const orderSchedules = response.data.data
        .map((item: SchedulingDataType) => ({
          ...item,
          past: new Date(item.datatime) < new Date()
        }))
        .sort((a: SchedulingDataType, b: SchedulingDataType) => {
          if (a.past && !b.past) return 1; // Itens passados vão para o final
          if (!a.past && b.past) return -1; // Itens futuros ficam no topo
          return new Date(a.datatime).getTime() - new Date(b.datatime).getTime(); // Ordena por data e hora
        });
        setSchedules(orderSchedules);
        setReRender(!reRender);
      } catch (err) {
        alert("Ops, algo deu errado, atualize a pagina");
      }
    }
    getSchedules();
  }, []);

  return (
    <>
      {schedules.map((item, index) => (
        <BoxComponent
          key={index}
          email={item.email}
          id={item.id}
          phone={item.phone}
          datatime={formatDateTime(item.datatime)}
          past={item.past}
        />
      ))}
    </>
  );
};

export default RenderCards;
