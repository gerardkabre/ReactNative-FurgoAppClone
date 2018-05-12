export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECT_ERROR = 'FETCH_PROJECTS_ERROR';

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export function fetchProjectsRequest() {
  return {
    type: FETCH_PROJECT_REQUEST
  };
}

export function fetchProjectsSuccess(projects) {
  return {
    type: FETCH_PROJECT_SUCCESS,
    payload: projects
  };
}

export function fetchProjectsError(err) {
  return {
    type: FETCH_PROJECT_ERROR,
    payload: err
  };
}

export function createProjectRequest() {
  return {
    type: CREATE_PROJECT_REQUEST
  };
}

export function createProjectSuccess(projectCreated) {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: projectCreated
  };
}

export function createProjectError(err) {
  return {
    type: CREATE_PROJECT_ERROR,
    payload: err
  };
}
