function SignupFeature({ icon, children }) {
  return (
    <div className="flex items-center gap-3 text-3xl">
      {icon}
      <p className="uppercase font-heroDesc">{children}</p>
    </div>
  );
}

export default SignupFeature;
