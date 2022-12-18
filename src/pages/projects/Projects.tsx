import { useEffect, useState } from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { CardList, Container } from './projects.styles'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { projects } from '../../utils/project'

const Projects = () => {

    const [current, setCurrent] = useState<number>(0)
    const [atual, setActual] = useState(projects[current])

    useEffect(() => {
        setActual(projects[current])
    }, [current])

    function next() {
        current >= projects.length - 1 ?
            setCurrent(0) : setCurrent(current => current + 1)
    }

    function prev() {
        current <= 0 ? setCurrent(projects.length - 1)
            : setCurrent(current => current - 1)
    }

    function indexCurrent(index: number) {
        setCurrent(index)
    }


    return (
        <Container id='project'>
            <SecondaryTitle>Meus projetos</SecondaryTitle>
            <CardList className='myCard'>
                <div className='content'>
                    <div className='image'>
                        <GrPrevious id='prev' onClick={prev} />
                        <img src={atual.img} alt="artcle" />
                        <GrNext id='next' onClick={next} />
                    </div>
                    <div className='actual'>
                        {Array(projects.length).fill(0).map((a, i) => (
                            <span key={i} id={i === current ? "ac" : ''} onClick={() => indexCurrent(i)} />
                        ))}
                    </div>
                </div>
                <div className='infos'>
                    <h4>{atual.name}</h4>
                    <p>{atual.descriptions}</p>
                    <span>Tecnlogias utilizadas:</span>
                    <div className='icons'>
                        {atual.tecnolgies.map((tec) => {
                            const Icons = tec.icon
                            return <Icons color={tec.color} />
                        })}
                    </div>
                    <div className='links'>
                        <a id="see" href={atual.repo}>Ver projeto</a>
                        <a id="repo" href={atual.repo}>Repositorio</a>
                    </div>
                </div>
            </CardList>
        </Container>
    )
}

export default Projects