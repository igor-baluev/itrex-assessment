import './Select.css';

const Select = ({ value, onValueChange, options, placeholder = '', className = '', ...props }) => {
  return (
    <select
      value={value}
      onChange={e => onValueChange(e.target.value)}
      className={`select${className ? ' ' + className : ''}`}
      {...props}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default Select;
