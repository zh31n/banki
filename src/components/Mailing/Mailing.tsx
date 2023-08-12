import React from 'react';
import s from './Mailing.module.scss'
import mail from '@/assets/icons/rassilka.svg';
import Image from "next/image";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

const Mailing = () => {
    return (
        <div className={s.mailing}>
            <div className={s.info}>
                <div className={s.title}>Подпишитесь на нашу рассылку, <mark>чтобы быть в курсе новых предложений</mark>
                </div>
                <div className={s.mailing_i}>
                    <div className={s.mail_cont}>
                        <input type="email" placeholder='Введите вашу почту'/>
                        <BlueBtn text={'Подписаться'} width={170}/>
                    </div>
                    <div className={s.inp_label}>
                        <div><input type={'checkbox'} className={s.inp}/></div>
                        <span>Предоставляю своё <a href={''}>согласие</a> на обработку персональных данных</span>
                    </div>
                    <div className={s.inp_label}>
                        <div><input type={'checkbox'} className={s.inp}/></div>
                        <span>Предоставляю своё <a href={''}>согласие</a> на получение рекламы и информационных сообщений</span>
                    </div>
                </div>
            </div>
            <Image src={mail} alt={'рассылка фото'}/>
        </div>
    );
};

export default Mailing;