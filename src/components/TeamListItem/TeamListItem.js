import { TeamListLinks } from "./TeamListLinks"
export const TeamListItem =({avatar,name,profession, links})=>{
  return <> <img src={avatar} alt={name} width="150" />
  <h3>{name}</h3>
  <p>{profession}</p>
  <TeamListLinks links={links}/>
  </> 

}