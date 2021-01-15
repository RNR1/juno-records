import { FC } from 'react'

interface Props {
  iso: string
}

/** @flow */
/**
 * A flag icon component based on ISO codes, add the correct "iso" prop and get the country flag icon.
 * @name FlagIcon
 * @param {string} iso
 * @returns {ReactElement} Icon component representing the ISO-country flag
 * @example
 *  <FlagIcon iso="gb" />
 */
const FlagIcon: FC<Props> = ({ iso }) => {
  return (
    <span
      className={`flag-icon flag-icon-${iso}`}
      style={{ marginRight: 5, zIndex: -1 }}
    />
  )
}

export default FlagIcon
