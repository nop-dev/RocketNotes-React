import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="#">Voltar</a>
                    </header>
                    
                    <Input 
                        placeholder="Título"
                        type="text"
                    />

                    <Textarea placeholder="Observações" />

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}