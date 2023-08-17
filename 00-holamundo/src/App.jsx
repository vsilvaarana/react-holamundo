import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('Victor Silva Arana')
    const format = (userName) => `@${userName}`
    const userOG = { isFollowing: false, userName: 'user2', formatUserName: format}

    const users = [
        {
            userName: 'user1',
            name: 'Deisy Soto',
            initialIsFollowing: true,
            formatUserName: {format}
        },
        {
            userName: 'user2',
            name: 'Fernando Garcia',
            initialIsFollowing: false,
            formatUserName: {format}
        }
    ]

    //comentario 1
    /* comentario 2 */

    return (
        <section className='App'>
    <TwitterFollowCard 
        formatUserName={format} 
        isFollowing userName="vsilvaarana" 
        >
            {name}        
    </TwitterFollowCard>
    { /* comentario 3 */ }

    <TwitterFollowCard formatUserName={format} initialIsFollowing={false} userName="user1">Jose Luis Tavara</TwitterFollowCard>
    <TwitterFollowCard formatUserName={format} initialIsFollowing userName="user2">Luis Calixto</TwitterFollowCard>
    <TwitterFollowCard {...userOG}><h1>Oscar Gutierrez</h1><h1>Mateo</h1> </TwitterFollowCard>

    <button onClick={() => setName('tuchi')} >Cambiar Nombre</button>

{
    users.map(
        user => {
            const {userName, name, initialIsFollowing} = user
            return (
                <TwitterFollowCard 
                key={userName}
                userName={userName} 
                initialIsFollowing={initialIsFollowing}
                formatUserName={format}
                >   
                    {name}             
                </TwitterFollowCard>
            )
        }
    )
}
        </section>
        

       
    )
}