import { Container, Links } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";

export function Details() {

  return(
        <Container>
            <Header />

            <Section title="Links Úteis">
              <Links>
                  <li><a href="#">https://www.rocketseat.com.br/</a></li>
                  <li><a href="#">https://www.rocketseat.com.br/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="nodejs"/>
            </Section>
            
            <Button title="Voltar" />
        </Container>    
  );
};