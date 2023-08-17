import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({ children, formatUserName, userName, name = 'sin valor', initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `../src/images/${userName}.png`
    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

console.log(isFollowing)
console.log(name)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={imageSrc}></img>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-unFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}