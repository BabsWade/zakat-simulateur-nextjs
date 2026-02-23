export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`w-full bg-primary text-white py-4 rounded-2xl font-semibold shadow-md active:scale-95 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}