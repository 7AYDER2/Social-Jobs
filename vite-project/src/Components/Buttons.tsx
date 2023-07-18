import { Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

const Buttons = () => {
    const [loading , setLoading] = useState(false);

    const handleClick = ()=>{
        setLoading(true)
    }
  return (
    <>
      <Button leftIcon={<IconSun/>} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
      <Button loading={true} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
      <Button loading={loading} onClick={handleClick} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
      <Button rightIcon={<IconMoonStars/>} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
      {/* redirecrt */}
      <Button component='a' href='https://www.hayder. net'  variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
      <Button styles={(theme)=>({
        root:{
            border:0,
            height:500,
            paddingRight:69,
            fontFamily:'monospace',
            '&:hover':{
                paddingLeft:100
            }
        }
      })}>styles</Button>
    </>
  )
}

export default Buttons;