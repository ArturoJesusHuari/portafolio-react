function DefinitionsComponent({ children }) {
  return (
    <div className="w-full mx-10">
      <h1 className="text-2xl font-bold">Definiciones importantes:</h1>
      <ul>
        {children}
      </ul>
    </div>
  )
}
export default DefinitionsComponent