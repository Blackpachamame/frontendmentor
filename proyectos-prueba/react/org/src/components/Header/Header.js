import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img className="header__img" src="/img/header.png" alt='Org' />
            <div className="header__mobile">
                <img src="/logoOrg.png" alt='logo Org' />
                <div className="header__title">
                    <h1>Personas y equipos</h1>
                    <p>organizados en un solo lugar.</p>
                </div>
            </div>
        </header>
    );
}

export default Header