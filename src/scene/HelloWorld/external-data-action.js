import { externalDataActionCreator, createActionMap, axios } from 'dc-utils';
import { demo_get } from '../prepare-external-data-action'

export const prepareSceneData = () => ({ dispatch }) => {
  try {
    return Promise.all([demo_get()])
      .then(([data]) => {
        dispatch(
          externalDataActionCreator('demo_get', {
            text: data
          })
        )
      })
      .catch(e => {
        console.log(e);
      })
  } catch (e) {
    console.log(e);
  }
}

export const updata_demo_get = (params) => dispatch => {
  return axios.post('/ajax/demo_get.asp', params).then(data => {
    dispatch(
      externalDataActionCreator('demo_get', {
        text: data
      })
    )
  })
}

export const actions = createActionMap({
  updata_demo_get
})
