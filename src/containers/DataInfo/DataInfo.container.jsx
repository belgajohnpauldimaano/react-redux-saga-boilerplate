import { connect } from 'react-redux'

import { getDataInfo } from './../../actions/data-info-actions'
import { FetchDataInfo } from './../../selectors/containers/data-info-container'

import DataInfo from './DataInfo'

const mapStateToProps = state => ({
    dataInfo: state.DataInfo,
    dataInfoData: FetchDataInfo(state)
})

export default connect(mapStateToProps, { getDataInfo })(DataInfo)