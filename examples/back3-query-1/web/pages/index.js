import { useQuery, gql } from '@apollo/client'
import FRIEND_QUERY from '../graphql/query/FRIEND_QUERY'

function Index () {
  const { data, loading, error } = useQuery(FRIEND_QUERY)

  if (loading) {
    return <div>로딩중</div>
  }

  if (error) {
    return <div>에러 발생</div>
  }

  const { id, name, height, weight } = data.friend_by_pk

  return (
    <div>
      {id} {name} {height} {weight}
    </div>
  )
}

export default Index
