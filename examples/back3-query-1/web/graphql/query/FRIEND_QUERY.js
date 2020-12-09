import { gql } from '@apollo/client'

const FRIEND_QUERY = gql`
query {
  friend_by_pk(id: 1) {
    id
    name
    height
    weight
  }
}
`

export default FRIEND_QUERY