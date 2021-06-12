import React from 'react';
import articles from '../articles';

const News = () => {
    return (
        <main>
            <h1>News</h1>
            {articles.map((article) => (
                <article className='article' key={article.id}>
                    <header className='article__header'>
                        <h2>{article.title}</h2>
                    </header>
                    <div className='article__body'>
                        <p className='article__paragraph'>{article.text}</p>
                    </div>
                </article>
            ))}
        </main>
    );
};

export default News;
