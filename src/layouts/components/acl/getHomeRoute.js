/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'client') return '/acl'
  else if (role === 'guest') return '/acl'
  else return '/dashboards/analytics'
}

export default getHomeRoute
