// ** React Imports
import { useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'
import { buildAbilityFor } from 'src/configs/acl'
import { defaultACLObj } from 'src/configs/acl'

const CanViewNavLink = props => {
  // ** Props
  const { children, navLink } = props

  // ** Hook
  const ability = useContext(AbilityContext)

  // const aclAbilities = defaultACLObj
  // let ability = buildAbilityFor('client', aclAbilities.subject)

  if (navLink && navLink.auth === false) {
    return <>{children}</>
  } else {
    return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
  }
}

export default CanViewNavLink
