import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID JO7Q5px_g_wL_ZCl7TkDGbyuq_MbZQFa2hzG9j059M0'
	}
});
