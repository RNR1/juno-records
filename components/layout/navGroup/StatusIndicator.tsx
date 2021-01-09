import { FC } from 'react'

interface Props {
	status: 'online' | 'n/a' | 'offline'
}

/** @flow */
/**
 * A simple circle used for indicating user/account status.
 * @name StatusIndicator
 * @example
 *  <StatusIndicator status="online" />
 */
const StatusIndicator: FC<Props> = ({ status }) => {
	let backgroundColor
	switch (status) {
		case 'online':
			backgroundColor = '#91D01F'
			break
		case 'n/a':
			backgroundColor = '#e89108'
			break
		case 'offline':
			backgroundColor = '#e74c3c'
			break
	}
	return (
		<span>
			<div
				style={{
					height: 10,
					width: 10,
					borderRadius: 5,
					marginLeft: 5,
					backgroundColor
				}}
			/>
		</span>
	)
}

export default StatusIndicator
