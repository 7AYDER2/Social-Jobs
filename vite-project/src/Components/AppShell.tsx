import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Chip,
  Select,
  Group
} from '@mantine/core';

import logo  from '../../public/assets/logo.png'
import Profiles from './Profile';
import LightAndDarkModeButton from './lightDarkButton';
import TableFun from './TableExample';
import Skills from './Skills';

 const  AppShells = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
      <AppShell
          styles={{
            main: {
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
        <Navbar zIndex={2} p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 370 }}>
           {/* style={{backgroundColor:"gray"}} */}
           <Navbar.Section grow mt="lg" >
           <Profiles/>
           <Skills />
           </Navbar.Section>
          <Navbar.Section>
          <Button color='yellow'  radius="lg">
      Log out
    </Button>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent:"space-between" ,alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
             <Group>
             <img src={logo} alt="" width={"50px"} height={"50px"} />
             <Select
              zIndex={3}
              placeholder="# Explore"
              searchable
              nothingFound="No options"
              radius={'2rem'}
              data={['ali', 'ahmed', 'hamed', 'mohammed']}
            />
             </Group>
            {/* <Select
              label="Your favorite framework/library"
              placeholder="Pick one"
              searchable
              onSearchChange={onSearchChange}
              searchValue={searchValue}
              nothingFound="No options"
              data={['React', 'Angular', 'Svelte', 'Vue']}
            /> */}
            
            <LightAndDarkModeButton/>
          </div>
        </Header>
      }
    >
      {/* <TableFun/> */}
    
    </AppShell>
  );
}
export default AppShells