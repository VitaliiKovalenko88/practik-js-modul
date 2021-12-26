export const TeamListLinks = ({ links:{instagram, twitter, facebook,linkedin} }) => {
  return <ul>
    <li><a href={instagram}>instagram</a></li>
    <li><a href={twitter}>twitter</a></li>
    <li><a href={facebook}>facebook</a></li>
    <li><a href={linkedin}>linkedin</a></li>
  </ul>
}