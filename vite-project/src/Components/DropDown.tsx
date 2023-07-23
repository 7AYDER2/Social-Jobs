import { Menu, Button, Avatar } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { IconLogout2 } from '@tabler/icons-react';
import logo  from '../../public/assets/logo.png'

const DropDown = ()=> {
  return (
    <Menu shadow="md" width={200}  zIndex={3}>
      <Menu.Target>
      <Button color="gray" radius="xl" size="lg">
        <Avatar src={logo} alt="it's me" />
            7AYDER
            </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item color="red" icon={<IconLogout2 size={14} />}>Log out</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default DropDown;