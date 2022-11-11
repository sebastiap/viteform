import React, {   useState } from 'react';
import {useDataApi} from '../common/useDataApi'

import {   List,ListItem,  ListIcon, Spinner,Heading ,FormControl,FormLabel,Switch} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {withHigherOrderComponent,BaseTodoList,ApiTodoList,withConditionalFeedback} from '../common/HOC'


import { Sform,Sbutton,Sinput } from '../common/Sform.styled';
const datas = [{id:1,task:2,completed:"yes"}];


const TodoList = withHigherOrderComponent(BaseTodoList);


const ApiProp = () => {
    const [query, setQuery] = useState('redux');
    const [hocMode,setHocMode] = useState(false)
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      'https://hn.algolia.com/api/v1/search?query=redux',
      { hits: [] },
    );

    const TodoList2 = ApiTodoList;
    return (
        <>
          <FormControl display='flex' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='mode-select' mb='0'>
             <p> HOC mode?</p>
            </FormLabel>
            <Switch id='mode-select' onChange={() => setHocMode(!hocMode)}/>
          </FormControl>
          {hocMode? <p>Hoc Mode uses a higher order component with custom message. </p> : <p>Simple Mode has an spinner</p> }

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

        {/* <TodoList data={datas}/> */}
        {!hocMode?
        <>
        <Heading> Simple API call </Heading>
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
         :
         <>
         <Heading> HOC API call </Heading>
        <TodoList2 data={data.hits} isLoading={isLoading} />
        </>
         }


      
        </>
    );
    
}

export default ApiProp;