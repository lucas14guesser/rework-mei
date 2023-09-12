import React from 'react'
import AssPdfAbertura from '../../sections/atendimentoMeiAbertura/AssPdfAbertura'
import RadioCheckBoxAberturaMei from '../../check/atendimentoMeiAbertura/RadioCheckboxAberturaMei'
import TextoBeneficios from '../../texto/atendimentoMeiAbertura/TextoBeneficios'

const LabelAbertura = () => {
  return (
    <>
      <RadioCheckBoxAberturaMei />
      <TextoBeneficios />
      <AssPdfAbertura />
    </>
  )
}

export default LabelAbertura