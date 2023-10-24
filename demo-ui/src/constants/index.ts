/**------------------------------------------about IDaaS---------------------------------------------- */
type EnvIDaaS = {
  readonly ontest: string
  readonly prod: string
}
export const CLIENT_ID: EnvIDaaS = {
  ontest: '62s1wpI59EuHXDO1IwDXCa',
  prod: '2aii9tdOav2QICxLNm92Bd'
}

export const AUDIENCE: EnvIDaaS = {
  ontest: '1ZUGVTEOnfUyuJGLf0h7EN',
  prod: 'nsrE9M67UGHwjmI5hPXqJ'
}

export const SCOPES = ['get:vuln', 'post:ticket', 'put:vuln', 'post:vuln', 'get:ticket', 'put:ticket', 'post:common']

export const MGMT_DOMAIN = '1ePmlAVpLI6JX37PjEqH6B'
export const MGMT_AUDIENCE = 'XdEjcBLH3AShKophv6p7h'
export const MGMT_SCOPES = ['read:user:profile', 'read:user:pii']
/**--------------------------------------------------------------------------------------------------- */
