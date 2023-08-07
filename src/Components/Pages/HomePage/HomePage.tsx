import React from 'react';
import s from './HomePage.module.scss';
import BlueBtn from "@/Components/BlueBtn/BlueBtn";

const HomePage = () => {
    return (
        <main style={{marginTop:'20px'}} className='container'>
            <div className={s.stock}>
                <div className={s.info}>
                    <div className={s.title}>Заголовок для акции<br/> для клиентов</div>
                    <div className={s.sup}>Подзаголовок для будущей акции</div>
                    <div className={s.btns}>
                        <BlueBtn text={'Кнопка 1'} width={240}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;