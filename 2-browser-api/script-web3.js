import './node_modules/web3/dist/web3.min.js';

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

	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		/* try {
			await ethereum.enable();
		} catch (e) {
			console.error('Rejected by user.');
			alert('You rejected the wallet permission.');
			return;
		} */
	} else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
	} else {
		console.error('No Web3 provider detected.');
		alert('No Web3 provider detected.');
		return;
	}

	const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
	const Mood = new web3.eth.Contract(contract.abi, contract.address);

	const getMood = async () => {
		const mood = await Mood.methods.getMood().call();
		const output = document.getElementById('output');
		output.classList.remove('bg-danger');
		output.classList.add('bg-success');
		output.innerText = mood;
	};

	const setMood = async () => {
		const input = document.getElementById('input');
		const value = input.value;
		await Mood.methods.setMood(value).send({ from: account });
	};

	const get = document.getElementById('get');
	const set = document.getElementById('set');
	get.addEventListener('click', getMood);
	set.addEventListener('click', setMood);
});