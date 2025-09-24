import { FaStore } from 'react-icons/fa';
import { Button } from './ui/button';
import Link from 'next/link';

const TiendaButton = () => {
	return (
		<Link href='/servicios' aria-label='Ir a la tienda'>
			<Button className='btn-cta-gradient hover:transform hover:-translate-y-px transition duration-200 text-sm font-semibold rounded-full py-2 shadow-lg hover:shadow-xl px-4 flex'>
				<FaStore className='mr-1 h-5 w-5 text-white/90' />
				Tienda
			</Button>
		</Link>
	);
};
export default TiendaButton;
