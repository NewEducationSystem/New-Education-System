import "./Header.css"

import { FaWheelchair } from "react-icons/fa"
import { TbLetterA } from "react-icons/tb"
import { BiPlus, BiMinus, BiSearch } from "react-icons/bi"
import { RiUserAddLine, RiUserSearchLine } from "react-icons/ri"
import { AiOutlinePlusCircle, AiFillCloseCircle } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { IoIosMenu } from "react-icons/io"

export default function Header({ type }) {
    return (
        <header>
            <div className="accessibility">
                <a href="#" className="accessibility-link" title="Acessibilidade">
                    <FaWheelchair className="accessibility-icon" />
                </a>
                <a href="#" id="change-contrast" title="Modo Constraste">
                    <button className="contrast" role="switch" aria-checked="false" onClick={contrastTheme}>
                    </button>
                </a>
                <a href="#" className="accessibility-link" id="increase" title="Aumentar Fonte">
                    <TbLetterA className="accessibility-icon" />
                    <sup>
                        <BiPlus />
                    </sup>
                </a>
                <a href="#" className="accessibility-link" id="decrease" title="Dimunuir Fonte">
                    <TbLetterA className="accessibility-icon" />
                    <sup>
                        <BiMinus />
                    </sup>
                </a>
            </div>
            <nav className="nav">
                <img className="nav-logo" title="New Education System" />

                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        {type === "aluno" ? (
                            <>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <CgProfile className="link-icon" />
                                        <span className="link-text">Matrícula</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Consultas">
                                        <i className="bi bi-search link-icon"></i>
                                        <span className="link-text">Consultas</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Agenda">
                                        <i className="bi bi-calendar4-event link-icon"></i>
                                        <span className="link-text">Agenda</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Segurança">
                                        <i className="bi bi-shield-check link-icon"></i>
                                        <span className="link-text">Segurança</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Solicitações">
                                        <i className="bi bi-chat-square-text link-icon"></i>
                                        <span className="link-text">Solicitações</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Upload de Arquivos">
                                        <i className="bi bi-file-earmark-arrow-up link-icon"></i>
                                        <span className="link-text">Upload Arquivos</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Plano de Ensino">
                                        <i className="bi bi-book link-icon"></i>
                                        <span className="link-text">Plano de Ensino</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Matriz Inglês">
                                        <span className="link-text">Matriz Inglês</span>
                                    </a>
                                </li>
                            </>
                        ) : type === "secretaria" ? (
                            <>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <CgProfile className="link-icon" />
                                        <span className="link-text">Perfil</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <AiOutlinePlusCircle className="link-icon" />
                                        <span className="link-text">Cadastrar Funcionário</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <BiSearch className="link-icon" />
                                        <span className="link-text">Consultar Funcionário</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <RiUserAddLine className="link-icon" />
                                        <span className="link-text">Cadastrar Aluno</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-link" title="Matrícula">
                                        <RiUserSearchLine className="link-icon" />
                                        <span className="link-text">Cadastrar Aluno</span>
                                    </a>
                                </li>
                            </>
                        ) : (
                            <></>
                        )}
                        <li className="nav-item">
                            <a href="#" className="nav-link change-theme" title="Mudar Tema">
                                <button className="checkbox" role="switch" aria-checked="false" onClick={darkTheme} />
                                <span className="link-text">Mudar Tema</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-options">
                    <a href="/" className="nav-link" title="Fazer Logout">
                        <AiFillCloseCircle className="link-icon link-exit" />
                        <span className="link-text">Sair</span>
                    </a>
                    <div className="menu-burger nav-toggle" onClick={showMenu}>
                        <div></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

/*=============== SHOW MENU ===============*/
const showMenu = () => {
    const nav = document.querySelector('.nav-menu'),
        toggle = document.querySelector('.nav-toggle')

    nav.classList.toggle('show-menu')
    toggle.classList.toggle('close')
}

/*=============== DARK THEME ===============*/
const darkTheme = () => {
    const switchButton = document.querySelector('.checkbox'),
        body = document.querySelector('body #root .global'),
        darkTheme = 'dark-theme',
        iconTheme = 'on'

    // Adiciona ou remove a classe 'dark-theme' ao body
    body.classList.toggle(darkTheme)
    switchButton.classList.toggle(iconTheme)
}

const contrastTheme = () => {
    const switchButton = document.querySelector('#change-contrast'),
        body = document.querySelector('body #root .global'),
        contrastTheme = 'body-contrast',
        iconContrast = 'on'

    //Adiciona ou remove a classe 'body-contrast' ao body
    body.classList.toggle(contrastTheme)
    switchButton.classList.toggle(iconContrast)
}