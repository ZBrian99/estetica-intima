'use client';

import { useUiStore } from '@/app/servicios/hooks/uiStore';

const SSRLoader = () => {
	const isPending = useUiStore((state) => state.isPending);
	if (!isPending) return null;
	console.log('+++Cargando desde Servidor+++');
	return (
		<div className='fixed top-0 bottom-0 left-0 w-80 bg-blue-900/40 z-50 flex justify-center items-center flex-col'>
			+++Cargando desde Servidor+++
			<p>useTransition</p>
		</div>
	);
};
export default SSRLoader;
