import RadioCheckBoxAberturaMei from "../check/RadioCheckboxAberturaMei";
import TextoBeneficios from "../texto/TextoBeneficios";
import LabelAbertura from '../label/LabelAbertura';
import { Formulario } from "../../styles/styles";



function FormularioAberturaMei() {
    return (
        <Formulario>
            <RadioCheckBoxAberturaMei />
            <TextoBeneficios />
            <LabelAbertura />
        </Formulario>
    )
} export default FormularioAberturaMei