import React from 'react';

const Skeleton = () => {
    return (
        <div className='p-skeleton-wrapper'>
            <div className='p-skeleton'>
                <div className='p-skeleton__body'>
                    <div className='p-skeleton__body--r-title'></div>
                    <div className='p-skeleton__body--r-text'>
                        <div className='p-skeleton__body--r-s'></div>
                        <div className='p-skeleton__body--r-full'></div>
                        <div className='p-skeleton__body--r-full'></div>
                        <div className='p-skeleton__body--r-m'></div>
                    </div>
                </div>
                <div className='p-skeleton__separator'></div>
                <div className='p-skeleton__body'>
                    <div className='p-skeleton__footer'></div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
