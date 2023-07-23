import { Card, Image, Text, Badge, Button, Group,Paper } from '@mantine/core';
import { Avatar } from '@mantine/core';




function Profile() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{position:'relative'}} >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
         <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
         <Text size="sm" color="white">
          1984
        </Text>
        <Text size="sm" color="white">
          Followers
        </Text>   
            </div>    
         <Avatar radius="xl" size="xl" style={{position:'absolute', left:'37%', top:'7.5rem'}}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
       <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
         <Text size="sm" color="white">
          1984
        </Text>
        <Text size="sm" color="white">
          Followers
        </Text>   
            </div>   
      </Group>
      <div style={{display:'flex', flexDirection: 'column', alignItems:'center',marginTop:'1rem',marginBottom:'1rem'}}>
    
        <Text size="lg" color="white">
          HAYDER MOHAMMED
        </Text>
     
        <Text size="sm" color="white">
          @7AYDER.2
        </Text>
      </div>
      <Text size="sm" color="white" style={{textAlign:'center'}}>
      ⭐ Hello , I'm UX/UI designer. Open to the new projects. ⭐
      </Text>
      <hr style={{ borderColor:'gray'}}/>
      <Button color="gray"  size="md" fullWidth radius="md">
      My Profile
      </Button>
    </Card>
  );
}

export default Profile