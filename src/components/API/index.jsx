import React, {   useState } from 'react';
import {useDataApi} from '../common/useDataApi'

import {   List,ListItem,  ListIcon, Spinner } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


import { Sform,Sbutton,Sinput } from '../common/Sform.styled';


const ApiProp = () => {
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      'https://hn.algolia.com/api/v1/search?query=redux',
      { hits: [] },
    );

    return (
        <>
      <Sform
        onSubmit={event => {
          doFetch(
            `http://hn.algolia.com/api/v1/search?query=${query}`,
          );

          event.preventDefault();
        }}
      >
        <Sinput
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <Sbutton type="submit">Search</Sbutton>
      </Sform>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.100'
        color='red.800'
        size='xl'
      />
      ) : (
        <List spacing={3}>
          {data.hits.map(item => (
            <ListItem key={item.objectID}>
            <ListIcon as={ExternalLinkIcon} color='green.500' />
              <a href={item.url}>{item.title}</a>
            </ListItem>
          ))}
        </List>
      )}
        </>
    );
    
}

export default ApiProp;