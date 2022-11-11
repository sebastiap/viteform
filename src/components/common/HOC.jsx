import {   List,ListItem,  ListIcon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

// This component applies higher-order component in React
export const withHigherOrderComponent = (Component) => (props) =>
  <Component {...props} />;

export const BaseTodoList = ({ data }) => {
    return (
      <ul>
        {data.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  const TodoItem = ({ item }) => {
    return (
      <li>
        {item.task} {item.completed.toString()}
      </li>
    );
  };

  // Second Implementation for HOC
  // This component applies higher-order component  with greater complexity
export const withConditionalFeedback =
({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
(Component) =>
(props) => {
  if (props.isLoading)
    return <div>{loadingFeedback || 'Loading data.'}</div>;

  if (!props.data)
    return <div>{noDataFeedback || 'No data loaded yet.'}</div>;

  if (!props.data.length)
    return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

  return <Component {...props} />;
};

  export const NewTodoList = ({ data }) => {
    return (
      <List>
        {data.map((item) => (
        <ListItem key={item.objectID}>  
        <ListIcon as={ExternalLinkIcon} color='green.500' />
        <a href={item.url}>{item.title}</a>
        </ListItem>
        ))}
      </List>
    );
  };

 export const ApiTodoList = withConditionalFeedback({
    loadingFeedback: 'Loading Pages.',
    noDataFeedback: 'No Pages loaded yet.',
    dataEmptyFeedback: 'List is empty.',
  })(NewTodoList);



  // used in API like this 
  // const TodoList = withHigherOrderComponent(BaseTodoList);