import { SearchInput } from "../SearchInput"
import './style.css'
import Logo from '../../../imgs/yvypora_text_icon.svg'


export const SignHeader = () => {
    return (
        <header>
            <div className='sign-container'>
                <img className='text-icon' src={Logo} alt='' />
                <SearchInput />
                <span className='sign-up'>Criar conta</span>
                <span className='sign-in'>Login</span>

            </div>
        </header>
    )
}
