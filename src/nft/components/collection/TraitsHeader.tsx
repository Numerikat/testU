import clsx from 'clsx'
import { Box } from 'nft/components/Box'
import * as styles from 'nft/components/collection/Filters.css'
import { ChevronUpIcon } from 'nft/components/icons'
import { subheadSmall } from 'nft/css/common.css'
import { ReactNode, useState } from 'react'

interface TraitsHeaderProps {
  title: string
  children: ReactNode
  numTraits?: number
  showBorderBottom?: boolean
}

export const TraitsHeader = (props: TraitsHeaderProps) => {
  const { children, showBorderBottom, title } = props
  const [isOpen, setOpen] = useState(false)

  return (
    <Box
      as="details"
      className={clsx(
        subheadSmall,
        showBorderBottom && styles.showBorderBottom,
        styles.borderTop,
        !isOpen && styles.rowHover,
        isOpen && styles.detailsOpen
      )}
      open={isOpen}
    >
      <Box
        as="summary"
        className={clsx(isOpen ? styles.rowHoverOpen : styles.rowHover)}
        display="flex"
        justifyContent="space-between"
        cursor="pointer"
        alignItems="center"
        fontSize="14"
        paddingTop="10"
        paddingLeft="12"
        paddingRight="12"
        paddingBottom="10"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!isOpen)
        }}
      >
        {title}

        <Box color="textSecondary" marginLeft="auto" marginRight="4">
          {props.numTraits}
        </Box>

        <Box
          color="textSecondary"
          transition="250"
          height="28"
          width="28"
          style={{
            transform: `rotate(${isOpen ? 0 : 180}deg)`,
            display: 'flex',
          }}
        >
          <ChevronUpIcon />
        </Box>
      </Box>
      {children}
    </Box>
  )
}