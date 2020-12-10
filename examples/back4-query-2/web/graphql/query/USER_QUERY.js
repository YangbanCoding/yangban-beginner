import { gql } from '@apollo/client'

const USER_QUERY = gql`
{
  user(
    where: {
      _and: [
        {
          height: {
            _gte: 180
          }
          name: {
            _like: "%민준%"
          }
        }
      ]
    }
  ) {
    id
    name
    height
    weight
    state
  }
}
`

export default USER_QUERY
