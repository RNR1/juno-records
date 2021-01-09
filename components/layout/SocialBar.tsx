import React, { FC } from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavGroup from 'components/layout/navGroup/NavGroup'
import Icon from '../shared/Icon'
import { Item } from 'components/layout/navGroup/NavItem'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {
	siteTitle: string
	socialItems?: Item[]
	feedbackUrl?: string
}

/** @flow */
/**
 * Navigation bar with social links and contact caption.
 * @name SocialBar
 * @param {string} siteTitle
 * @param {[]} socialItems
 * @param {string} feedbackUrl
 * @example
 *  <SocialBar siteTitle="Ron" socialItems={[{ icon: faFacebookF, label: "Facebook", to: "/" }]} feedbackUrl="https://github.com/RNR1" />
 */
const SocialBar: FC<Props> = ({
	siteTitle,
	socialItems = [],
	feedbackUrl = '/'
}) => {
	return (
		<Container>
			<SocialIcons items={socialItems} Item={Icon} />
			<Caption>
				<span>
					<EnvelopeIcon icon={faEnvelope} />
					We&apos;d like to know what you think of{' '}
					{siteTitle ? `${siteTitle}'s` : 'the'} website. Please send us your
					comments and suggestions via our{' '}
					<FeedbackLink href={feedbackUrl}>
						<a style={{ color: 'white' }}>feedback page.</a>
					</FeedbackLink>
				</span>
			</Caption>
		</Container>
	)
}

export default SocialBar

const Container = styled.div`
	background-color: #1e3441;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	min-height: 70px;
	width: 100%;
	padding: 10px 40px;
	vertical-align: center;

	@media (max-width: 1050px) {
		justify-content: center;
	}
`

const SocialIcons = styled(NavGroup)`
	display: flex;
	font-size: 16px;
	text-align: center;
	padding: 15px;
	margin: 5px;
	border-radius: 50%;

	&:hover {
		background-color: #486575;
	}
`

const Caption = styled.span`
	color: #fff !important;
	display: flex;
	align-items: center;
	font-size: 0.7em;
	font-weight: 600;
`

const EnvelopeIcon = styled(FontAwesomeIcon)`
	margin-right: 5px;
	font-size: 0.9rem;
`

const FeedbackLink = styled(Link)`
	&:visited {
		text-decoration: none;
		color: white;
	}
`
