import React from 'react';
import s from './GetLoan.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroGetLoan from "@/screens/GetLoan/components/IntroGetLoan/IntroGetLoan";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Commis from "@/screens/GetLoan/components/Commis/Commis";

type Props = {
    data:{
        worksData:[]
    }
}

const GetLoan = ({data}:Props) => {
    return (
        <PageWrapper>
            <IntroGetLoan/>
            <HowItWorks title={'Получить займ'} sub={' стало намного проще'} items={data.worksData}/>
            <Commis/>
        </PageWrapper>
    );
};

export default GetLoan;