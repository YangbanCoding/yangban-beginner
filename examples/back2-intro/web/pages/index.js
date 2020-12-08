import { useQuery, gql } from '@apollo/client'

const USER_QUERY = gql`
query {
  user {
    id
    name
  }
}
`

function Index () {
  const { data, loading, error } = useQuery(USER_QUERY)

  if (loading) {
    return <div>로딩중</div>
  }

  if (error) {
    return <div>에러</div>
  }

  return (
    <div>{data.user[0].name}</div>
  )
}

export default Index
