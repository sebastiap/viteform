import React, {   useState } from 'react';
import {useDataApi} from '../common/useDataApi'

import { Spinner } from '@chakra-ui/react'
import { Sform,Sbutton,Sinput } from '../common/Sform.styled';


// const dataFetchReducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false
//       };
//     case 'FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     default:
//       throw new Error();
//   }
// };

// export const useDataApi = (initialUrl, initialData) => {
//   const [url, setUrl] = useState(initialUrl);

//   const [state, dispatch] = useReducer(dataFetchReducer, {
//     isLoading: false,
//     isError: false,
//     data: initialData,
//   });

//   useEffect(() => {
//     let didCancel = false;

//     const fetchData = async () => {
//       dispatch({ type: 'FETCH_INIT' });

//       try {
//         const result = await axios(url);

//         if (!didCancel) {
//           dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//         }
//       } catch (error) {
//         if (!didCancel) {
//           dispatch({ type: 'FETCH_FAILURE' });
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       didCancel = true;
//     };
//   }, [url]);

//   return [state, setUrl];
// }

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
        <ul>
          {data.hits.map(item => (
            <div key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </div>
          ))}
        </ul>
      )}
        </>
    );
    
}

export default ApiProp;