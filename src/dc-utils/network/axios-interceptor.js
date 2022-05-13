import axios from 'axios'

const ins = axios.create()

ins.interceptors.request.use(
  axiosConfig => {
    return axiosConfig;
  },
  error => {
    console.log('request error', error);
  }
)

ins.interceptors.response.use(({data}) => {
  return data
}, (error) => {
  return Promise.reject(error);
})

export const getExternalDataByStepId = (stepId, params = null) => {
  const result = ins.get(`${stepId}`, {params})
  if (result) {
    return result
  } else {
    return Promise.resolve(() => {
      return {
        code: -1,
        data: null,
        message: result,
      }
    })
  }
}

export const stateThunkFactory = stepId => params => {
  return getExternalDataByStepId(stepId, params)
}

export const commitExternalData = (stepId, params = null) => {
  return ins.post(`${stepId}`, params)
}

export {
  ins as axios
} 
