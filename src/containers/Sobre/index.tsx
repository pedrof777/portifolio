import Paragrafo from '../../componets/Paragrafo'
import Titulo from '../../componets/Titulo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi
      cupiditate, illum culpa fugiat doloribus similique fugit delectus
      explicabo labore. Minima cum nihil nemo accusamus repudiandae officia ut
      sequi quidem?
    </Paragrafo>
    <GitHubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=pedrof777&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedrof777&layout=compact&langs_count=7&theme=dracula"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
