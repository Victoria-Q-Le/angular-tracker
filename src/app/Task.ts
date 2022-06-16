// this is an interface to create a task, model for the task including all the fields that a task should have.
export interface Task {
  id?: number;
  //id is an optional property because when the user fills out the form to log in the task, id will be not required. ID is only created once the task has been saved to the backend
  text: string;
  day: string;
  reminder: boolean;
}
