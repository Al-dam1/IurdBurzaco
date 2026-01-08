import { TypeAnimation } from 'react-type-animation' 
const Versiculo = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-purple-900 px-4 text-center'>
    <TypeAnimation
      sequence={[
        'Clama a mí, y yo te responderé... Jeremias 33:3',
        2000,
        'Invócame en el día de la angustia; Te librare, y tu me honraras... Salmos 50:15',
        2000,
        'No temas, porque yo estoy contigo... Isaias 41:10',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Versiculo   // 👈 esto es lo que habilita el "default"
