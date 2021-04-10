import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'


function useResults() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetchResults("Pizza")
    },[])


    const fetchResults = async(searchTerm) => {
        try {
            setLoading(true)
            const respond = await yelp.get('/search', { 
                params: { 
                    term: searchTerm,
                    limit: 50,
                    location: 'Ankara'
                }
            })
            setResults(respond.data.businesses)
            setLoading(false)
        } catch (err) {
            setError('Something Went Wrong!')
        }
    }

    return [fetchResults, results, error, loading]
    
}

export default useResults
