import React from 'react';

type Props = {
    children:React.ReactNode
}
const PageWrapper = ({children}:Props) => {
    return (
        <main className={'container'} style={{paddingTop:'20px'}}>{children}</main>
    );
};

export default PageWrapper;