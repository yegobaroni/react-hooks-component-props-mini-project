import React from 'react'

function Article({title, date="January 1, 1970", preview, minutes}) {

    const listEmojis =(minutes) => {
        const emoji = minutes < 30 ? "☕️ " : "🍱🍱🍱🍱 "
        const emojiAmount = minutes < 30 ? Math.ceil(minutes/5) : Math.ceil(minutes/10)
        return emoji.repeat(emojiAmount)
    }
    const displayEmojis =listEmojis
  return (
    <article>
        <h3>{title}</h3>
        <small>{date} . {displayEmojis}{minutes} min read</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article;