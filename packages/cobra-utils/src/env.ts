type ENV = 'local' | 'dev' | 'test' | 'ptest' | 'ontest' | 'prod'

const servicePathReg = /\.(dev|test|ptest|ontest|prod)\./

const {
  location: { host }
} = window

const [, matchEnv = 'test'] = (servicePathReg.exec(host) as ENV[]) || []

export { matchEnv }
