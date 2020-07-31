import React,{Component} from 'react';
import './styles.css';

export default class sellProduct extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="productBox">
                <h1>Isto e um produto</h1>
            </div>

        );
    }
}