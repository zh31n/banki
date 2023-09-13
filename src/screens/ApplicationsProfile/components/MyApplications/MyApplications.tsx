import React from 'react';
import s from './MyApplications.module.scss';
import ApplicationItem from "@/screens/ApplicationsProfile/components/ApplicationItem/ApplicationItem";

type AppT = {
    name: string
    sub: string
    status: number
}

type Props = {
    applications: AppT[]
}

const MyApplications = ({applications}: Props) => {

    const appItems = applications.map((el, index) =>
        <ApplicationItem name={el.name} sub={el.sub} status={el.status} key={index}/>)

    return (
        <div>
            <h1 className={s.title}>Статус заявок</h1>
            <div className={s.items_wrapper}>
                {appItems}
            </div>
        </div>
    );
};

export default MyApplications;