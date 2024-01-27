import {useState} from 'react'
import { formatDate, formatTime } from '../../helpers/formatDate';
export default function Header(){
    const [time ,setTime]= useState(formatTime(new Date));
    setInterval(()=>setTime(formatDate(new Date())),1000)
    return (
        <header>
            <div className="header__top-section">
                <div className="top-section__now-time">
                    <p>Текущее время (МСК) <span>{time}</span></p>
                </div>
            </div>

            <div className="header__main-section">
                <div className="main-section__logo">
                    <div className="logo__main-logo-element">
                        <div className="main-logo-element__white">
                            <h1>MEXA</h1>
                        </div>
                        <div className="main-logo-element__opasity">
                            <h1>PLAZA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}