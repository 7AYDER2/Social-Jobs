import Cards from "./Components/Cards";
import { ColorSchemeProvider ,MantineProvider,ColorScheme, Paper} from "@mantine/core";
import LightAndDarkModeButton from "./Components/lightDarkButton";
import { useHotkeys, useLocalStorage } from '@mantine/hooks';


const App: React.FC = () => {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
     <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
      
      <Paper padding="md" radius={0} style={{minHeight:"100vh"}}>

       <Cards/>
       <LightAndDarkModeButton/>
      
      </Paper>
     
      </MantineProvider>
     </ColorSchemeProvider> 
    </>
  );
};

export default App
