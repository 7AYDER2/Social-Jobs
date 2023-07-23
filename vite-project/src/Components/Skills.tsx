import { useState } from 'react';
import { Badge,Group,Text } from '@mantine/core'
import Skill from './Skill';
const skills = [
    "mood",
    "fire",
    "clody",
    "Ui&Ux",
    "Web Design",
    "Web Dev"
]
const Skills = ()=>{
  const [checked, setChecked] = useState(false);

    return(
        <>
         <Group mt={'lg'} style={{display:'flex',flexDirection:"column", justifyContent:"center" ,alignItems:"start"}}>
         <Text>Skills</Text>
         <Group style={{display:"flex",flexDirection:"row"}}>
         {skills.map((skill, index) => <Skill skill={skill}  key={index}/>)}
         <Badge color="gray" size="lg" style={{cursor:"pointer"}}>
           + Add More
            </Badge>
         </Group>
      
         </Group>
        </>
    )
}

export default Skills;
