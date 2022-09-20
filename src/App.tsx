import { Fragment } from "react";
import { ContainerHeader } from "./Components/Header";
import { LeadingGames } from "./Components/LeadingGames";
import { ContainerBody } from "./styles/Container";
import { GlobalStyle } from "./styles/Global";


export function App() {

  return (
    <ContainerBody>
      <ContainerHeader />
      <LeadingGames />
      <GlobalStyle />
    </ContainerBody>
  )
}
