import { ReactNode, useState } from "react";
import { FirstBlockStyled, SecondBlockStyled } from "./Styled";
import { DatePicker, TimePicker, TimeView } from "@mui/x-date-pickers";
import { Button, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import db from "../../database/axios.instance";
import OverleyDefault from "../OverleyDefault/Index";
import ModalDefault from "../ModalDefault/Index";

interface SchedulesComponentProps {
  children: ReactNode;
}

function SchedulesComponent({ children }: SchedulesComponentProps) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const minDate = dayjs().add(1, "day");
  const [overley, setOverley] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string>("");
  const [modalBackground, setModalBackground] = useState<string>("");

  
  async function handleClick() {
    if (date && time) {
      const datatime = date
      .set("hour", time.hour())
      .set("minute", time.minute());
      
      try {
        const response = await db.post("/scheduling", {
          email,
          phone,
          datatime,
        });
        
        if (Boolean(response.data.success)) {
          setEmail("");
          setPhone("");
          setDate(null)
          setTime(null)
          setModalTitle("Consulta Agendada!");
          setModalContent(
            "Sua consulta foi agendada! Um de nossos especialistas entrará em contato pelo WhatsApp!"
          );
          setModalBackground("#73c8a9");
        }
      } catch (error) {
        setModalTitle("Ops, algo deu errado.");
        setModalContent(
          "Ocorreu um erro ao tentar agendar sua consulta. Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp (19)97883-4390"
        );
        setModalBackground("#ff9595")
      } finally {
        setOverley(true);
      }
    } else {
      setModalTitle("Ops, algo deu errado.")
      setModalContent("Você deve escolher uma data")
      setModalBackground("#ff9595")
      setOverley(true)
    }
  }
  
  // Function para desabilitar horas especificas
  const shouldDisableTime = (value: Dayjs, view: TimeView) => {
    if (view === "hours") {
      const hour = value.hour();
      return hour < 8 || hour >= 17;
    }
    return false;
  };



  return (
    <div className="row" style={{ maxWidth: "100vw" }}>
      <FirstBlockStyled className="col-12 col-sm-8">
        {children}
      </FirstBlockStyled>
      <SecondBlockStyled className="col-12 col-sm-4">
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          size="small"
          style={{ width: "260px" }}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          size="small"
          style={{ width: "260px" }}
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          required
        />

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

      {overley && (
        <OverleyDefault>
          <ModalDefault
            modalBackground={modalBackground}
            modalTitle={modalTitle}
            modalContent={modalContent}
            closeModal={() => setOverley(!overley)}
          />
        </OverleyDefault>
      )}
    </div>
  );
}

export default SchedulesComponent;
