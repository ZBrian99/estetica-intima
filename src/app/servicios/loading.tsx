export default function Loading() {
  console.log('...Cargando desde Loader Servicios...');
  return (
		<div className='fixed top-0 bottom-0 right-0 w-80 bg-yellow-700/50 z-50 flex justify-center items-center flex-col'>
			...Cargando desde Loader Servicios...
			<p>Servicios Loading</p>
		</div>
		// <div className="flex items-center justify-center min-h-screen">
		//   <div className="flex flex-col items-center gap-4">
		//     <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
		//     <p className="text-gray-600 text-lg font-medium">Cargando... desde Servicios</p>
		//   </div>
		// </div>
	);
}
