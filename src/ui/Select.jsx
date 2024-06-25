function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      className="md:text-lg md:p-2 p-1 cursor-pointer rounded-tl-3xl rounded-br-3xl focus:none border border-brand-500"
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
