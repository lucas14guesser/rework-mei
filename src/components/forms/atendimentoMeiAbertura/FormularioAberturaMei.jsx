
import { Formulario } from "../../../styles/styles";
import RadioCheckBoxAberturaMei from "../../check/atendimentoMeiAbertura/RadioCheckboxAberturaMei";
import LabelAbertura from "../../label/atendimentoMeiAbertura/LabelAbertura";
import TextoBeneficios from "../../texto/atendimentoMeiAbertura/TextoBeneficios";



function FormularioAberturaMei() {
    return (
        <Formulario>
            <RadioCheckBoxAberturaMei />
            <TextoBeneficios />
            <LabelAbertura />
        </Formulario>
    )
} export default FormularioAberturaMei