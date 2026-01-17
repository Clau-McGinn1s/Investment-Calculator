import HeaderImg from "../../public/investment-calculator-logo.png"

export function Header(){

    return (
        <div id="header">
            <img src={HeaderImg} alt="Logo Showing Money Bag" />    
            <h1>React Investment Calulator</h1>
        </div>
    )

}