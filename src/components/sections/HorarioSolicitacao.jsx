import { GlobalLabel, Horario, RadioCheckbox } from "../../styles/styles"
import { Data, Hora, Hora2, RadioSolicitacao } from "../layout/Input"

function HorarioSolicitacao() {
    return (
        <Horario>
            <GlobalLabel>Data</GlobalLabel>
            <Data />
            <RadioCheckbox>
                <RadioSolicitacao />
            </RadioCheckbox>
            <GlobalLabel>Hora</GlobalLabel>
            <Hora />
            <GlobalLabel>Às</GlobalLabel>
            <Hora2 />
        </Horario>
    )
} export default HorarioSolicitacao