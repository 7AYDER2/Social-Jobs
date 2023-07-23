import { Badge, Group } from '@mantine/core'

const Skill = ({skill})=>{

    return(
        <>
            <Group >    
                <Badge color="gray" size="lg" variant="dot">
                <h3>{skill}</h3>
                </Badge>  
            </Group>     
        </>
    )
}

export default Skill;

