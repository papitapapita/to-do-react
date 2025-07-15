import { Dispatch, SetStateAction } from 'react';
import './ChangeAlert.css';

interface Props {
  setOpenChangeAlert: Dispatch<SetStateAction<boolean>>;
}

export function ChangeAlert({ setOpenChangeAlert }: Props) {
  const handleReload = () => {
    setOpenChangeAlert(false);
    window.location.reload();
  };

  return (
    <form className="change-alert-form">
      <h2 className="change-alert__title">
        New changes found
      </h2>
      <div className="form-buttons">
        <input
          className="change-alert__button change-alert__button--cancel"
          type="button"
          value="cancel"
          onClick={() => {
            setOpenChangeAlert(false);
          }}
        />
        <input
          className="change-alert__button change-alert__button--reload"
          type="button"
          value="reload"
          onClick={handleReload}
        />
      </div>
    </form>
  );
}
