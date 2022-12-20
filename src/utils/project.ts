import articles from '../assets/projects/artihos.webp'
import fylo from '../assets/projects/fylo.webp'
import { FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiFigma, SiCss3, SiSocketdotio, SiHtml5, SiStyledcomponents, SiReact, SiRedux, SiTailwindcss, SiJest, SiExpress, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si'
import port from '../assets/projects/portfolio.png'
import rede from '../assets/projects/rd.png'
import food from '../assets/projects/food.png'

export const projects = [
    {
        img: rede,
        name: 'Rede social',
        descriptions: `Uma rede social no qual permite que o usuario possa criar posts,
         fazer comentararios, curtir, seguir e ser seguido por outros usuarios, enviar mensagems privadas.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: SiTypescript, color: '#061e95' },
            { icon: SiStyledcomponents, color: '#aa0c9a' },
            { icon: SiSocketdotio, color: '#aa0c9a' },
            { icon: SiPostgresql, color: '#002ED6' },
            { icon: FaNodeJs, color: '#06951C' },
            { icon: SiExpress, color: '#D6B300' },
            { icon: SiRedux, color: '#44053e' },
        ],
        see: '',
        repo: 'https://github.com/edusantanaw/Sistema-de-cria-de-artigos'
    },
    {
        img: food,
        name: 'Food delivery',
        descriptions: `Sistema de pedido de entrega de comida, 
        no qual o usuario pode adicionar produtos no carinho e finalizar o pedido.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: SiTypescript, color: '#061e95' },
            { icon: SiTailwindcss, color: '#aa0c9a' },
            { icon: SiPostgresql, color: '#002ED6' },
            { icon: FaNodeJs, color: '#06951C' },
            { icon: SiExpress, color: '#D6B300' },
            { icon: SiRedux, color: '#44053e' },
            { icon: SiFigma, color: '#A70946' },
        ],
        see: '',
        repo: 'https://github.com/edusantanaw/Sistema-de-cria-de-artigos'
    },
    {
        img: port,
        name: 'Antigo portfolio',
        descriptions: `Meu antigo portfolio desenvolvido em react.`,
        tecnolgies: [
            { icon: SiReact, color: '#092aa1' },
            { icon: SiStyledcomponents, color: '#aa0c9a' },
            { icon: SiTypescript, color: '#061e95' },
        ],
        see: 'antigoporteduardo.netlify.app',
        repo: 'https://github.com/edusantanaw/Sistema-de-cria-de-artigos'
    },
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
        see: '',
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
        see: 'https://fylo-edusantanaw.netlify.app/',
        repo: 'https://github.com/edusantanaw/fyo-lading-page'
    },

]