import React from 'react';
import './index.scss';
const Field = ({setState}) => {
  return (
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="" required=""
               onChange={e => setState(e.target.value)}
        />
        <label htmlFor="name" className="form__label">Поле ввода</label>
      </div>

  );
};

export default Field;
