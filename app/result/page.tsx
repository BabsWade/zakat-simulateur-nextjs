export default function Result() {
  const zakat = 211 // plus tard via state global

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Ta zakat</h2>

      <p className="text-4xl text-green-600 font-bold mb-6">
        {zakat} €
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-6">
        <p>🌙 84 repas offerts</p>
        <p>💧 3 mois d’eau potable</p>
        <p>🎓 1 scolarité</p>
      </div>

      <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
        Payer maintenant
      </button>
    </main>
  )
}