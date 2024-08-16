import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulesComponent from '../components/SchedulesComponent/Index';
import ArrowIcon from '../components/ArrowIcon/Index';

function Home(){

    return (
        <>
            <div className="container-fluid">
            <SchedulesComponent>
                <h1 style={{fontWeight: '700'}}>Agende sua primeira consulta grátis!</h1>
                <p>Escolha um horário e um de nossos especialistas irá entrar em contato.</p>
                <ArrowIcon/>
            </SchedulesComponent>
            </div>

        </>
    )
}

export default Home