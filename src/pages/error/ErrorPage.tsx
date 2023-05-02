import { CenteredLayout } from "@features/layout";
import { useRouteError } from "react-router-dom";

type ErrorType = {
  statusText?: string;
  message?: string;
};

export const ErrorPage = () => {
  const error = useRouteError() as ErrorType;

  return (
    <CenteredLayout>
      <div>
        <p>Возникла неожиданная ошибка</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </CenteredLayout>
  );
};
