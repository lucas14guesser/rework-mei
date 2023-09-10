import { GlobalLabel } from "../../styles/styles"
import { Beneficio } from "../layout/Input"
import BeneficioPrevidenciario from "./BeneficioPrevidenciario"
import Estadual from "./Estadual"
import Federal from "./Federal"
import Munucipal from "./Municipal"
import SeguroDesemprego from "./SeguroDesemprego"

function RadioCheckBoxAberturaMei() {
    return (
        <>
            <GlobalLabel>É servidor público federal</GlobalLabel>
            <Federal />
            <GlobalLabel>É servidor público municipal</GlobalLabel>
            <Munucipal />
            <GlobalLabel>É servidor público estadual</GlobalLabel>
            <Estadual />
            <GlobalLabel>Está recebendo seguro desemprego</GlobalLabel>
            <SeguroDesemprego />
            <GlobalLabel>Recebe algum benefício previdenciário</GlobalLabel>
            <BeneficioPrevidenciario />
            <Beneficio />
        </>
    )
} export default RadioCheckBoxAberturaMei