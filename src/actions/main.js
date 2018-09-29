export const LOAD_COOL = 'LOAD_COOL'
const URL_COOL = 'http://www.mocky.io/v2/5ba409112f00005b00968a9d'
export function itemFetchDataCool(id_ticket) {
  return (dispatch) => {
      fetch( `${URL_COOL}`, {
        method: 'GET'
      })
      .then( response => response.json() )
      .then((items) => {
        return( dispatch( getCoolDashboard(items) ) )
      } )
  };
}

export const getCoolDashboard = payload => ({
  type: LOAD_COOL,
  payload
})