import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'q32wtjuz',  // (see https://www.sanity.io/manage)
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
})

export default client

