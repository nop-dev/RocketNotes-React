import { Container } from "./styles"
import { Button } from "../../components/Button"

export function Details() {

  return(
        <Container>
            <h1>Hello World!</h1>
            <span>teste</span>
            <Button title="Olá" loading />
            <Button title="td bem?" loading />
            <Button title="Sim?" />
        </Container>    
  )
}