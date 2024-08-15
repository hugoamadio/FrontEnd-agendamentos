import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulesComponent from '../components/SchedulesComponent/Index';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


function Home(){

    return (
        <>
            <SchedulesComponent>
                <h1 style={{fontWeight: '700'}}>Agende sua primeira consulta grátis!</h1>
                <p>Escolha um horário e um de nossos especialistas irá entrar em contato.</p>
                <TrendingFlatIcon fontSize='large'/>
            </SchedulesComponent>

        </>
    )
}

export default Home