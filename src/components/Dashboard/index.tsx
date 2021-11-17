import { Summary } from "../Summary";
import { TransactionsTables } from "../TransactionsTables";

import { Container } from "./styles";

export function Dasgboard () {
  return (
    <Container>
      <Summary/>
      <TransactionsTables/>
    </Container>
  )
}