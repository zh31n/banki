import React from 'react';

const PageWrapper = ({children}) => {
    return (
        <main className={'container'} style={{paddingTop:'20px'}}>{children}</main>
    );
};

export default PageWrapper;