import React from 'react';

type Props = {
    children: React.ReactNode
}
const PageWrapper = ({children}: Props) => {
    return (
        <main className={'container'} style={{paddingTop: '20px', overflowX: 'hidden'}}>{children}</main>
    );
};

export default PageWrapper;