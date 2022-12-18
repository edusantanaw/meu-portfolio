import articles from '../assets/projects/artihos.webp'
import fylo from '../assets/projects/fylo.webp'
import { FaNodeJs } from 'react-icons/fa'
import { SiNestjs, SiTypescript, SiCss3, SiHtml5, SiStyledcomponents, SiReact, SiRedux, SiTailwindcss, SiJest, SiExpress, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si'
import port from '../assets/projects/portfolio.png'

export const projects = [
    {
        img: articles,
        name: 'Meus artigos',
        descriptions: `Projeto de criação de artigos, onde o usuario pode
        criar uma conta, criar artigos, e ver artigos de publicado por outros usuarios,
        este foi o meu primeiro projeto fullstack.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: FaNodeJs, color: '#06951C' },
            { icon: SiExpress, color: '#D6B300' },
            { icon: SiMongodb, color: '#088229' },
            { icon: SiCss3, color: '#234bda' }
        ],
        repo: 'https://github.com/edusantanaw/Sistema-de-cria-de-artigos'
    },
    {
        img: fylo,
        name: 'Fylo',
        descriptions: `Fylo landing page, um dos desafios do frontend mentor.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: SiStyledcomponents, color: '#aa0c9a' }
        ],
        repo: 'https://github.com/edusantanaw/fyo-lading-page'
    },
    {
        img: port,
        name: 'Antigo portfolio',
        descriptions: `Este projeto é o meu antigo projeto.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: SiTypescript, color: '#061e95' },
            { icon: SiStyledcomponents, color: '#aa0c9a' },
        ],
        repo: 'https://github.com/edusantanaw/Sistema-de-cria-de-artigos'
    },
]