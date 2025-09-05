export const generateStaticParams = async () => {
	return [
		{
			segments: ['XD'],
		},
		{
			segments: ['xxx'],
		},
	];
};

const page = async ({
	params,
	searchParams,
}: {
	params: Promise<{ segments: string[] }>;
	searchParams: Promise<{ page: string }>;
}) => {
	const { segments = [] } = await params;
	const all = await searchParams;

	if (segments[0] === 'XD') {
		return <div>XD filrado al inicio</div>;
	}
	if (segments[segments.length - 1] === 'xxx') {
		return <div>xxx filrado al final</div>;
	}

	return (
		<div>
			<h1>{segments.join(' / ')}</h1>
			<p>
				{Object.entries(all)
					.map(([k, v]) => `${k}: ${v}`)
					.join(' | ')}
			</p>
		</div>
	);
};

export default page;
