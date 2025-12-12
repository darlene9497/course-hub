import './ItemCard.css'

export function ItemCard({icon, text, variant="primary", className=""}) {
    return(
        <div className={`item-card item-card--${variant} ${className}`}>
            <span>{icon}</span>
            <p>{text}</p>
        </div>
    )
}