import styles from './Button.module.css'

export function Button({ text, variant = "primary", className = "", ...props }) {
    return(
        <button 
        className={`${styles.btn} ${styles[variant]} ${className}`} 
        {...props}>
            {text}
        </button>
    )
}