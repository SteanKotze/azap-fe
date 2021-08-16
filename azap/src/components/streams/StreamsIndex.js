import React from 'react'
import { useQuery } from 'react-query'
import ApiHelper from '../../helpers/ApiHelper'

const StreamsIndex = () => {
  //  --- Variables ---
  const { data, isLoading, error } = useQuery(['indexStreams'], () => ApiHelper.indexStreams(), {
    refetchOnWindowFocus: false,
  })
  //  --- Response ---
  return (
    <div>
      {/* ToDo Impelement streams index component */}
      Streams Index
    </div>
  )
}

export default StreamsIndex
