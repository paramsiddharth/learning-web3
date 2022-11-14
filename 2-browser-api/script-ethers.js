import './node_modules/ethers/dist/ethers.umd.min.js';

window.addEventListener('load', async () => {
	const contract = {
		address: '0x21EE73541d717E7a5DaCf915c23ee2665888C4a8',
		abi: [
			{
				inputs: [
					{
						internalType: 'string',
						name: '_mood',
						type: 'string'
					}
				],
				name: 'setMood',
				outputs: [],
				stateMutability: 'nonpayable',
				type: 'function'
			},
			{
				inputs: [],
				name: 'getMood',
				outputs: [
					{
						internalType: 'string',
						name: '',
						type: 'string'
					}
				],
				stateMutability: 'view',
				type: 'function'
			}
		],
		provider: 'goerli'
	};

	const provider = new ethers.providers.Web3Provider(window.ethereum, contract.provider);

	await provider.send('eth_requestAccounts', [])
	const [account] = await provider.listAccounts();
	const signer = await provider.getSigner(account);
	const Mood = new ethers.Contract(
		contract.address,
		contract.abi,
		signer
	);

	const getMood = async () => {
		const mood = await Mood.getMood();
		const output = document.getElementById('output');
		output.classList.remove('bg-danger');
		output.classList.add('bg-success');
		output.innerText = mood;
	};

	const setMood = async () => {
		const input = document.getElementById('input');
		const value = input.value;
		await Mood.setMood(value);
	};

	const get = document.getElementById('get');
	const set = document.getElementById('set');
	get.addEventListener('click', getMood);
	set.addEventListener('click', setMood);
});