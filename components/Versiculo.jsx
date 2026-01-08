import { TypeAnimation } from 'react-type-animation' 
const Versiculo = () => {
  return (
    <TypeAnimation
      sequence={[
        'Clama a mí, y yo te responderé...',
        2000,
        'Invócame en el día de la angustia...',
        2000,
        'No temas, porque yo estoy contigo...',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default Versiculo   // 👈 esto es lo que habilita el "default"
