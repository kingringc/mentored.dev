import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'
import { useQuery, useMutation } from 'react-apollo-hooks'

const CHECK_FOR_REPO = gql`
  query CheckForMentoredDevRepo {
    me {
      github {
        repository(name: "test-repo2") {
          id
        }
      }
    }
  }
`

const INITIALIZE_REPO = gql`
  mutation InitializeMentoredDevRepo {
    gitHub {
      createRepositoryTemp(
        input: { description: "Hello World", repoName: "test-repo2" }
      ) {
        repository {
          nameWithOwner
        }
      }
    }
  }
`

const CheckForRepo = () => {
  // TODO - this is just the start
  // You need to change refetchQueries though...
  const [creatingRepo, setCreatingRepo] = useState(false)
  const { data, error, loading } = useQuery(CHECK_FOR_REPO)
  const initializeRepo = useMutation(INITIALIZE_REPO)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  if (data.me.github.repository && data.me.github.repository.id !== null) {
    return <h1>NOT NULL!!1</h1>
  } else {
    initializeRepo({
      refetchQueries: ['getList']
    })
    // setCreatingRepo(true)
  }

  return (
    <div>
      <h1>this is a test</h1>
      {creatingRepo && <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default CheckForRepo
