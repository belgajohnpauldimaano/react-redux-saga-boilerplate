import { createSelector } from 'reselect'

import DataInfoSelector, { FetchDataInfoSelector } from './../entities/data-info-selector'

export const FetchDataInfo = createSelector(
    [
        // DataInfoSelector,
        FetchDataInfoSelector
    ], (
        // DataInfoEntity,
        FetchDataInfoEntity
    ) => {
        return FetchDataInfoEntity
    }
)