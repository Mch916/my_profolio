import React from "react";
import { useRouteError } from "react-router-dom";
import MainHeader from "../../components/Header/MainHeader";

const ErrorPage = () => {
  const error = useRouteError();

  let message = 'Something goes wrong';
  let title = 'an error occurs';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not found page.'
  }

  return <>
    <MainHeader />
    <div>
      <p>{title}</p>
      <p>{message}</p>
    </div>
  </>;
};

export default ErrorPage;
