
import React, { Component } from 'react'

export default class CCq3 extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            tableSize: '100%'
        }
    }

    chbig = () => {

        this.setState({ tableSize: '100%' })
    }

    chsml = () => {

        this.setState({ tableSize: '50%' })
    }

    render() {
        const { tableSize } = this.state;

        const tablestyle = {
            borderCollapse: 'collapse',
            width:  this.state.tableSize ,
            border: 'solid 2px',
        }


        const cellStyle = {
            border: '2px solid black',
            padding: '20px',
            textAlign: 'left',
        };

        return (
            <table style={tablestyle} onClick={this.chsml} onDoubleClick={this.chbig}>
                <tbody>
                    <tr>
                        <td style={cellStyle}>12</td>
                        <td style={cellStyle}>12</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>12</td>
                        <td style={cellStyle}>12</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>12</td>
                        <td style={cellStyle}>12</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
