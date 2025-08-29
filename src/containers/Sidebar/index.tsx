import Avatar from '../../componets/Avatar'
import Paragrafo from '../../componets/Paragrafo'
import Titulo from '../../componets/Titulo'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Pedro Ferreira</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        pedrof777
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro back-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
