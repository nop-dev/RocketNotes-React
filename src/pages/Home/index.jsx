import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <ButtonText title="Todos" $isactive />
        <ButtonText title="Front-End"/>
        <ButtonText title="Node"/>
        <ButtonText title="React"/>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch } />
      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus />
          Criar Nota
      </NewNote>
    </Container>
  )
}