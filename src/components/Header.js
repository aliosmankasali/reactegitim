import React from 'react'

class Header extends React.Component{
constructor(){
    super()
    this.state = {
        isNavOn : false
    }
}
buttonClicked(){
    this.setState({
isNavOn:!this.state.isNavOn
    })
}

render(){
    return (
        <div>
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-sm-between">
                    <a className="navbar-brand">Eğitim Budur</a>
                    <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{display: this.state.isNavOn? "block":"none"}}>
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">AnaSayfa </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/hakkimda">Hakkımda </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/iletisim">iletişim </a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}


}



export default Header