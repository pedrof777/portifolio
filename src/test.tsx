import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigoso = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal fontSize="18px">
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigoso as="a" principal={false}>
        <span>Não clique aqui</span>
      </BotaoPerigoso>
    </>
  )
}

export default Teste
