import axios from 'axios'

export const API_KEY = "WhSZVJC161KB8bjfhNFzsKBi9drbf5AZ02d680S6ZNjYsN72B8R8VZikrHGqbSca0R5PbYn5O74quxNleh_Lioi_CixE5xXtxnMe_6Pm6RBhKxAXBOxkn83kPgNWYHYx"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})
