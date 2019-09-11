import React from 'react';

const renderField = {
  inputField: ({ input, label, type, disabled, styleClass, meta: { touched, error } }) => (
    <div>
      <input {...input} disabled={disabled} placeholder={label} type={type} className={styleClass} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  ),
  textAreaField: ({ input, label, disabled, styleClass, meta: { touched, error } }) => (
    <div>
      <textarea {...input} disabled={disabled} placeholder={label} className={styleClass}></textarea>
      {touched && error && <span className="error">{error}</span>}
    </div>
  )
}

export default renderField;