import { Component } from "react";


export default class CCq1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'white'
        }
    }

    ChBack = (e) => {
        let color = e.target.innerText;
        this.setState({ backgroundColor: color })
    }

    render() {

        const { backgroundColor } = this.state

        const style = {
            backgroundColor: backgroundColor,
            border: '2px solid black', margin: 10, padding: 10,
            borderRadius: 5
        }

        return (
            <>
                <div style={style}>
                    <button className="btn btn-primary" onClick={this.ChBack}>Blue</button>
                    <button className="btn btn-secondary" onClick={this.ChBack}>Grey</button>
                    <button className="btn btn-success" onClick={this.ChBack}>Green</button>
                    <button className="btn btn-warning" onClick={this.ChBack}>Yellow</button>
                    <button className="btn btn-danger" onClick={this.ChBack}>Red</button>
                    <button className="btn btn-dark" onClick={this.ChBack}>Black</button>
                    <button style={{ backgroundColor: 'pink' }} className="btn btn" onClick={this.ChBack}>Pink</button>
                    <button style={{ backgroundColor: 'purple' }} className="btn btn" onClick={this.ChBack}>purple</button>
                </div>
            </>
        )
    }
}