import React from 'react';

const HomePage = () => {
    return (
        <main>
            <h2>Welcome to the website</h2>
            <article className='article article_main'>
                <div className='article__body'>
                    <p className='article__paragraph'>
                        This is a solution for{' '}
                        <a
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-1'
                            target='blank'
                        >
                            a test assignment (in Russian)
                        </a>{' '}
                        to check the basic skills of react, redux and
                        react-router.
                    </p>
                    <p className='article__paragraph'>
                        Check{' '}
                        <a
                            href='https://www.youtube.com/watch?v=BMD1JjZf7WA&t=1s'
                            target='blank'
                        >
                            the analysis of solutions and author's solution
                        </a>{' '}
                        on Youtube
                    </p>
                    <p className='article__paragraph'>
                        You can find{' '}
                        <a
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-2'
                            target='blank'
                        >
                            a second test assignment
                        </a>{' '}
                        from the same author
                    </p>
                    <p className='article__paragraph'>
                        <a
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-2'
                            target='blank'
                        >
                            A github repository
                        </a>{' '}
                        of this solution of the assignment
                    </p>
                </div>
            </article>
        </main>
    );
};

export default HomePage;
