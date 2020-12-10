import { useQuery, } from '@apollo/client'
import USER_QUERY from '../graphql/query/USER_QUERY'

function Index () {
  const { data, loading, error } = useQuery(USER_QUERY)

  if (loading) {
    return <div>로딩</div>
  }

  if (error) {
    return <div>에러</div>
  }

  return (
    <div>
      {data.user.map(user => {
        return (
          <div key={user.id} className='box'>
            <div>{user.id}</div>
            <div>{user.name}</div> 
            <div>키 : {user.height}</div>
            <div>몸무게 : {user.weight}</div>
            <div>지역 : {user.state}</div>
          </div>
        )
      })}
      <style jsx>{`
        .box {
          display: flex;
          justify-content: space-around;
          font-size: 32px;
          border-bottom: 1px solid #999999;
          padding: 16px;
        }
      `}</style>
    </div>
  )
}

export default Index