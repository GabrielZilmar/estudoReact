import React, { useEffect, useState } from 'react';

import { getUsers } from '../../api/Users/Users.js';

export default () => {
	const [users, setUsers] = useState([]);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		request();
	}, []);

	const request = async () => {
		setLoading(true);
		const users = await getUsers();
		if (users.data) {
			setUsers(users.data);
		} else {
			setErr(users.err);
		}
		setLoading(false);
	};

	if (loading) {
		return <h5> Carregando... </h5>;
	}
	return (
		<React.Fragment>
			<div>
				{err
					? err
					: users.map((user, index) => {
							return <h1 key={index}>{user.name}</h1>;
					  })}
			</div>
		</React.Fragment>
	);
};
