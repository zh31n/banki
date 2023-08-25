import React from 'react';
import s from './IntroBanks.module.scss';
import Search from "@/UI/Search/Search";
import CustomCheckboxAround from "@/UI/CustomCheckboxAround/CustomCheckboxAround";
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import arr_l from '@/assets/icons/blue Arrow Left.svg';
import arr_r from '@/assets/icons/blue Arrow right.svg';
import Image from "next/image";

const IntroBanks = () => {

    const letters = ['А', 'Б', 'В', 'Г',
        'Д', 'E', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Э', 'Ю', 'Я']

    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <div className={s.breadCrumbs}>Главная / Банки России / <mark>Список банков России</mark></div>
                <div className={s.title}>Список всех банков <mark>России</mark></div>
                <div className={s.sub}>Найдите ваш банк с помощью поиска</div>
                <div className={s.find}>
                    <Search placeholder={'Введите название или номер лицензии банка..'} margin={0}/>
                    <div className={s.inps}>
                        <div className={s.con}>
                            <CustomCheckboxAround/>
                            По названию
                        </div>
                        <div className={s.con}>
                            <CustomCheckboxAround/>
                            По лицензии
                        </div>
                        <CustomSelect fz={16} options={['выбрать']}/>
                    </div>
                    <div className={s.letters}>
                        <div className={s.alph}>
                            <Image src={arr_l} alt={'arr left'}/>
                            {letters.map((el, index) => <div className={s.letter} key={index}>{el}</div>)}
                            <Image src={arr_r} alt={'arr right'}/>
                        </div>
                        <span>Все банки</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IntroBanks;