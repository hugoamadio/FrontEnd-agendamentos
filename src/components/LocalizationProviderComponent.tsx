import { ReactNode } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('pt-br')

interface LocalizationProviderProps{
    children: ReactNode
}

function LocalizationProviderComponent({children}: LocalizationProviderProps){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    )

}

export default LocalizationProviderComponent