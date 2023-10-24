export const isContainScopeBy = (userScope: string | string[], scopes: string[]) => {
  if (!userScope) return false
  if (typeof userScope === 'string') {
    return isMatchedInPath(userScope, scopes)
  }
  if (Array.isArray(userScope) && userScope.length) {
    return userScope.every((item) => isMatchedInPath(item, scopes))
  }
  return false
}

/**
 * 两种匹配模式 上级大权限的匹配 和 资源限定的匹配
 * 资源限定的匹配不需要单独处理 只要inpath即可
 * e.g🚀 'read:app:profile' -> ['read', 'app', 'profile']
 * e.g🚀 'read:app' -> ['read', 'app']   read:app是上级大权限         匹配✅ 上级匹配模式
 * e.g🚀 'read::profile:xx:yy' -> ['read', '', 'profile',🤚 'xx', 'yy']时  匹配✅ 资源限定模式
 * @param {string} userScope 需要的权限名
 * @param {array} allScope scopes集合
 * @returns boolean
 */
const isMatchedInPath = (userScope: string, allScope: string[]) => {
  const userTree = userScope.split(':')
  return allScope.some((item) => {
    let result = false
    const itemTree = item.split(':')

    for (let index = 0; index < userTree.length; index++) {
      const userPiece = userTree[index]
      const itemPiece = itemTree[index]

      if (itemPiece === void 0) return result // 表示scope数据比userTree少 命中上级匹配模式

      if (itemPiece === '' || itemPiece === userPiece) {
        result = true
      } else {
        return false
      }
    }

    return result
  })
}
