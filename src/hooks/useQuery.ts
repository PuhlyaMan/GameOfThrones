import { useLocation } from 'react-router-dom'
import querystring from 'querystring'

const useQuery = <T>(): T => {
  const location = useLocation()
  const queryParams = querystring.parse(location.search.substr(1))
  const params = Object.keys(queryParams).reduce((prev, curr) => {
    const prop = queryParams[curr]
    if (isNaN(Number(prop))) {
      return { ...prev, [curr]: prop }
    } else {
      return { ...prev, [curr]: Number(prop) }
    }
  }, {})
  return params as T
}

export default useQuery
