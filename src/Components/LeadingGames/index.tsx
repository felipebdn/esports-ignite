import { CardGames } from "../Games";
import { ContainerGames, ContainerLanding } from "./styles";

export function LeadingGames() {
  return (
    <>
      <ContainerLanding>
        <h1>Seu<span>duo</span>está aqui.</h1>
      </ContainerLanding>
      <ContainerGames>
        <CardGames />
      </ContainerGames>
    </>
  )
}