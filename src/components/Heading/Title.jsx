import AboutSymbol from '../../assets/icons/abt-symbol.svg?react'
import './Title.css'

export function Title({title, children}) {
    return(
        <div className='title-context'>
            <div className='title-context__mini'>
                <AboutSymbol />
                <h5>{title}</h5>
            </div>
            <h2 className='title-context__max'>
                {children}
            </h2>
        </div>
    )
}