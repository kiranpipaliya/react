import { useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { isLoading, error, sendRequest: sendTask } = useHttp()

  const addData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }


  const enterTaskHandler = async (taskText) => {
    sendTask({
      url: 'https://tasks-8b911-default-rtdb.firebaseio.com/tasks.json', method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    }, addData.bind(null, taskText))


  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
