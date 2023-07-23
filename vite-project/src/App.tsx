import Cards from "./Components/Cards";
import { ColorSchemeProvider ,MantineProvider,ColorScheme, Paper} from "@mantine/core";
import LightAndDarkModeButton from "./Components/lightDarkButton";
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Button from "./Components/Buttons";
import AppShells from "./Components/AppShell";
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
      {/* <Paper padding="md" radius={0} style={{minHeight:"100vh"}}> */}
      {/* <Cards/> */}
      {/* <Button/> */}
      {/* </Paper> */}
     <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Paper>
         <AppShells/>
        </Paper>
      </MantineProvider>
     </ColorSchemeProvider> 
    </>
  );
};

export default App
