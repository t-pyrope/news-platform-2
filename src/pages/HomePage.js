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
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            the second test assignment (in Russian)
                        </a>{' '}
                        that checks levels of react, redux and react-router
                        skills of the participant
                    </p>
                    <p className='article__paragraph'>
                        Check{' '}
                        <a
                            href='https://vk.com/@maxpfrontend-razbor-testovogo-zadaniya-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            the analysis of solutions
                        </a>{' '}
                        from the author
                    </p>
                    <p className='article__paragraph'>
                        <a
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-1'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            The first test assignment
                        </a>{' '}
                        from the same author
                    </p>
                    <p className='article__paragraph'>
                        <a
                            href={`https://www.youtube.com/watch?v=BMD1JjZf7WA&t=1s`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            The analysis of solutions of the first assignment
                            and the author's solution on Youtube
                        </a>{' '}
                        from the same author
                    </p>
                    <p className='article__paragraph'>
                        <a
                            href='https://vk.com/@maxpfrontend-testovoe-zadanie-2'
                            target='_blank'
                            rel='noopener noreferrer'
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
