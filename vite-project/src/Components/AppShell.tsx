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
  Chip
} from '@mantine/core';

import Profiles from './Profile';
import LightAndDarkModeButton from './lightDarkButton';
import TableFun from './TableExample';

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
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 370 }}>
           {/* style={{backgroundColor:"gray"}} */}
           <Navbar.Section grow mt="lg" >
           <Profiles/>
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

            <Text>Application header</Text>
            <Chip defaultChecked variant="light" size="xl">Awesome chip</Chip>
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