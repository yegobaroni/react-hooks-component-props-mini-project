import React from 'react';
import Article from "./Article";

function ArticleList({posts}) {
  return (
    <main>
        {posts.map((post) => <Article 
        key={post.id}
        title={post.title}
        date={post.id}
        preview={post.preview}
        minutes={post.minutes} />)}
    </main>
  )
}

export default ArticleList;