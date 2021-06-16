import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../actions/newsAction';
import Skeleton from '../components/Skeleton';
const News = () => {
    const dispatch = useDispatch();
    const { news } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(getNews());
    });

    return (
        <main>
            {news.length ? (
                <div>
                    <h2>Articles</h2>
                    {news.map((article) => (
                        <article className='article' key={article.id}>
                            <header className='article__header'>
                                <h3>{article.title}</h3>
                            </header>
                            <div className='article__body'>
                                <p className='article__paragraph'>
                                    {article.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <Skeleton />
            )}
        </main>
    );
};

export default News;
