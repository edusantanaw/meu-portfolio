import React from 'react'
import { Container, Item, List } from './tecnlogies.styles'
import { FaNodeJs } from 'react-icons/fa'
import { SiNestjs, SiTypescript, SiCss3, SiHtml5, SiStyledcomponents, SiReact, SiRedux, SiTailwindcss, SiJest, SiExpress, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si'

const Tecnologies = () => {
    return (
        <Container id="tec">
            <List>
                <Item color='#06951C'><FaNodeJs /> <span>NodeJs</span></Item>
                <Item color='#A70946'><SiNestjs /> <span>NestJs</span></Item>
                <Item color='#A70909'><SiJest /> <span>Jest</span> </Item>
                <Item color='#D6B300'><SiExpress /> <span>ExpressJs</span></Item>
                <Item color='#002ED6'><SiPostgresql /> <span>Postgres</span></Item>
                <Item color='#088229'><SiMongodb /><span>MongoDb</span></Item>
                <Item color='#092aa1'><SiReact /> <span>ReactJs</span></Item>
                <Item color="#08827E"><SiTailwindcss /> <span>Tailwindcss</span></Item>
                <Item color='#44053e'><SiRedux /> <span>Redux</span></Item>
                <Item color='#061e95'><SiTypescript /> <span>Typescript</span></Item>
                <Item color='#aa0c9a'><SiStyledcomponents /> <span>Styled components</span></Item>
                <Item color='#234bda'><SiCss3 /> <span>Css</span></Item>
                <Item color='#6f0303'><SiHtml5 /> <span>Html</span></Item>
                <Item color='#204fde'><SiDocker /> <span>Docker</span></Item>
            </List>
        </Container>
    )
}

export default Tecnologies