import { TeamListItem } from '../TeamListItem/TeamListItem'

 const TeamList =({teamList})=>{
  return <ul>{teamList.map(({avatar, name, profession,links})=>{
    return <li key={name}>
      <TeamListItem
    avatar={avatar}
    name={name}
    profession={profession}
    links={links}
   />
   </li>
  })}</ul>
}
export default TeamList