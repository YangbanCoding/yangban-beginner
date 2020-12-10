import { gql } from '@apollo/client'

const USER_QUERY = gql`
{
  user {
    id
    name
    weight
    height
    state
  }
}
`

export default USER_QUERY
