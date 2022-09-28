import { findItem } from 'cobralee-utils'

type LogOptions = {
  /**用户id */
  userId: 'l1' | 'l2' | 'l3'
  message?: string
}

export class LogManager {
  private message
  private userId

  static USERS = [
    { userId: 'l1', name: '🚗l1' },
    { userId: 'l2', name: '🚗l2' },
    { userId: 'l3', name: '🚗l3' }
  ]

  constructor(options: LogOptions) {
    const { message, userId } = options
    this.message = message
    this.userId = userId
  }

  output(): string {
    const item = findItem(LogManager.USERS, (c: { userId: string }) => c.userId === this.userId) ?? ({} as any)
    return `${item.name}-${Date.now()}-${this.message}`
  }
}
