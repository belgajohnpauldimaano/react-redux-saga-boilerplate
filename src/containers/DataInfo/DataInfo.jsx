import React, { Component } from 'react'
import { propTypes, defaultProps } from './DataInfo.props'


export default class DataInfo extends Component {

    static propTypes = propTypes
    static defaultProps = defaultProps


    componentDidMount() {
        this.props.getDataInfo()
    }
    render() {
        console.log(`dataInfoData`, this.props.dataInfoData)
        return (
            <div>

                Data Info component
            </div>
        )
    }
}
