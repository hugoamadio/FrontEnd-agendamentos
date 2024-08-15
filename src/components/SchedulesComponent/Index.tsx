import { ReactNode, useState } from "react";
import { FirstBlockStyled, SecondBlockStyled } from "./Styled";
import { DatePicker, TimePicker, TimeView } from "@mui/x-date-pickers";
import { Button, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import db from "../../database/axios.instance";

interface SchedulesComponentProps {
  children: ReactNode;
}

function SchedulesComponent({ children }: SchedulesComponentProps) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null)
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const minDate = dayjs().add(1, "day");

  // Function para desabilitar horas especificas
  const shouldDisableTime = (value: Dayjs, view: TimeView) => {
    if (view === "hours") {
      const hour = value.hour();
      return hour < 8 || hour >= 17;
    }
    return false;
  };

  async function handleClick() {
    if (date && time) {
      const datatime = date.set('hour', time.hour()).set('minute', time.minute());

      const response = await db.post('/scheduling', {
        email: "dsa@hotmail.com",
        phone: "19989067843",
        datatime
        })

      console.log(response)
      
      if(response.data.success){
        alert(response.data.success)
      } else {
        alert(response.data.success)
      }

    } else {
      //Lógica para caso não tenha data ou time
    }
  }

  return (
    <div className="row" style={{maxWidth: '100vw'}}>
      <FirstBlockStyled className="col-12 col-sm-8">
        {children}
      </FirstBlockStyled>
      <SecondBlockStyled className="col-12 col-sm-4">
        
        <TextField id="outlined-basic" label="E-mail" variant="outlined" size="small" style={{width: "260px"}}/>

        <TextField id="outlined-basic" label="Phone" variant="outlined" size="small" style={{width: "260px"}}/>

        <DatePicker
          label="Escolha uma data"
          minDate={minDate}
          format="DD/MM/YYYY"
          value={date}
          onChange={(date) => setDate(date)}
        />

        <TimePicker
          label="Escolha um Horário"
          ampm={false}
          shouldDisableTime={shouldDisableTime} // function para desabilitar horas especificas
          value={time}
          onChange={(time) => setTime(time)}
        />

        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={handleClick}
        >
          Agendar
        </Button>
      </SecondBlockStyled>
    </div>
  );
}

export default SchedulesComponent;
