export const Input = ({ label, type = 'text', error, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...props} />
      {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}
    </div>
  );
};