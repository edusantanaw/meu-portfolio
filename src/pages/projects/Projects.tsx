import React from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { CardList, Container } from './projects.styles'
import articles from '../../assets/projects/artihos.webp'

const Projects = () => {
    return (
        <Container>
            <SecondaryTitle>Projetos</SecondaryTitle>
            <CardList className='myCard'>
                <div className='image'>
                    <img src={articles} alt="artcle" />
                </div>
            </CardList>
        </Container>
    )
}

export default Projects