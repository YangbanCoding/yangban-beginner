import { useSubscription, gql } from '@apollo/client'

const CHAT_SUBSCRIPTION = gql`
subscription {
  chat {
    id
    text
  }
}
`

function Index () {
  const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION)

  if (loading || error) return null

  return (
    <div>
      {data.chat.map(text => {
        return <div key={text.id}>{text.text}</div>
      })}
    </div>
  )
}

export default Index